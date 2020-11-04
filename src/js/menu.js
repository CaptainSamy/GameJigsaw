/* Menu State */
var difficulty;

Game.Menu = function(game){
  this.game = game;
};

Game.Menu.prototype =  {
    create: function() {
        difficulty = 'easy';
        bg = this.game.add.tileSprite(0, 0, Game.w+200, Game.h+100, 'background');

        // logo
        var imgLogo = game.add.sprite((Game.w+200)/2, 100, "logo");
        imgLogo.anchor.setTo(0.5, 0.5);
        imgLogo.angle = -10;
        // animation logo
        var tweenY = game.add.tween(imgLogo).to({
            y: '+50'
        }, 3000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1);
        var tweenRot = game.add.tween(imgLogo).to({
            angle: 10
        }, 5000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1);
        tweenY.yoyo(true);
        tweenRot.yoyo(true);

        this.difficultyButtons = this.game.add.group(); // group button

        // Easy Button
        this.easyButton = this.game.add.button((Game.w+200)/2, Game.h/2+75,'easy', this.difficultySelect, this);
        this.easyButton.anchor.setTo(0.5);
        this.easyButton.tint = 0x6c83eb;
        this.difficultyButtons.add(this.easyButton);

        // Normal Button
        this.normalButton = this.game.add.button((Game.w+200)/2, Game.h/2+110,'normal', this.difficultySelect, this);
        this.normalButton.anchor.setTo(0.5);
        this.difficultyButtons.add(this.normalButton);

        // Hard Button
        this.hardButton = this.game.add.button((Game.w+200)/2, Game.h/2+155,'hard', this.difficultySelect, this);
        this.hardButton.anchor.setTo(0.5);
        this.difficultyButtons.add(this.hardButton);

        // Start Button
        this.startButton = this.game.add.button((Game.w+200)/2, Game.h/2+220,'start', this.begin, this);
        this.startButton.anchor.setTo(0.5, 0.5);
    },
    begin: function() {
        this.game.state.start('Gallery');
    },
    difficultySelect: function(button) {
      this.difficultyButtons.forEach(function(btn) {
        btn.tint = 0xffffff;
      });
      button.tint = 0x6c83eb;
      difficulty = button.key;
    }
};
