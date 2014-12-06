module objects {
    export class skyDiverPlayer extends THREE.Mesh {
        camera: THREE.PerspectiveCamera;
        constructor(currentScene: THREE.Scene) { //game: createjs.Container, screenWidth: number, screenHeight: number) {
            var playerSprite = THREE.ImageUtils.loadTexture("assets/images/player.png");
            playerSprite.wrapT = THREE.ClampToEdgeWrapping;
            var playerMaterial = new THREE.MeshBasicMaterial({ map: playerSprite, transparent: true });
            var playerGeometry = new THREE.BoxGeometry(2, 2, 0);
            //var player = new THREE.Mesh(playerGeometry, playerMaterial);

            super(playerGeometry, playerMaterial);
            currentScene.add(this);

            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.camera.position.z = 1000;
            this.position.z = this.camera.position.z - 5;
        }

        update() {
            if (this.position.z > 1) {
                this.position.z -= 1;
                this.camera.position.z -= 1;
            }
        }
    }
} 