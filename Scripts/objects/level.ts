/// <reference path="../managers/asset.ts" />
module objects {
    // Background Class
    export class Level {
        image1: createjs.Bitmap;
        image2: createjs.Bitmap;
        width: number;
        height: number;
        speed: number;
        objectIndex: number;
        constructor(game: createjs.Container) {
            this.image1 = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
            this.image2 = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
            this.width = this.image1.getBounds().width;
            this.height = this.image1.getBounds().height;

            this.speed = constants.GAME_SPEED;

            this.image1.x = 0;
            this.resetImage2();

            this.objectIndex = game.children.length;
            game.addChildAt(this.image1, this.objectIndex);
            //this.game.addChildAt(this.image2, constants.BACKGROUND2_INDEX);
        }

        update(player: objects.Player, screenWidth: number) {
            if (player.lastMovement > 0) {
                if (player.actualX < this.width - screenWidth * 0.5) {
                    if (player.x > screenWidth * 0.5) {
                        this.image1.x -= player.lastMovement;
                        player.x = screenWidth * 0.5;
                    }
                }
                else if (player.actualX + player.regX > this.width) {
                    player.x = screenWidth - player.regX;
                    player.actualX = this.width - player.regX;
                }
            }
            else if (player.lastMovement < 0) {
                if (player.actualX > screenWidth * 0.5) {
                    if (player.x < screenWidth * 0.5) {
                        this.image1.x -= player.lastMovement;
                        player.x = screenWidth * 0.5;
                    }
                }
                else if (player.actualX - player.regX < 0) {
                    player.x = 0 + player.regX;
                    player.actualX = 0 + player.regX;
                }
            }
        }
    

        resetImage1() {
            this.image1.x = this.width - constants.GAME_SPEED;
        }

        resetImage2() {
            this.image2.x = this.width - constants.GAME_SPEED;
        }

        destroy() {
            game.removeChildAt(this.objectIndex);
            //game.removeChildAt(constants.BACKGROUND2_INDEX);
        }
    }

}