module objects {
    export class attack extends THREE.Mesh {
        width: number;
        height: number;
        speed: number;
        caughtPrey: boolean;
        attack: boolean;
        constructor() {
            this.width = 8;
            this.height = 4;
            var attackSprite = THREE.ImageUtils.loadTexture("assets/images/threejs/attackDino.png");
            //ringSprite.wrapT = THREE.ClampToEdgeWrapping;
            var attackMaterial = new THREE.MeshBasicMaterial({ map: attackSprite, transparent: true });
            var attackGeometry = new THREE.BoxGeometry(this.width, this.height, 0);

            super(attackGeometry, attackMaterial);

            this.speed = constants.GAME_SPEED/20;
            this.caughtPrey = false;
            this.attack = false;
        }

        update(player: objects.skyDiverPlayer) {
            if (this.attack) {
                this.position.z = player.position.z + 0.01;
                if (!player.parachuteOpen && !this.caughtPrey) {
                    this.position.y = player.position.y + 2;
                }
                else if (!this.caughtPrey) {
                    this.position.y = player.position.y;
                }

                if (this.position.x >= player.position.x) {
                    this.position.x -= this.speed;
                }
                else if (!this.caughtPrey) {
                    this.position.x = player.position.x;
                    this.caughtPrey = true;
                }
            }
        }

        show(currentScene, player: objects.skyDiverPlayer) {
            this.position.z = player.position.z;
            this.position.y = player.position.y;

            this.position.x = player.position.x + 25;
            //console.log(this.position.x + ' ' + pl
            currentScene.add(this);
        }

        startAttack(currentScene, player: objects.skyDiverPlayer) {
            this.attack = true;
            this.show(currentScene, player);
        }
    }
} 