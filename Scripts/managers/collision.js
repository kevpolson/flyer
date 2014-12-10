﻿var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
        }
        Collision.inCircle = function (x, y, centreX, centreY, radius) {
            return Math.pow(x - centreX, 2) + Math.pow(y - centreY, 2) < Math.pow(radius, 2);
        };

        Collision.distance = function (point1, point2) {
            return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
        };

        Collision.bulletEnemy = function (bullet, enemy) {
            return this.distance(new THREE.Vector2(bullet.x, bullet.y), new THREE.Vector2(enemy.x, enemy.y)) < (bullet.regX + enemy.regX);
        };

        Collision.playerEnemy = function (player, enemy) {
            return this.distance(new THREE.Vector2(player.x, player.y), new THREE.Vector2(enemy.x, enemy.y)) < (player.regY + enemy.regY);
        };

        Collision.playerExit = function (player, exit) {
            return this.distance(new THREE.Vector2(player.x, player.y), new THREE.Vector2(exit.x, exit.y)) < (player.regY + exit.regY);
        };

        Collision.playerKey = function (player, key) {
            return this.distance(new THREE.Vector2(player.x, player.y), new THREE.Vector2(key.x, key.y)) < (player.regY + key.regY);
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
