/* Play State*/

Game.Play = function(game) {
  this.game = game;
};

Game.Play.prototype = {
  init: function() {
		this.physics.startSystem(Phaser.Physics.ARCADE);
		},
  create: function() {
    this.game.world.setBounds(0, 0 ,Game.w ,Game.h);
    this.game.stage.backgroundColor = '#95c5c6';
    this.game_won = false;
    var rectImgPreview = new Phaser.Rectangle(100, 100, 500, 400);

    if (difficulty === 'easy') {
      this.square = 3;
    }else if (difficulty === 'normal') {
      this.square = 4;
    }else if (difficulty === 'hard') {
      this.square = 5;
    }

    this.puzzle = new Puzzle(this.game, level.toString(), this.square);  
    this.puzzle.scatter();

    this.menu_button = this.game.add.button(0,0,'menu', this.gotoMenu,this);
  },
  gotoMenu: function() {
    this.game.state.start('Menu');
  },
  makeBox: function(x,y) {
    var bmd = this.game.add.bitmapData(x, y);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, x, y);
    bmd.ctx.fillStyle = '#fff';
    bmd.ctx.fill();
    return bmd;
  },
  update: function() {
	    if (this.puzzle.won === true) {
          this.game.input.onUp.add(this.nextLevel,this);
          this.win_text = this.game.add.text(Game.w/2, Game.h/2, 'GREAT!\nTap to Play Again.', {
              font: "25px Arial",
              fill: "#bc9a21",
              align: "center"
          });
          this.win_text.anchor.setTo(0.5);
		}
  },
  nextLevel: function() {
    this.game.state.start('Gallery');
  },
};
