/// <reference path="../../managers/asset.ts" />
/// <reference path="gameobject.ts" />

module objects {
    // Triceratops Class
    export class triceratops extends enemy {
        direction: number;
        lifeModifier: number;
        constructor(game: createjs.Container, enemyLifeModifier: number) {
            super(game, managers.Assets.triceratops, "charging");
            this.y = constants.GROUND_HEIGHT - this.regY + 5;
            this.lifeModifier = enemyLifeModifier;

            this.reset(constants.FACING_LEFT);
        }

        update(player: objects.sideScrollingPlayer, cameraStatus: boolean): number {
            console.log(this.x);
            var points = 0;
            if (this.life > 0) {
                this.x += this.direction * constants.GAME_SPEED;
                for (var i = 0; i < player.bullets.length; i++) {
                    if (this.life > 0 &&
                        !player.bullets[i].destroyed &&
                        managers.Collision.bulletEnemy(player.bullets[i], this)) {
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
            }
            else {
                if (this.x + this.regX < 0) {
                    var direction = constants.FACING_RIGHT;
                    if (player.direction === constants.FACING_RIGHT) {
                        direction = constants.FACING_LEFT;
                    }
                    this.reset(direction);
                }
            }

            return points;
        }

        reset(direction: number) {
            this.gotoAndPlay("charging");
            if (direction === constants.FACING_LEFT) {
                this.x = stage.canvas.width + Math.floor(Math.random() * 900) + 500;
            }
            else {
                this.x = -(Math.floor(Math.random() * 900) + 500);
            }
            
            this.direction = direction;
            this.scaleX = direction;
            this.life = 6 * this.lifeModifier;
        }

        hit(): number {
            var points = 0;
            if (this.life > 0) {
                this.life--;
                if (this.life <= 0) {
                    this.gotoAndPlay("dieing");
                    points += constants.POINTS;
                }
            }
            return points;
        }
    }
}  