var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../../managers/asset.ts" />
var objects;
(function (objects) {
    var enemy = (function (_super) {
        __extends(enemy, _super);
        function enemy(game, spriteSheet, newAnimation) {
            _super.call(this, spriteSheet, newAnimation);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.speed = constants.GAME_SPEED;
            this.life = constants.PLAYER_LIVES;

            this.objectIndex = game.children.length;
            game.addChildAt(this, this.objectIndex);
        }
        enemy.prototype.update = function (player, cameraStatus) {
            return;
        };

        enemy.prototype.hit = function () {
            return;
        };

        enemy.prototype.destroy = function () {
            game.removeChildAt(this.objectIndex);
        };
        return enemy;
    })(createjs.Sprite);
    objects.enemy = enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
