/// <reference path="../../managers/asset.ts" />
module objects {
    export class key extends createjs.Shape {
        width: number;
        height: number;
        objectIndex: number;
        constructor(game: createjs.Container) {
            super();
            this.width = 10;
            this.height = 5;
            this.graphics.beginFill("Gold").drawRect(0, 0, this.width, this.height);

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = 1750;
            this.y = constants.GROUND_HEIGHT - this.regY;
            this.objectIndex = game.children.length;
            game.addChildAt(this, this.objectIndex);
        }

        update(player: objects.sideScrollingPlayer, cameraStatus: boolean) {
            if (cameraStatus) {
                this.x -= player.lastMovement;
            }
        }

        destroy() {
            game.removeChildAt(this.objectIndex);
        }
    }
}   