/// <reference path="../../managers/asset.ts" />
/// <reference path="gameobject.ts" />

module objects {
    // Player Class
    export class triceratops extends GameObject {
        direction: number;
        constructor(game: createjs.Container) {
            super(game, managers.Assets.triceratops, "charging");
            this.x = 600;
            this.y = constants.GROUND_HEIGHT - this.regY + 5;
            this.direction = constants.FACING_LEFT;
        }

        update() {
            this.scaleX = this.direction;
            //this.x += this.direction * constants.GAME_SPEED;
        }

    }
}  