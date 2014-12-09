/// <reference path="../../managers/asset.ts" />
module objects {
    export class enemy extends createjs.Sprite {
        width: number;
        height: number;
        speed: number;
        objectIndex: number;
        life: number;
        constructor(game: createjs.Container, spriteSheet: createjs.SpriteSheet, newAnimation: string) {
            super(spriteSheet, newAnimation);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.speed = constants.GAME_SPEED;
            this.life = constants.PLAYER_LIVES;

            this.objectIndex = game.children.length;
            game.addChildAt(this, this.objectIndex);
        }

        update(player: objects.sideScrollingPlayer, cameraStatus: boolean) {
        }

        hit() {
        }

        destroy() {
            game.removeChildAt(this.objectIndex);
        }
    }
} 