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
        function triceratops(game, enemyLifeModifier) {
            _super.call(this, game, managers.Assets.triceratops, "charging");
            this.y = constants.GROUND_HEIGHT - this.regY + 5;
            this.lifeModifier = enemyLifeModifier;

            this.reset(constants.FACING_LEFT);
        }
        triceratops.prototype.update = function (player, cameraStatus) {
            console.log(this.x);
            var points = 0;
            if (this.life > 0) {
                this.x += this.direction * constants.GAME_SPEED;
                for (var i = 0; i < player.bullets.length; i++) {
                    if (this.life > 0 && !player.bullets[i].destroyed && managers.Collision.bulletEnemy(player.bullets[i], this)) {
                        //this causes a memory leak because the bullets are never removed from the array
                        player.bullets[i].destroy();
                        points = this.hit();
                    }
                }
            }
            if (cameraStatus) {
                this.x -= player.lastMovement;
            }

            if (player.direction === constants.FACING_LEFT) {
                if (this.x - this.regX > stage.canvas.width) {
                    var direction = constants.FACING_RIGHT;
                    if (player.direction === constants.FACING_RIGHT) {
                        direction = constants.FACING_LEFT;
                    }
                    this.reset(direction);
                }
            } else {
                if (this.x + this.regX < 0) {
                    var direction = constants.FACING_RIGHT;
                    if (player.direction === constants.FACING_RIGHT) {
                        direction = constants.FACING_LEFT;
                    }
                    this.reset(direction);
                }
            }

            return points;
        };

        triceratops.prototype.reset = function (direction) {
            this.gotoAndPlay("charging");
            if (direction === constants.FACING_LEFT) {
                this.x = stage.canvas.width + Math.floor(Math.random() * 900) + 500;
            } else {
                this.x = -(Math.floor(Math.random() * 900) + 500);
            }

            this.direction = direction;
            this.scaleX = direction;
            this.life = 6 * this.lifeModifier;
        };

        triceratops.prototype.hit = function () {
            var points = 0;
            if (this.life > 0) {
                this.life--;
                if (this.life <= 0) {
                    this.gotoAndPlay("dieing");
                    points += constants.POINTS;
                }
            }
            return points;
        };
        return triceratops;
    })(objects.enemy);
    objects.triceratops = triceratops;
})(objects || (objects = {}));
//# sourceMappingURL=triceratops.js.map
