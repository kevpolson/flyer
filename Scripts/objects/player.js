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
        function Player(stage, game) {
            _super.call(this, stage, game, managers.Assets.player, "idle");
            this.jumping = false;
            this.jumpNext = false;
            this.shootNext = false;
            this.GUNX = this.regX * 0.5;
            this.LASER_DURATION = 125;
            this.LASER_WIDTH = 3;
            this.gunFired = false;

            this.x = 100;
            this.y = constants.GROUND_HEIGHT - this.regY;

            this.prevAnimation = this.currentAnimation;
        }
        //initiate firing the gun
        Player.prototype.shootPressed = function () {
            this.shootNext = true;
        };

        //shoot the laser
        Player.prototype.shoot = function () {
            if (!this.gunFired) {
                createjs.Sound.play("laser");
                this.gunFired = true;
                this.fireTime = createjs.Ticker.getTime() + this.LASER_DURATION;

                this.enemyX = this.stage.mouseX;
                this.enemyY = this.stage.mouseY;

                this.createLaser("#DF0174");
            }
        };

        Player.prototype.update = function () {
            this.x += 10;
        };

        //set idle animation
        Player.prototype.idle = function () {
            this.gotoAndPlay("idle");
        };

        //refresh the laser if the player is jumping
        Player.prototype.refreshLaser = function () {
            this.game.removeChild(this.laser);
            this.createLaser("#DF0174");
        };

        //create the laser object
        Player.prototype.createLaser = function (newColor) {
            this.laser = new createjs.Shape();
            this.laser.graphics.beginFill(newColor);
            this.laser.graphics.moveTo(this.x + this.GUNX, this.y).lineTo(this.enemyX, this.enemyY).lineTo(this.enemyX, this.enemyY + this.LASER_WIDTH).lineTo(this.x + this.GUNX, this.y + this.LASER_WIDTH).lineTo(this.x + this.GUNX, this.y);
            game.addChild(this.laser);
        };

        //remove laser object
        Player.prototype.destroyLaser = function () {
            if (this.gunFired) {
                this.gunFired = false;
                this.enemyX = 0;
                this.enemyY = 0;
                game.removeChild(this.laser);
            }
        };
        return Player;
    })(objects.GameObject);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
