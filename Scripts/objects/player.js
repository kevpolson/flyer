var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
/// <reference path="gameobject.ts" />
var objects;
(function (objects) {
    // Player Class
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game) {
            _super.call(this, game, managers.Assets.player, "idle");

            this.x = 100;
            this.actualX = this.x;
            this.y = constants.GROUND_HEIGHT - this.regY;
        }
        Player.prototype.update = function (input) {
            this.lastMovement = 0;
            if (input.isKeyDown(constants.UP)) {
                console.log('up');
            } else if (input.isKeyDown(constants.DOWN)) {
                console.log('down');
            }
            if (input.isKeyDown(constants.RIGHT)) {
                this.x += this.speed;
                this.actualX += this.speed;
                this.lastMovement = this.speed;
            } else if (input.isKeyDown(constants.LEFT)) {
                this.x -= this.speed;
                this.actualX -= this.speed;
                this.lastMovement = -this.speed;
            }
            if (input.hasKeyBeenUp(constants.SPACE)) {
                console.log('space');
            }
        };

        //set idle animation
        Player.prototype.idle = function () {
            this.gotoAndPlay("idle");
        };
        return Player;
    })(objects.GameObject);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
