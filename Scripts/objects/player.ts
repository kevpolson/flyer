/// <reference path="../managers/asset.ts" />
/// <reference path="gameobject.ts" />
module objects {
    // Player Class
    export class Player extends GameObject {
        actualX: number;
        lastMovement: number;
        constructor(game: createjs.Container) {
            super(game, managers.Assets.player, "idle");

            this.x = 100;
            this.actualX = this.x;
            this.y = constants.GROUND_HEIGHT - this.regY;
        }

        update(input: managers.Input) {
            this.lastMovement = 0;
            if(input.isKeyDown(constants.UP)) {
                console.log('up');
            } else if (input.isKeyDown(constants.DOWN)) {
                console.log('down');
            }
            if (input.isKeyDown(constants.RIGHT)) {
                this.x += this.speed;
                this.actualX += this.speed;
                this.lastMovement = this.speed;
            } else if (input.isKeyDown(constants.LEFT)) {
                this.x -= this.speed;
                this.actualX -= this.speed;
                this.lastMovement = -this.speed;
            }
            if(input.hasKeyBeenUp(constants.SPACE)) {
                console.log('space');
            }
        }

        //set idle animation
        idle() {
            this.gotoAndPlay("idle");
        }
    }
} 