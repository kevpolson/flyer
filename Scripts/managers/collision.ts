module managers {
    export class Collision {
        static inCircle(x: number, y: number, centreX: number, centreY: number, radius: number) {
            return Math.pow(x - centreX, 2) + Math.pow(y - centreY, 2) < Math.pow(radius, 2);
        }
    }
} 