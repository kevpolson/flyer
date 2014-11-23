/// <reference path="../managers/asset.ts" />
module objects {
    export class GameObject extends createjs.Sprite {
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        speed: number;
        constructor(stage: createjs.Stage, game: createjs.Container, spriteSheet: createjs.SpriteSheet, newAnimation: string) {
            this.stage = stage;
            this.game = game;

            super(spriteSheet, newAnimation);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.speed = constants.GAME_SPEED;

            //game.addChild(this);
        }

        update() {
        }

        destroy() {
            //game.removeChild(this);
        }
    }
} 