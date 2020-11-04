/* Boot State */
var Game = {
    w: 600,
    h: 450
};
var bg;

Game.Boot = function(game) {
    this.game = game;
};

Game.Boot.prototype = {
    preload: function() {
        this.game.load.image('background', 'assets/images/background.png');
        this.game.load.image('loading', 'assets/images/loading.png');
        this.game.load.image('instructions', 'assets/images/instructions.png');
    },
    create: function() {
        this.game.state.start('Load');
    }
};
