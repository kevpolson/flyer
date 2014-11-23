/// <reference path="../managers/asset.ts" />
module objects {
    // Background Class
    export class Background {
        image1: createjs.Bitmap;
        image2: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        speed: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image1 = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
            this.image2 = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
            this.width = this.image1.getBounds().width;
            this.height = this.image1.getBounds().height;

            this.speed = constants.GAME_SPEED;

            this.image1.x = 0;
            this.resetImage2();

            this.game.addChild(this.image1);
            this.game.addChild(this.image2);
        }

        update() {
        }

        resetImage1() {
            this.image1.x = this.width - constants.GAME_SPEED;
        }

        resetImage2() {
            this.image2.x = this.width - constants.GAME_SPEED;
        }

        destroy() {
            game.removeChild(this.image1);
            game.removeChild(this.image2);
        }
    }

}