module objects {
    export class skyDiverPlayer extends THREE.Mesh {
        camera: THREE.PerspectiveCamera;
        width: number;
        height: number;
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
        }

        update() {
            if (this.position.z > constants.GROUND) {
                this.position.z -= constants.FEET_PER_UPDATE;
                this.camera.position.z -= constants.FEET_PER_UPDATE;

                var motion = 0.2;
                var moveX = 0;
                var moveY = 0;
                if (input.isKeyDown(constants.UP)) {
                    this.position.y += motion;
                    this.camera.position.y += motion;
                }
                else if (input.isKeyDown(constants.DOWN)) {
                    this.position.y -= motion;
                    this.camera.position.y -= motion;
                }

                if (input.isKeyDown(constants.RIGHT)) {
                    this.position.x += motion;
                    this.camera.position.x += motion;
                }
                else if (input.isKeyDown(constants.LEFT)) {
                    this.position.x -= motion;
                    this.camera.position.x -= motion;
                }
            }
        }

        destroy() {
            scene.remove(this);
        }
    }
} 