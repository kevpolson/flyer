/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Background Class
    var Level = (function () {
        function Level(game) {
            this.image1 = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
            this.image2 = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
            this.width = this.image1.getBounds().width;
            this.height = this.image1.getBounds().height;

            this.speed = constants.GAME_SPEED;

            this.image1.x = 0;
            this.resetImage2();

            this.objectIndex = game.children.length;
            game.addChildAt(this.image1, this.objectIndex);
            //this.game.addChildAt(this.image2, constants.BACKGROUND2_INDEX);
        }
        Level.prototype.update = function (player, screenWidth) {
            if (player.lastMovement > 0) {
                if (player.actualX < this.width - screenWidth * 0.5) {
                    if (player.x > screenWidth * 0.5) {
                        this.image1.x -= player.lastMovement;
                        player.x = screenWidth * 0.5;
                    }
                } else if (player.actualX + player.regX > this.width) {
                    player.x = screenWidth - player.regX;
                    player.actualX = this.width - player.regX;
                }
            } else if (player.lastMovement < 0) {
                if (player.actualX > screenWidth * 0.5) {
                    if (player.x < screenWidth * 0.5) {
                        this.image1.x -= player.lastMovement;
                        player.x = screenWidth * 0.5;
                    }
                } else if (player.actualX - player.regX < 0) {
                    player.x = 0 + player.regX;
                    player.actualX = 0 + player.regX;
                }
            }
        };

        Level.prototype.resetImage1 = function () {
            this.image1.x = this.width - constants.GAME_SPEED;
        };

        Level.prototype.resetImage2 = function () {
            this.image2.x = this.width - constants.GAME_SPEED;
        };

        Level.prototype.destroy = function () {
            game.removeChildAt(this.objectIndex);
            //game.removeChildAt(constants.BACKGROUND2_INDEX);
        };
        return Level;
    })();
    objects.Level = Level;
})(objects || (objects = {}));
//# sourceMappingURL=level.js.map
