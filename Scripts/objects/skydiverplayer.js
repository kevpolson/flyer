var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var skyDiverPlayer = (function (_super) {
        __extends(skyDiverPlayer, _super);
        function skyDiverPlayer(currentScene) {
            this.width = 2;
            this.height = 2;

            //playerSprite.wrapT = THREE.ClampToEdgeWrapping;
            this.sprites = new Array();
            this.sprites[0] = THREE.ImageUtils.loadTexture("assets/images/threejs/player.png");
            this.sprites[1] = THREE.ImageUtils.loadTexture("assets/images/threejs/parachute.png");
            this.sprites[2] = THREE.ImageUtils.loadTexture("assets/images/threejs/landing1.png");
            this.sprites[3] = THREE.ImageUtils.loadTexture("assets/images/threejs/landing2.png");
            this.sprites[4] = THREE.ImageUtils.loadTexture("assets/images/threejs/landing3.png");
            this.sprites[5] = THREE.ImageUtils.loadTexture("assets/images/threejs/landing4.png");
            this.sprites[6] = THREE.ImageUtils.loadTexture("assets/images/threejs/landing5.png");
            this.sprites[7] = THREE.ImageUtils.loadTexture("assets/images/threejs/landing6.png");

            this.currentSprite = 0;
            var playerMaterial = new THREE.MeshBasicMaterial({ map: this.sprites[this.currentSprite++], transparent: true });
            var playerGeometry = new THREE.BoxGeometry(this.width, this.height, 0);

            _super.call(this, playerGeometry, playerMaterial);
            currentScene.add(this);

            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.position.z = constants.PLANE_HEIGHT;
            this.camera.position.z = this.position.z + 6;

            this.landingCounter = 0;
            this.parachuteOpen = false;
            this.ascending = false;
            this.motion = new THREE.Vector3(0.2, 0.2, constants.DESCEND_PER_UPDATE);
        }
        skyDiverPlayer.prototype.update = function () {
            if (this.position.z > constants.GROUND) {
                this.position.z -= this.motion.z;
                this.camera.position.z -= this.motion.z;

                //reset rotation
                this.rotation.x = 0;
                this.rotation.y = 0;

                //start descend again
                if (this.parachuteOpen && this.position.z >= this.ascendLevel) {
                    this.motion = new THREE.Vector3(0.1, 0.1, constants.DESCEND_PER_UPDATE * 0.5);
                    this.ascending = false;
                } else if (this.ascending) {
                    this.rotation.x = 0.25;
                    this.position.y -= 0.5;
                    this.camera.position.y -= 0.5;
                }

                if (!this.parachuteOpen && input.isKeyDown(constants.ENTER)) {
                    this.rotation.x = -0.45;
                    this.position.z -= this.motion.z * 3;
                    this.camera.position.z -= this.motion.z * 3;
                } else if (!this.parachuteOpen && this.position.z <= constants.PARACHUTE_HEIGHT && input.isKeyDown(constants.SPACE)) {
                    this.parachuteOpen = true;
                    this.ascending = true;

                    this.changeSprite(this.currentSprite++);
                    this.geometry = new THREE.BoxGeometry(this.width * 3, this.height * 3, 0);

                    this.ascendLevel = this.position.z + constants.MAX_ASCEND;
                    this.motion = new THREE.Vector3(0.1, 0.1, -constants.ASCEND_PER_UPDATE);
                } else {
                    if (input.isKeyDown(constants.UP)) {
                        this.rotation.x = -0.25;
                        this.position.y += this.motion.y;
                        this.camera.position.y += this.motion.y;
                    } else if (input.isKeyDown(constants.DOWN)) {
                        this.rotation.x = 0.25;
                        this.position.y -= this.motion.y;
                        this.camera.position.y -= this.motion.y;
                    }

                    if (input.isKeyDown(constants.RIGHT)) {
                        this.rotation.y = 0.5;
                        this.position.x += this.motion.x;
                        this.camera.position.x += this.motion.x;
                    } else if (input.isKeyDown(constants.LEFT)) {
                        this.rotation.y = -0.5;
                        this.position.x -= this.motion.x;
                        this.camera.position.x -= this.motion.x;
                    }
                }
            }
        };

        skyDiverPlayer.prototype.changeSprite = function (index) {
            this.material = new THREE.MeshBasicMaterial({ map: this.sprites[index], transparent: true });
        };

        skyDiverPlayer.prototype.animateLanding = function () {
            this.landingCounter++;
            console.log(this.landingCounter + ' ' + constants.ANIMATION_COUNT + ' ' + this.currentSprite);
            if (this.currentSprite <= constants.MAX_SPIRTES && this.landingCounter > constants.ANIMATION_COUNT) {
                this.changeSprite(this.currentSprite++);
                this.landingCounter = 0;
            }
        };

        skyDiverPlayer.prototype.destroy = function () {
            scene.remove(this);
        };
        return skyDiverPlayer;
    })(THREE.Mesh);
    objects.skyDiverPlayer = skyDiverPlayer;
})(objects || (objects = {}));
//# sourceMappingURL=skydiverplayer.js.map
