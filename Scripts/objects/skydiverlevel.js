var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/input.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="skydiverplayer.ts" />
/// <reference path="ring.ts" />
var objects;
(function (objects) {
    var skyDiverLevel = (function (_super) {
        __extends(skyDiverLevel, _super);
        function skyDiverLevel(currentScene) {
            var groundSprite = THREE.ImageUtils.loadTexture("assets/images/threejs/ground.png");
            groundSprite.wrapT = THREE.ClampToEdgeWrapping;
            var groundMaterial = new THREE.MeshBasicMaterial({ map: groundSprite });
            var groundGeometry = new THREE.BoxGeometry(1280, 960, 0);

            _super.call(this, groundGeometry, groundMaterial);
            currentScene.add(this);

            var radius = 10;
            this.rings = new Array();
            this.rings[0] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 900, radius, 50, 0);
            this.rings[1] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 850, radius, 100, -55);
            this.rings[2] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 800, radius, 150, -75);
            this.rings[3] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 750, radius, 160, -25);
            this.rings[4] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 700, radius, 215, 0);
            this.rings[5] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 650, radius, 305, 50);
            this.rings[6] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 600, radius, 400, 80);
            this.rings[7] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 550, radius, 465, 100);
            this.rings[8] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 500, radius, 375, 120);
            this.rings[9] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 450, radius, 295, 155);
            this.rings[10] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 400, radius, 205, 125);
            this.rings[11] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 350, radius, 155, 65);
            this.rings[12] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 300, radius, 75, 30);
            this.rings[13] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 250, radius, 0, 0);
            this.rings[14] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 200, radius, -50, 50);
            this.rings[15] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 150, radius, -85, 95);
            this.rings[16] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 100, radius, -125, 145);
            this.rings[17] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 50, radius, -175, 175);

            this.rings[18] = new objects.ring(currentScene, "assets/images/threejs/landing.png", 1, 20, -225, 130);
            this.rings[19] = new objects.ring(currentScene, "assets/images/threejs/landingbonus.png", 1, 5, -225, 130);

            this.missedRings = 0;
            this.multiplier = 0;
            this.score = 0;
            this.gameover = false;
            this.levelCompleted = false;
        }
        skyDiverLevel.prototype.update = function (player) {
            var buffer = 2.5;
            for (var i = 0; i < this.rings.length; i++) {
                if (!this.rings[i].cleared && player.position.z <= (this.rings[i].position.z + 0.01) && player.position.z >= (this.rings[i].position.z - buffer)) {
                    if (managers.Collision.inCircle(player.position.x, player.position.y, this.rings[i].position.x, this.rings[i].position.y, this.rings[i].collisionRadius)) {
                        this.rings[i].cleared = true;
                        this.multiplier++;
                        this.score += this.multiplier * constants.POINTS;
                        this.missedRings = 0;
                    }
                }

                if (!this.rings[i].removed && this.rings[i].position.z > player.camera.position.z) {
                    this.rings[i].removed = true;
                    scene.remove(this.rings[i]);
                    if (!this.rings[i].cleared) {
                        this.missedRings++;
                        this.multiplier = 0;
                    }
                }
            }

            if (this.rings[constants.LEVEL_END_RING].cleared && !this.levelCompleted) {
                console.log("level finished");
                console.log("score: " + this.score + " multiplier: " + this.multiplier + " missed Rings: " + this.missedRings);
                this.levelCompleted = true;
            }

            if (this.missedRings > 3 && !this.gameover) {
                console.log("you died");
                this.gameover = true;
            }
        };
        skyDiverLevel.prototype.destroy = function () {
            scene.remove(this);
        };
        return skyDiverLevel;
    })(THREE.Mesh);
    objects.skyDiverLevel = skyDiverLevel;
})(objects || (objects = {}));
//# sourceMappingURL=skydiverlevel.js.map
