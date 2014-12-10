module managers {
    export class Collision {
        static inCircle(x: number, y: number, centreX: number, centreY: number, radius: number) {
            return Math.pow(x - centreX, 2) + Math.pow(y - centreY, 2) < Math.pow(radius, 2);
        }

        static distance(point1: THREE.Vector2, point2: THREE.Vector2) {
            return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
        }

        static bulletEnemy(bullet: objects.punchBullet, enemy: objects.enemy) {
            return this.distance(new THREE.Vector2(bullet.x, bullet.y), new THREE.Vector2(enemy.x, enemy.y)) <
                (bullet.regX + enemy.regX);
        }

        static playerEnemy(player: objects.sideScrollingPlayer, enemy: objects.enemy) {
            return this.distance(new THREE.Vector2(player.x, player.y), new THREE.Vector2(enemy.x, enemy.y)) <
                   (player.regY + enemy.regY);
        }

        static playerExit(player: objects.sideScrollingPlayer, exit: objects.exit) {
            return this.distance(new THREE.Vector2(player.x, player.y), new THREE.Vector2(exit.x, exit.y)) <
                (player.regY + exit.regY);
        }

        static playerKey(player: objects.sideScrollingPlayer, key: objects.key) {
            return this.distance(new THREE.Vector2(player.x, player.y), new THREE.Vector2(key.x, key.y)) <
                (player.regY + key.regY);
        }
    }
} 