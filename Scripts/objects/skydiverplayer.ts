module objects {
    export class skyDiverPlayer extends THREE.Mesh {
        camera: THREE.PerspectiveCamera;
        width: number;
        height: number;
        parachuteOpen: boolean;
        ascending: boolean;
        ascendLevel: number;
        motion: THREE.Vector3;
        
        constructor(currentScene: THREE.Scene) { 
            this.width = 2;
            this.height = 2;
            var playerSprite = THREE.ImageUtils.loadTexture("assets/images/threejs/player.png");
            
            playerSprite.wrapT = THREE.ClampToEdgeWrapping;
            var playerMaterial = new THREE.MeshBasicMaterial({ map: playerSprite, transparent: true });
            var playerGeometry = new THREE.BoxGeometry(this.width, this.height, 0);
            
            super(playerGeometry, playerMaterial);
            currentScene.add(this);

            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.position.z = constants.PLANE_HEIGHT;
            this.camera.position.z = this.position.z + 6;

            this.parachuteOpen = false;
            this.ascending = false;
            this.motion = new THREE.Vector3(0.2, 0.2, constants.DESCEND_PER_UPDATE);
        }

        update() {
            if (this.position.z > constants.GROUND) {
                this.position.z -= this.motion.z;
                this.camera.position.z -= this.motion.z;

                //start descend again
                if (this.parachuteOpen && this.position.z >= this.ascendLevel) {
                    this.motion = new THREE.Vector3(0.1, 0.1, constants.DESCEND_PER_UPDATE * 0.5);
                    this.ascending = false;
                }
                else if (this.ascending) {
                    console.log('ascending');
                    this.position.y -= 0.5;
                    this.camera.position.y -= 0.5;
                }

                //reset rotation
                this.rotation.x = 0;
                this.rotation.y = 0;
                if (!this.parachuteOpen && input.isKeyDown(constants.ENTER)) {
                    this.rotation.x = -0.65;
                    this.position.z -= this.motion.z * 3;
                    this.camera.position.z -= this.motion.z * 3;
                }
                else if (!this.parachuteOpen && this.position.z <= constants.PARACHUTE_HEIGHT && input.isKeyDown(constants.SPACE)) {
                    console.log('parachute open');
                    this.parachuteOpen = true;
                    this.ascending = true;
                    this.ascendLevel = this.position.z + constants.MAX_ASCEND;
                    this.motion = new THREE.Vector3(0.1, 0.1, -constants.ASCEND_PER_UPDATE);
                }
                else {
                    if (input.isKeyDown(constants.UP)) {
                        this.rotation.x = -0.5;
                        this.position.y += this.motion.y;
                        this.camera.position.y += this.motion.y;
                    }
                    else if (input.isKeyDown(constants.DOWN)) {
                        this.rotation.x = 0.5;
                        this.position.y -= this.motion.y;
                        this.camera.position.y -= this.motion.y;
                    }

                    if (input.isKeyDown(constants.RIGHT)) {
                        this.rotation.y = 0.5;
                        this.position.x += this.motion.x;
                        this.camera.position.x += this.motion.x;
                    }
                    else if (input.isKeyDown(constants.LEFT)) {
                        this.rotation.y = -0.5;
                        this.position.x -= this.motion.x;
                        this.camera.position.x -= this.motion.x;
                    }
                }
            }
        }

        destroy() {
            scene.remove(this);
        }
    }
} 