/// <reference path="../managers/input.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="skydiverplayer.ts" />
/// <reference path="ring.ts" />
module objects {
    export class skyDiverLevel extends THREE.Mesh {
        rings: objects.ring[];
        missedRings: number;
        multiplier: number;
        score: number;
        gameover: boolean;
        levelCompleted: boolean;
        attackDino: objects.attack;
        maxScent: number;
        constructor(currentScene: THREE.Scene, player: objects.skyDiverPlayer, ringMisses: number) {
            var groundSprite = THREE.ImageUtils.loadTexture("assets/images/threejs/ground.png");
            groundSprite.wrapT = THREE.ClampToEdgeWrapping;
            var groundMaterial = new THREE.MeshBasicMaterial({ map: groundSprite });
            var groundGeometry = new THREE.BoxGeometry(1280, 960, 0);

            super(groundGeometry, groundMaterial);
            currentScene.add(this);

            var radius = 10;
            this.rings = new Array<objects.ring>();
            this.rings[0] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 950, radius, 50, 0);
            this.rings[1] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 900, radius, 100, -55);
            this.rings[2] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 850, radius, 150, -75);
            this.rings[3] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 800, radius, 160, -25);
            this.rings[4] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 750, radius, 215, 0);
            this.rings[5] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 700, radius, 305, 50);
            this.rings[6] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 650, radius, 400, 80);
            this.rings[7] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 600, radius, 465, 110);
            this.rings[8] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 550, radius, 375, 130);
            this.rings[9] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 500, radius, 295, 155);
            this.rings[10] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 450, radius, 205, 125);
            this.rings[11] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 400, radius, 155, 65);
            this.rings[12] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 350, radius, 75, 30);
            this.rings[13] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 300, radius, 0, 0);
            this.rings[14] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 250, radius, -50, 50);
            this.rings[15] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 200, radius, -85, 95);
            this.rings[16] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 150, radius, -125, 145);
            this.rings[17] = new objects.ring(currentScene, "assets/images/threejs/ring.png", 100, radius, -175, 175);

            this.rings[18] = new objects.ring(currentScene, "assets/images/threejs/landingpad.png", 1, 20, -225, 130);
            this.rings[19] = new objects.ring(currentScene, "assets/images/threejs/landingpadbonus.png", 1, 5, -225, 130);

            this.attackDino = new objects.attack();

            this.missedRings = 0;
            this.maxScent = ringMisses;
            this.multiplier = 0;
            this.score = 0;
            this.gameover = false;
            this.levelCompleted = false;

            this.createHUD(player);

        }

        update(currentScene, player: objects.skyDiverPlayer) {
            this.attackDino.update(player);
            player.update(this.attackDino);

            var buffer = 2.5;
            for (var i = 0; i < this.rings.length; i++) {
                if (!this.rings[i].cleared &&
                    player.position.z <= (this.rings[i].position.z + 0.01 ) &&
                    player.position.z >= (this.rings[i].position.z - buffer)) {
                    if (managers.Collision.inCircle(player.position.x, player.position.y, this.rings[i].position.x, this.rings[i].position.y, this.rings[i].collisionRadius)) {
                        this.rings[i].cleared = true;
                        this.multiplier++;
                        this.score += this.multiplier * constants.POINTS;
                        this.missedRings--;
                        if (this.missedRings <= 0) {
                            this.missedRings = 0;
                        }
                    }
                }

                if (!this.rings[i].removed &&
                    this.rings[i].position.z > player.camera.position.z) {
                    this.rings[i].removed = true;
                    scene.remove(this.rings[i]);
                    if (!this.rings[i].cleared) {
                        this.missedRings++;
                        this.multiplier = 0;
                    }
                }
            }

            if (player.position.z <= constants.GROUND) {
                player.rotation.y = 0;
                if (player.parachuteOpen) {
                    if (!this.levelCompleted && this.rings[constants.LEVEL_END_RING].cleared) {
                        player.rotation.x = 0;
                        player.position.z = constants.GROUND;

                        console.log("level finished");
                        console.log("score: " + this.score + " multiplier: " + this.multiplier + " missed Rings: " + this.missedRings);
                        this.levelCompleted = true;
                    }
                    player.animateLanding();
                }
                else if (!this.levelCompleted) {
                    console.log("level failed");
                    if (!player.parachuteOpen) {
                        player.rotation.x = -0.65;
                        player.position.z = 0;
                    }
                    else {
                        player.position.z = constants.GROUND;
                        player.rotation.x = 0;
                    }
                }
            }

            if (this.missedRings > 3 && !this.gameover) {
                console.log("you died");
                this.queueAttack(currentScene, player);
                this.gameover = true;
            }

            this.updateHUD(player);
        }

        queueAttack(currentScene, player: objects.skyDiverPlayer) {
            this.attackDino.startAttack(currentScene, player);
        }

        destroy() {
            scene.remove(this);
        }

        updateHUD(player: objects.skyDiverPlayer) {
            var score = document.getElementById("score");
            var lives = document.getElementById("lives");
            var altitude = document.getElementById("altitude");

            if (this.maxScent - this.missedRings  < 0) {
                lives.innerHTML = "0";
            }
            else {
                lives.innerHTML = (this.maxScent - this.missedRings).toString();
            }
            var height = Math.floor(player.position.z);
            altitude.innerHTML = height + " ft";
            score.innerHTML = this.score + " (" + this.multiplier + "x)";

        }

        createHUD(player: objects.skyDiverPlayer) {
            var hud = document.createElement('div');
            var scoreLabel = document.createElement('div');
            var score = document.createElement('div');
            var livesLabel = document.createElement('div');
            var lives = document.createElement('div');
            var altitudeLabel = document.createElement('div');
            var altitude = document.createElement('div');

            hud.style.position = 'absolute';
            hud.id = "hud";
            hud.style.width = "900px";
            hud.style.height = "200px";
            hud.style.color = "#F6CEE3";
            hud.style.fontSize = "35px";
            hud.style.top = "10px";
            hud.style.left = "10px";

            livesLabel.style.width = "115px";
            livesLabel.style.height = "150px";
            livesLabel.style.position = 'absolute';
            livesLabel.style.top = "15px";
            livesLabel.style.left = "15px";
            livesLabel.innerHTML = "Scent: ";

            lives.id = "lives";
            lives.style.width = "100";
            lives.style.height = "150";
            lives.style.position = 'absolute';
            lives.style.top = "15px";
            lives.style.left = "120px";
            lives.innerHTML = (this.maxScent - this.missedRings).toString();

            altitudeLabel.style.width = "150px";
            altitudeLabel.style.height = "150px";
            altitudeLabel.style.position = 'absolute';
            altitudeLabel.style.top = "15px";
            altitudeLabel.style.left = "175px";
            altitudeLabel.innerHTML = "Altitude: ";

            altitude.id = "altitude";
            altitude.style.width = "300px";
            altitude.style.height = "150px";
            altitude.style.position = 'absolute';
            altitude.style.top = "15px";
            altitude.style.left = "310px";
            score.style.whiteSpace = "nowrap";
            altitude.innerHTML = Math.floor(player.position.z) + " ft";

            scoreLabel.style.width = "150";
            scoreLabel.style.height = "150";
            scoreLabel.style.position = 'absolute';
            scoreLabel.style.top = "15px";
            scoreLabel.style.left = "430px";
            scoreLabel.innerHTML = "Score: ";

            score.id = "score";
            score.style.width = "550px";
            score.style.height = "150px";
            score.style.position = 'absolute';
            score.style.top = "15px";
            score.style.left = "540px";
            score.style.whiteSpace = "nowrap";
            score.innerHTML = this.score + " (" + this.multiplier + "x)";

            hud.appendChild(livesLabel);
            hud.appendChild(lives);
            hud.appendChild(altitudeLabel);
            hud.appendChild(altitude);
            hud.appendChild(scoreLabel);
            hud.appendChild(score);
           
            document.body.appendChild(hud);
        }
    }
}
 