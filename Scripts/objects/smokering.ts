module objects {
    export class smokeRing extends createjs.Shape {
        altitude: number;
        radius: number;
        constructor(gameIndex: number, newAltitude: number, newRadius: number) {
            super();
            this.radius = newRadius;
            this.altitude = newAltitude;
            this.graphics.setStrokeStyle(0.25).beginStroke("yellow").drawCircle(0, 0, this.radius);
            this.x = 200;
            this.y = 200;
            //this.regX = 
            game.addChildAt(this, gameIndex);
        }

        update(currentAlitude: number, motionX: number, motionY: number) {
            if (currentAlitude <= this.altitude) {
                this.scaleX += 0.25;
                this.scaleY += 0.25;
            }
            this.x += motionX;
            this.y += motionY;
        }
    }
}