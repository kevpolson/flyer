module objects {
    export class ring extends THREE.Mesh {
        altitude: number;
        radius: number;
        collisionRadius: number;
        cleared: boolean;
        removed: boolean;
        constructor(currentScene, sprite: string, newAltitude: number, newRadius: number, newX: number, newY: number) {
            this.radius = newRadius;
            this.collisionRadius = this.radius + 1;
            var ringSprite = THREE.ImageUtils.loadTexture(sprite);
            ringSprite.wrapT = THREE.ClampToEdgeWrapping;
            var ringMaterial = new THREE.MeshBasicMaterial({ map: ringSprite, transparent: true });//
            var ringGeometry = new THREE.BoxGeometry(this.radius * 2, this.radius * 2, 0);

            super(ringGeometry, ringMaterial);
            currentScene.add(this);

            this.position.x = newX;
            this.position.y = newY;
            this.position.z = newAltitude;
            this.cleared = false;
            this.removed = false;
       }
    }
}