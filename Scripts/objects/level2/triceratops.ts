/// <reference path="../../managers/asset.ts" />
/// <reference path="gameobject.ts" />

module objects {
    // Triceratops Class
    export class triceratops extends GameObject {
        direction: number;
        constructor(game: createjs.Container, enemyLifeModifier: number, player: objects.sideScrollingPlayer) {
            super(game, managers.Assets.triceratops, "charging");
            this.x = player.x + stage.canvas.width;
            this.y = constants.GROUND_HEIGHT - this.regY + 5;
            this.direction = constants.FACING_LEFT;
            this.scaleX = this.direction;

            this.life = 6 * enemyLifeModifier;
        }

        update() {
            if (this.life > 0) {
                this.x += this.direction * constants.GAME_SPEED;
            }
        }

        hit() {
            if (this.life > 0) {
                this.life--;
                console.log(this.life);
                if (this.life <= 0) {
                    this.gotoAndPlay("dieing");
                }
            }
        }
    }
}  