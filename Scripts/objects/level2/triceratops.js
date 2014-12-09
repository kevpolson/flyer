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
    // Triceratops Class
    var triceratops = (function (_super) {
        __extends(triceratops, _super);
        function triceratops(game, enemyLifeModifier, player) {
            _super.call(this, game, managers.Assets.triceratops, "charging");
            this.x = player.x + stage.canvas.width;
            this.y = constants.GROUND_HEIGHT - this.regY + 5;
            this.direction = constants.FACING_LEFT;
            this.scaleX = this.direction;

            this.life = 6 * enemyLifeModifier;
        }
        triceratops.prototype.update = function () {
            if (this.life > 0) {
                this.x += this.direction * constants.GAME_SPEED;
            }
        };

        triceratops.prototype.hit = function () {
            if (this.life > 0) {
                this.life--;
                console.log(this.life);
                if (this.life <= 0) {
                    this.gotoAndPlay("dieing");
                }
            }
        };
        return triceratops;
    })(objects.GameObject);
    objects.triceratops = triceratops;
})(objects || (objects = {}));
//# sourceMappingURL=triceratops.js.map
