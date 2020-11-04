/* Load State */
Game.Load = function(game) {
  this.game = game;
};

Game.Load.prototype = {
  preload: function() {
    var loadingText = this.game.add.text(Game.w/2, Game.h/2, 'Loading...', {
      font: "25px Arial",
      fill: "#4968d6",
      align: "center"
    }).anchor.setTo(0.5);

  	var preloading = this.game.add.sprite(Game.w/2-64, Game.h/2+50, 'loading');
  	this.game.load.setPreloadSprite(preloading);

    this.game.load.image('logo', 'assets/images/logo.png');
    this.game.load.image('easy','assets/images/easy.png');
    this.game.load.image('normal','assets/images/normal.png');
    this.game.load.image('hard','assets/images/hard.png');
    this.game.load.image('start','assets/images/start.png');
    this.game.load.image('menu', 'assets/images/menu.png');

    for(var i = 1;i < 13;i++) {
      this.game.load.image(i.toString(), 'assets/images/'+i.toString()+'.png');
    }
  },
  create: function() {
    this.game.state.start('Menu');
  }
};
