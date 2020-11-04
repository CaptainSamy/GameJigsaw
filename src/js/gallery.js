/* Gallery State */
var level = 1;

Game.Gallery = function(game) {
  this.game = game;
};

Game.Gallery.prototype = {
  create:function() {
    bg = this.game.add.tileSprite(0, 0, Game.w+200, Game.h+100, 'background');

    this.menu_button = this.game.add.button(0,0,'menu', this.gotoMenu,this);

    this.game.add.text((Game.w+200)/2 , 40, difficulty, {
      font: "25px Arial",
      fill: "#496cd6",
      align: "center"
    }).anchor.setTo(0.5);

    x = 150;
    y = 150;
    count = 0
    for(var i = 1;i < 13;i++) {
      count += 1;
      var b = this.game.add.button(x, y, i.toString(), this.loadLevel, this);
      b.anchor.setTo(0.5);
      b.scale.x = 0.2;
      b.scale.y = 0.2;
      x += 180;
      if (count === 4) {
        count = 0;
        y += 150;
        x = 150;
      }
    }
  },
  gotoMenu: function() {
    this.game.state.start('Menu');
  },
  loadLevel: function() {
    level = arguments[0].key;
    this.game.state.start('Play');
  }

};
