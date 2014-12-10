/// <reference path="../../managers/input.ts" />
/// <reference path="../../managers/asset.ts" />
var objects;
(function (objects) {
    // sidescrolling Level Class
    var sideScrollingLevel = (function () {
        function sideScrollingLevel(game, player, currentEnemyModifier) {
            this.background = [];
            this.objectIndex = [];
            for (var i = 0; i < 2; i++) {
                this.background[i] = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
                this.backgroundWidth = this.background[i].getBounds().width;
                this.background[i].x = i * this.backgroundWidth;

                this.objectIndex[i] = game.children.length;
                game.addChildAt(this.background[i], this.objectIndex[i]);
            }

            this.maxScreens = 2;
            this.width = this.backgroundWidth * this.maxScreens;
            this.height = this.background[0].getBounds().height;

            this.speed = constants.GAME_SPEED;
            this.enemyLifeModifier = currentEnemyModifier;
            this.enemy = null;
            this.cameraLocked = false;

            this.exit = new objects.exit(game);
            this.key = new objects.key(game);
        }
        sideScrollingLevel.prototype.update = function (player, screenWidth) {
            score += player.update(this.exit, this.key);
            if (this.enemy === null) {
                this.enemy = new objects.triceratops(game, this.enemyLifeModifier, player);
            }
            this.camera(player, screenWidth);
            this.exit.update(player, this.cameraLocked);
            if (this.key != null) {
                this.key.update(player, this.cameraLocked);
            }

            //memory leak in enemy update
            score += this.enemy.update(player, this.cameraLocked);

            if (this.enemy.alive() && managers.Collision.playerEnemy(player, this.enemy)) {
                player.hit();
            }
            this.updateHUD(player);
        };

        sideScrollingLevel.prototype.resetImageRight = function (index) {
            console.log(index);
            this.background[index].x = this.backgroundWidth;
        };

        sideScrollingLevel.prototype.resetImageLeft = function (index) {
            this.background[index].x = -this.backgroundWidth;
        };

        sideScrollingLevel.prototype.camera = function (player, screenWidth) {
            this.cameraLocked = false;
            if (player.lastMovement > 0) {
                //locks player to the centre of the screen
                if (player.actualX < this.width - screenWidth * 0.5) {
                    if (player.x > screenWidth * 0.5) {
                        for (var i = 0; i < this.background.length; i++) {
                            this.background[i].x -= player.lastMovement;
                        }
                        player.x = screenWidth * 0.5;
                        this.cameraLocked = true;
                    }
                } else if (player.actualX + player.regX > this.width) {
                    player.x = screenWidth - player.regX;
                    player.actualX = this.width - player.regX;
                }
                for (var i = 0; i < this.background.length; i++) {
                    if (this.background[i].x + this.backgroundWidth < 0) {
                        this.resetImageRight(i);
                    }
                }
            } else if (player.lastMovement < 0) {
                //locks player to the centre of the screen
                if (player.actualX > screenWidth * 0.5) {
                    if (player.x < screenWidth * 0.5) {
                        for (var i = 0; i < this.background.length; i++) {
                            this.background[i].x -= player.lastMovement;
                        }
                        player.x = screenWidth * 0.5;
                        this.cameraLocked = true;
                    }
                } else if (player.actualX - player.regX < 0) {
                    player.x = 0 + player.regX;
                    player.actualX = 0 + player.regX;
                }
                for (var i = 0; i < this.background.length; i++) {
                    if (this.background[i].x > this.backgroundWidth) {
                        this.resetImageLeft(i);
                    }
                }
            }
        };

        sideScrollingLevel.prototype.destroy = function () {
            this.destroyHUD();
            this.enemy.destroy();
            this.key.destroy();
            this.exit.destroy();
            for (var i = 0; i < this.objectIndex.length; i++) {
                game.removeChildAt(this.objectIndex[i]);
            }
        };

        sideScrollingLevel.prototype.updateHUD = function (player) {
            var scoreDisplay = document.getElementById("scoreDisplay");
            var lives = document.getElementById("lives");
            var keys = document.getElementById("keys");
            var energy = document.getElementById("energy");

            lives.innerHTML = ": " + player.life;

            energy.innerHTML = Math.floor(player.energy) + "%";
            keys.innerHTML = player.keyCount.toString();
            scoreDisplay.innerHTML = score.toString(); // + " (" + this.multiplier + "x)";
        };

        sideScrollingLevel.prototype.createHUD = function (player) {
            var hud = document.createElement('div');
            var scoreLabel = document.createElement('div');
            var scoreDisplay = document.createElement('div');
            var livesLabel = document.createElement('div');
            var lives = document.createElement('div');
            var energyLabel = document.createElement('div');
            var energy = document.createElement('div');
            var keysLabel = document.createElement('div');
            var keys = document.createElement('div');

            hud.style.position = 'absolute';
            hud.id = "hud";
            hud.style.width = "900px";
            hud.style.height = "200px";
            hud.style.color = constants.COLOR_CREAM;
            hud.style.fontSize = "35px";
            hud.style.top = "10px";
            hud.style.left = "10px";

            livesLabel.style.width = "150px";
            livesLabel.style.height = "150px";
            livesLabel.style.position = 'absolute';
            livesLabel.style.top = "9px";
            livesLabel.style.left = "14px";
            livesLabel.innerHTML = "<img src='assets/images/level2/playerLogo.png' width='50' height='50' />";

            lives.id = "lives";
            lives.style.width = "100";
            lives.style.height = "150";
            lives.style.position = 'absolute';
            lives.style.top = "15px";
            lives.style.left = "60px";
            lives.innerHTML = " : " + player.life;

            energyLabel.style.width = "150px";
            energyLabel.style.height = "150px";
            energyLabel.style.position = 'absolute';
            energyLabel.style.top = "15px";
            energyLabel.style.left = "125px";
            energyLabel.innerHTML = "Energy: ";

            energy.id = "energy";
            energy.style.width = "300px";
            energy.style.height = "150px";
            energy.style.position = 'absolute';
            energy.style.top = "15px";
            energy.style.left = "250px";
            energy.style.whiteSpace = "nowrap";
            energy.innerHTML = player.x + "%";

            keysLabel.style.width = "150";
            keysLabel.style.height = "150";
            keysLabel.style.position = 'absolute';
            keysLabel.style.top = "15px";
            keysLabel.style.left = "365px";
            keysLabel.innerHTML = "Keys: ";

            keys.id = "keys";
            keys.style.width = "550px";
            keys.style.height = "150px";
            keys.style.position = 'absolute';
            keys.style.top = "15px";
            keys.style.left = "460px";
            keys.style.whiteSpace = "nowrap";
            keys.innerHTML = player.keyCount.toString();

            scoreLabel.style.width = "150";
            scoreLabel.style.height = "150";
            scoreLabel.style.position = 'absolute';
            scoreLabel.style.top = "15px";
            scoreLabel.style.left = "510px";
            scoreLabel.innerHTML = "Score: ";

            scoreDisplay.id = "scoreDisplay";
            scoreDisplay.style.width = "630px";
            scoreDisplay.style.height = "150px";
            scoreDisplay.style.position = 'absolute';
            scoreDisplay.style.top = "15px";
            scoreDisplay.style.left = "620px";
            scoreDisplay.style.whiteSpace = "nowrap";
            scoreDisplay.innerHTML = score.toString(); // + " (" + this.multiplier + "x)";

            hud.appendChild(livesLabel);
            hud.appendChild(lives);
            hud.appendChild(energyLabel);
            hud.appendChild(energy);
            hud.appendChild(keysLabel);
            hud.appendChild(keys);
            hud.appendChild(scoreLabel);
            hud.appendChild(scoreDisplay);

            document.body.appendChild(hud);
        };

        sideScrollingLevel.prototype.destroyHUD = function () {
            document.body.removeChild(document.getElementById("hud"));
        };
        return sideScrollingLevel;
    })();
    objects.sideScrollingLevel = sideScrollingLevel;
})(objects || (objects = {}));
//# sourceMappingURL=sidescrollinglevel.js.map
