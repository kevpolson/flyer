/// <reference path="../../managers/asset.ts" />
/// <reference path="gameobject.ts" />

module objects {
    // Triceratops Class
    export class triceratops extends enemy {
        direction: number;
        constructor(game: createjs.Container, enemyLifeModifier: number, player: objects.sideScrollingPlayer) {
            super(game, managers.Assets.triceratops, "charging");
            this.x = player.x + stage.canvas.width;
            this.y = constants.GROUND_HEIGHT - this.regY + 5;
            this.direction = constants.FACING_LEFT;
            this.scaleX = this.direction;

            this.life = 6 * enemyLifeModifier;
        }

        update(player: objects.sideScrollingPlayer, cameraStatus: boolean): number {
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
                        console.log(points);
                    }
                }
            }
            else if (cameraStatus) {
                this.x -= player.lastMovement;
            }

            return points;
        }

        hit(): number {
            var points = 0;
            if (this.life > 0) {
                this.life--;
                console.log(this.life);
                if (this.life <= 0) {
                    this.gotoAndPlay("dieing");
                    points += constants.POINTS;
                }
            }
            console.log(points);
            return points;
        }
    }
}  