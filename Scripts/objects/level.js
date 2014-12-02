/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Background Class
    var Level = (function () {
        function Level(game) {
            this.background = [];
            this.objectIndex = [];
            for (var i = 0; i < 2; i++) {
                this.background[i] = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
                this.backgroundWidth = this.background[i].getBounds().width;
                this.background[i].x = i * this.backgroundWidth;

                this.objectIndex[i] = game.children.length;
                game.addChildAt(this.background[i], this.objectIndex[i]);
            }

            this.maxScreens = 5;
            this.width = this.backgroundWidth * this.maxScreens;
            this.height = this.background[0].getBounds().height;

            this.speed = constants.GAME_SPEED;
        }
        Level.prototype.update = function (player, screenWidth) {
            this.camera(player, screenWidth);
        };

        Level.prototype.resetImageRight = function (index) {
            console.log(index);
            this.background[index].x = this.backgroundWidth;
        };

        Level.prototype.resetImageLeft = function (index) {
            this.background[index].x = -this.backgroundWidth;
        };

        Level.prototype.camera = function (player, screenWidth) {
            if (player.lastMovement > 0) {
                //locks player to the centre of the screen
                if (player.actualX < this.width - screenWidth * 0.5) {
                    if (player.x > screenWidth * 0.5) {
                        for (var i = 0; i < this.background.length; i++) {
                            this.background[i].x -= player.lastMovement;
                        }
                        player.x = screenWidth * 0.5;
                    }
                } else if (player.actualX + player.regX > this.width) {
                    player.x = screenWidth - player.regX;
                    player.actualX = this.width - player.regX;
                }
                for (var i = 0; i < this.background.length; i++) {
                    if (this.background[i].x + this.backgroundWidth < 0) {
                        this.resetImageRight(i);
                    }
                }
            } else if (player.lastMovement < 0) {
                //locks player to the centre of the screen
                if (player.actualX > screenWidth * 0.5) {
                    if (player.x < screenWidth * 0.5) {
                        for (var i = 0; i < this.background.length; i++) {
                            this.background[i].x -= player.lastMovement;
                        }
                        player.x = screenWidth * 0.5;
                    }
                } else if (player.actualX - player.regX < 0) {
                    player.x = 0 + player.regX;
                    player.actualX = 0 + player.regX;
                }
                for (var i = 0; i < this.background.length; i++) {
                    if (this.background[i].x > this.backgroundWidth) {
                        this.resetImageLeft(i);
                    }
                }
            }
        };

        Level.prototype.destroy = function () {
            for (var i = 0; i < this.background.length; i++) {
                game.removeChildAt(this.objectIndex[i]);
            }
        };
        return Level;
    })();
    objects.Level = Level;
})(objects || (objects = {}));
//# sourceMappingURL=level.js.map
