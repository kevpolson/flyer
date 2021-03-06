﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //the dino attack from the sky diving level
    var attack = (function (_super) {
        __extends(attack, _super);
        function attack() {
            this.width = 8;
            this.height = 4;
            var attackSprite = THREE.ImageUtils.loadTexture("assets/images/threejs/attackDino.png");
            var attackMaterial = new THREE.MeshBasicMaterial({ map: attackSprite, transparent: true });
            var attackGeometry = new THREE.BoxGeometry(this.width, this.height, 0);

            _super.call(this, attackGeometry, attackMaterial);

            this.speed = constants.GAME_SPEED / 20;
            this.caughtPrey = false;
            this.attack = false;
        }
        //update the dino
        attack.prototype.update = function (player) {
            if (this.attack) {
                this.position.z = player.position.z + 0.01;
                if (!this.caughtPrey) {
                    if (!player.parachuteOpen) {
                        this.position.y = player.position.y + 2;
                    } else {
                        this.position.y = player.position.y;
                    }
                }

                if (this.position.x >= player.position.x) {
                    this.position.x -= this.speed;
                } else if (!this.caughtPrey) {
                    this.position.x = player.position.x;
                    this.caughtPrey = true;
                }
            }
        };

        //add the dino to the scene
        attack.prototype.show = function (currentScene, player) {
            this.position.z = player.position.z;
            this.position.y = player.position.y;

            this.position.x = player.position.x + 45;
            currentScene.add(this);
        };

        //start the attack
        attack.prototype.startAttack = function (currentScene, player) {
            this.attack = true;
            this.show(currentScene, player);
        };
        return attack;
    })(THREE.Mesh);
    objects.attack = attack;
})(objects || (objects = {}));
//# sourceMappingURL=attack.js.map
