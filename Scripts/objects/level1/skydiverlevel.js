var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../../managers/input.ts" />
/// <reference path="../../managers/collision.ts" />
/// <reference path="../../managers/asset.ts" />
/// <reference path="skydiverplayer.ts" />
/// <reference path="ring.ts" />
var objects;
(function (objects) {
    var skyDiverLevel = (function (_super) {
        __extends(skyDiverLevel, _super);
        function skyDiverLevel(currentScene, ringMisses) {
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
            this.rings[7] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 550, radius, 465, 110);
            this.rings[8] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 500, radius, 375, 130);
            this.rings[9] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 450, radius, 295, 155);
            this.rings[10] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 400, radius, 205, 125);
            this.rings[11] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 350, radius, 155, 65);
            this.rings[12] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 300, radius, 75, 30);
            this.rings[13] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 250, radius, 0, 0);
            this.rings[14] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 200, radius, -50, 50);
            this.rings[15] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 150, radius, -85, 95);
            this.rings[16] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 100, radius, -125, 145);
            this.rings[17] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 50, radius, -175, 175);

            this.rings[18] = new objects.ring(currentScene, "assets/images/threejs/landingpad.png", 1, 20, -225, 130);
            this.rings[19] = new objects.ring(currentScene, "assets/images/threejs/landingpadbonus.png", 1, 5, -225, 130);

            this.attackDino = new objects.attack();

            this.player = new objects.skyDiverPlayer(currentScene);

            this.missedRings = 0;
            this.maxScent = ringMisses;
            this.multiplier = 0;
            this.score = 0;
            this.gameover = false;
            this.levelCompleted = false;

            this.createHUD();
            this.warningCounter = 0;
            this.warningDisplay = "inline";
        }
        skyDiverLevel.prototype.update = function (currentScene) {
            this.attackDino.update(this.player);
            this.player.update(this.attackDino);

            var buffer = 2.5;
            for (var i = 0; i < this.rings.length; i++) {
                if (!this.rings[i].cleared && this.player.position.z <= (this.rings[i].position.z + 0.01) && this.player.position.z >= (this.rings[i].position.z - buffer)) {
                    if (managers.Collision.inCircle(this.player.position.x, this.player.position.y, this.rings[i].position.x, this.rings[i].position.y, this.rings[i].collisionRadius)) {
                        this.rings[i].cleared = true;
                        this.multiplier++;
                        this.score += this.multiplier * constants.POINTS;
                        this.missedRings--;
                        if (this.missedRings <= 0) {
                            this.missedRings = 0;
                        }
                    }
                }

                if (!this.rings[i].removed && this.rings[i].position.z > this.player.camera.position.z) {
                    this.rings[i].removed = true;
                    scene.remove(this.rings[i]);
                    if (!this.rings[i].cleared) {
                        this.missedRings++;
                        this.multiplier = 0;
                    }
                }
            }

            if (this.player.position.z <= constants.GROUND) {
                this.player.rotation.y = 0;
                if (this.player.parachuteOpen) {
                    if (!this.levelCompleted && this.rings[constants.LEVEL_END_RING].cleared) {
                        this.player.rotation.x = 0;
                        this.player.position.z = constants.GROUND;

                        console.log("level finished");
                        console.log("score: " + this.score + " multiplier: " + this.multiplier + " missed Rings: " + this.missedRings);
                        this.levelCompleted = true;
                    }
                    this.player.animateLanding();
                } else if (!this.levelCompleted) {
                    console.log("level failed");
                    this.gameover = true;
                    if (!this.player.parachuteOpen) {
                        this.player.rotation.x = -0.65;
                        this.player.position.z = 0;
                    } else {
                        this.player.position.z = constants.GROUND;
                        this.player.rotation.x = 0;
                    }
                }
            }

            if (this.missedRings >= this.maxScent && !this.gameover) {
                console.log("you died");
                this.queueAttack(currentScene);
                this.gameover = true;
            }

            this.updateHUD();
        };

        skyDiverLevel.prototype.queueAttack = function (currentScene) {
            this.attackDino.startAttack(currentScene, this.player);
        };

        skyDiverLevel.prototype.destroy = function (currentScene) {
            currentScene.remove(this);
            currentScene.remove(this.player);
            currentScene.remove(this.attackDino);
            for (var i = 0; i < this.rings.length; i++) {
                if (!this.rings[i].removed) {
                    currentScene.remove(this.rings[i]);
                }
            }
        };

        skyDiverLevel.prototype.updateHUD = function () {
            var score = document.getElementById("score");
            var lives = document.getElementById("lives");
            var altitude = document.getElementById("altitude");
            var warning = document.getElementById("warning");

            if (this.maxScent - this.missedRings < 0) {
                lives.innerHTML = ": 0";
            } else {
                lives.innerHTML = ": " + (this.maxScent - this.missedRings);
            }
            var height = Math.floor(this.player.position.z);
            altitude.innerHTML = height + " ft";
            score.innerHTML = this.score + " (" + this.multiplier + "x)";

            if (!this.player.parachuteOpen && this.player.position.z <= constants.PARACHUTE_HEIGHT) {
                warning.style.display = this.warningDisplay;
                this.warningCounter++;
                if (this.warningCounter > constants.ANIMATION_COUNT * 4) {
                    this.warningCounter = 0;
                    if (this.warningDisplay === "inline") {
                        this.warningDisplay = "none";
                    } else {
                        this.warningDisplay = "inline";
                    }
                }
            } else {
                warning.style.display = "none";
            }
        };

        skyDiverLevel.prototype.createHUD = function () {
            var hud = document.createElement('div');
            var scoreLabel = document.createElement('div');
            var score = document.createElement('div');
            var livesLabel = document.createElement('div');
            var lives = document.createElement('div');
            var altitudeLabel = document.createElement('div');
            var altitude = document.createElement('div');

            var warning = document.createElement('div');

            hud.style.position = 'absolute';
            hud.id = "hud";
            hud.style.width = "900px";
            hud.style.height = "200px";
            hud.style.color = "#F2F5A9";
            hud.style.fontSize = "35px";
            hud.style.top = "10px";
            hud.style.left = "10px";

            livesLabel.style.width = "150px";
            livesLabel.style.height = "150px";
            livesLabel.style.position = 'absolute';
            livesLabel.style.top = "14px";
            livesLabel.style.left = "14px";
            livesLabel.innerHTML = "<img src='assets/images/threejs/ring.png' width='40' height='40' />";

            lives.id = "lives";
            lives.style.width = "100";
            lives.style.height = "150";
            lives.style.position = 'absolute';
            lives.style.top = "15px";
            lives.style.left = "60px";
            lives.innerHTML = " : " + (this.maxScent - this.missedRings);

            altitudeLabel.style.width = "150px";
            altitudeLabel.style.height = "150px";
            altitudeLabel.style.position = 'absolute';
            altitudeLabel.style.top = "15px";
            altitudeLabel.style.left = "125px";
            altitudeLabel.innerHTML = "Altitude: ";

            altitude.id = "altitude";
            altitude.style.width = "300px";
            altitude.style.height = "150px";
            altitude.style.position = 'absolute';
            altitude.style.top = "15px";
            altitude.style.left = "260px";
            score.style.whiteSpace = "nowrap";
            altitude.innerHTML = Math.floor(this.player.position.z) + " ft";

            scoreLabel.style.width = "150";
            scoreLabel.style.height = "150";
            scoreLabel.style.position = 'absolute';
            scoreLabel.style.top = "15px";
            scoreLabel.style.left = "380px";
            scoreLabel.innerHTML = "Score: ";

            score.id = "score";
            score.style.width = "550px";
            score.style.height = "150px";
            score.style.position = 'absolute';
            score.style.top = "15px";
            score.style.left = "490px";
            score.style.whiteSpace = "nowrap";
            score.innerHTML = this.score + " (" + this.multiplier + "x)";

            warning.id = "warning";
            warning.style.display = "none";
            warning.style.color = "#FE2E2E";
            warning.style.width = "100px";
            warning.style.height = "150px";
            warning.style.position = 'absolute';
            warning.style.top = "280px";
            warning.style.left = "50px";
            warning.innerHTML = "Warning: Alitude LOW Open Your Parachute!";

            hud.appendChild(livesLabel);
            hud.appendChild(lives);
            hud.appendChild(altitudeLabel);
            hud.appendChild(altitude);
            hud.appendChild(scoreLabel);
            hud.appendChild(score);
            hud.appendChild(warning);

            document.body.appendChild(hud);
        };

        skyDiverLevel.prototype.destroyHUD = function () {
            document.body.removeChild(document.getElementById("hud"));
        };
        return skyDiverLevel;
    })(THREE.Mesh);
    objects.skyDiverLevel = skyDiverLevel;
})(objects || (objects = {}));
//# sourceMappingURL=skydiverlevel.js.map
