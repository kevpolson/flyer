/// <reference path="../../managers/asset.ts" />
module objects {
    export class exit extends createjs.Shape {
        width: number;
        height: number;
        objectIndex: number;
        frame: createjs.Shape;
        frameIndex: number;
        constructor(game: createjs.Container) {
            super();
            this.width = 60;
            this.height = 80;
            this.graphics.beginFill(constants.COLOR_BLACK).drawRect(0, 0, this.width, this.height);

            this.frame = new createjs.Shape;
            this.graphics.beginStroke("Gold").setStrokeStyle(5).drawRect(0, 0, this.width, this.height);

            this.frame.regX = this.width * 0.5;
            this.frame.regY = this.height * 0.5;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = 500;
            this.y = constants.GROUND_HEIGHT - this.regY - 5;
            this.frame.x = 500;
            this.frame.y = constants.GROUND_HEIGHT - this.regY - 5;

            this.objectIndex = game.children.length;
            game.addChildAt(this, this.objectIndex);
            this.frameIndex = game.children.length;
            game.addChildAt(this, this.objectIndex);
        }

        update(player: objects.sideScrollingPlayer, cameraStatus: boolean) {
            if (cameraStatus) {
                this.x -= player.lastMovement;
                this.frame.x -= player.lastMovement;
            }
        }

        destroy() {
            game.removeChildAt(this.objectIndex);
            game.removeChildAt(this.frameIndex);
        }
    }
}  