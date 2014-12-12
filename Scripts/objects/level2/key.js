var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../../managers/asset.ts" />
var objects;
(function (objects) {
    var key = (function (_super) {
        __extends(key, _super);
        function key(game) {
            _super.call(this);
            this.width = 10;
            this.height = 5;
            this.graphics.beginFill("Gold").drawRect(0, 0, this.width, this.height);

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = 1750;
            this.y = constants.GROUND_HEIGHT - this.regY;
            this.objectIndex = game.children.length;
            game.addChildAt(this, this.objectIndex);
        }
        //update the key
        key.prototype.update = function (player, cameraStatus) {
            if (cameraStatus) {
                this.x -= player.lastMovement;
            }
        };

        //destroy the key
        key.prototype.destroy = function () {
            game.removeChildAt(this.objectIndex);
        };
        return key;
    })(createjs.Shape);
    objects.key = key;
})(objects || (objects = {}));
//# sourceMappingURL=key.js.map
