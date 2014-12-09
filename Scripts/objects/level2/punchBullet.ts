module objects {
    export class punchBullet extends createjs.Shape {
        direction: number;
        objectIndex: number;
        timer: number;
        life: number;
        destroyed: boolean;
        constructor(game: createjs.Container, newX, newY, currentDirection: number) {
            super();
            this.direction = currentDirection;
            this.timer = 0;

            var startAngle = 345 * Math.PI / 180;
            var endAngle = 15 * Math.PI / 180;
            var anticlockwise = false;
            if (this.direction === constants.FACING_LEFT) {
                startAngle = 195 * Math.PI / 180;
                endAngle = 165 * Math.PI / 180;
                anticlockwise = true;
            }

            this.graphics.moveTo(0, 0)
            this.graphics.beginFill(constants.COLOR_ORANGE).arc(0, 0, 15, startAngle, endAngle, anticlockwise);
            this.x = newX;
            this.y = newY;

            this.life = constants.BULLET_LIFE;

            this.objectIndex = game.children.length;
            game.addChildAt(this, this.objectIndex);
            this.destroyed = false;
        }

        update() {
            this.x += this.direction * constants.GAME_SPEED * 3;
            if (this.timer++ >= this.life) {
                this.destroy();
            }
        }

        destroy() {
            game.removeChild(this);
            this.destroyed = true;
        }
    }
} 