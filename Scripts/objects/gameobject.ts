/// <reference path="../managers/asset.ts" />
module objects {
    export class GameObject extends createjs.Sprite {
        width: number;
        height: number;
        speed: number;
        objectIndex: number;
        constructor(game: createjs.Container, spriteSheet: createjs.SpriteSheet, newAnimation: string) {
            super(spriteSheet, newAnimation);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.speed = constants.GAME_SPEED;

            this.objectIndex = game.children.length;
            game.addChildAt(this, this.objectIndex);
        }

        destroy() {
            game.removeChildAt(this.objectIndex);
        }
    }
} 