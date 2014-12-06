var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var ring = (function (_super) {
        __extends(ring, _super);
        function ring(currentScene, sprite, newAltitude, newRadius, newX, newY) {
            this.radius = newRadius;
            this.collisionRadius = this.radius + 1;
            var ringSprite = THREE.ImageUtils.loadTexture(sprite);
            ringSprite.wrapT = THREE.ClampToEdgeWrapping;
            var ringMaterial = new THREE.MeshBasicMaterial({ map: ringSprite, transparent: true });
            var ringGeometry = new THREE.BoxGeometry(this.radius * 2, this.radius * 2, 0);

            _super.call(this, ringGeometry, ringMaterial);
            currentScene.add(this);

            this.position.x = newX;
            this.position.y = newY;
            this.position.z = newAltitude;
            this.cleared = false;
            this.removed = false;
        }
        return ring;
    })(THREE.Mesh);
    objects.ring = ring;
})(objects || (objects = {}));
//# sourceMappingURL=ring.js.map
