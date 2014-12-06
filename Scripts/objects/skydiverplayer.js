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
            var playerSprite = THREE.ImageUtils.loadTexture("assets/images/player.png");
            playerSprite.wrapT = THREE.ClampToEdgeWrapping;
            var playerMaterial = new THREE.MeshBasicMaterial({ map: playerSprite, transparent: true });
            var playerGeometry = new THREE.BoxGeometry(2, 2, 0);

            //var player = new THREE.Mesh(playerGeometry, playerMaterial);
            _super.call(this, playerGeometry, playerMaterial);
            currentScene.add(this);

            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.camera.position.z = 1000;
            this.position.z = this.camera.position.z - 5;
        }
        skyDiverPlayer.prototype.update = function () {
            if (this.position.z > 1) {
                this.position.z -= 1;
                this.camera.position.z -= 1;
            }
        };
        return skyDiverPlayer;
    })(THREE.Mesh);
    objects.skyDiverPlayer = skyDiverPlayer;
})(objects || (objects = {}));
//# sourceMappingURL=skydiverplayer.js.map
