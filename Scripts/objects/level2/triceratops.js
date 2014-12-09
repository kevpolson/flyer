/// <reference path="../../managers/asset.ts" />
/// <reference path="gameobject.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Player Class
    var triceratops = (function (_super) {
        __extends(triceratops, _super);
        function triceratops(game) {
            _super.call(this, game, managers.Assets.triceratops, "charging");
            this.x = 600;
            this.y = constants.GROUND_HEIGHT - this.regY + 5;
            this.direction = constants.FACING_LEFT;
        }
        triceratops.prototype.update = function () {
            this.scaleX = this.direction;
            //this.x += this.direction * constants.GAME_SPEED;
        };
        return triceratops;
    })(objects.GameObject);
    objects.triceratops = triceratops;
})(objects || (objects = {}));
//# sourceMappingURL=triceratops.js.map
