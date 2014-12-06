module objects {
    export class smokeRing extends createjs.Shape {
        altitude: number;
        constructor(gameIndex: number) {
            super();
            this.graphics.setStrokeStyle(5).beginStroke("yellow").drawCircle(0, 0, 50);
            game.addChildAt(this, gameIndex);
        }
    }
}