var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../../managers/asset.ts" />
var objects;
(function (objects) {
    var exit = (function (_super) {
        __extends(exit, _super);
        function exit(game) {
            _super.call(this);
            this.width = 60;
            this.height = 80;
            this.graphics.beginFill(constants.COLOR_BLACK).drawRect(0, 0, this.width, this.height);

            this.frame = new createjs.Shape;
            this.graphics.beginStroke("Gold").setStrokeStyle(5).drawRect(0, 0, this.width, this.height);

            this.frame.regX = this.width * 0.5;
            this.frame.regY = this.height * 0.5;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = 500;
            this.y = constants.GROUND_HEIGHT - this.regY - 5;
            this.frame.x = 500;
            this.frame.y = constants.GROUND_HEIGHT - this.regY - 5;

            this.objectIndex = game.children.length;
            game.addChildAt(this, this.objectIndex);
            this.frameIndex = game.children.length;
            game.addChildAt(this, this.objectIndex);
        }
        exit.prototype.update = function (player, cameraStatus) {
            if (cameraStatus) {
                this.x -= player.lastMovement;
                this.frame.x -= player.lastMovement;
            }
        };

        exit.prototype.destroy = function () {
            game.removeChildAt(this.objectIndex);
            game.removeChildAt(this.frameIndex);
        };
        return exit;
    })(createjs.Shape);
    objects.exit = exit;
})(objects || (objects = {}));
//# sourceMappingURL=exit.js.map
