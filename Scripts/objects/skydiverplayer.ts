module objects {
    export class skyDiverPlayer extends GameObject {
        ground: createjs.Bitmap;
        width: number;
        height: number;
        speed: number;
        constructor(game: createjs.Container, screenWidth: number, screenHeight: number) {
            super(game, managers.Assets.skyPlayer, "falling");
            this.scaleX = 3;
            this.scaleY = 3;
            this.x = screenWidth * 0.5 - this.regX;
            this.y = screenHeight * 0.5 - this.regY;
        }

        update(player: objects.skyDiverPlayer) {
        }
    }
} 