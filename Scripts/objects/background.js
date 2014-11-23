/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Background Class
    var Background = (function () {
        function Background(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image1 = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
            this.image2 = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
            this.width = this.image1.getBounds().width;
            this.height = this.image1.getBounds().height;

            this.speed = constants.GAME_SPEED;

            this.image1.x = 0;
            this.resetImage2();

            this.game.addChild(this.image1);
            this.game.addChild(this.image2);
        }
        Background.prototype.update = function () {
        };

        Background.prototype.resetImage1 = function () {
            this.image1.x = this.width - constants.GAME_SPEED;
        };

        Background.prototype.resetImage2 = function () {
            this.image2.x = this.width - constants.GAME_SPEED;
        };

        Background.prototype.destroy = function () {
            game.removeChild(this.image1);
            game.removeChild(this.image2);
        };
        return Background;
    })();
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map
