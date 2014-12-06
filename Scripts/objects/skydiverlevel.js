/// <reference path="../managers/input.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="skydiverplayer.ts" />
/// <reference path="smokering.ts" />
var objects;
(function (objects) {
    var skyDiverLevel = (function () {
        //ground: createjs.Bitmap;
        /*
        objectIndex: number[] = [];
        width: number;
        height: number;
        speed: number;
        altitude: number;
        currentAltitude: number;
        smokeRings: objects.smokeRing;
        */
        function skyDiverLevel(currentScene) {
            //var keyboard = new THREE.KeyboardState();
            //var clock = new THREE.Clock();
            var groundSprite = THREE.ImageUtils.loadTexture("assets/images/ground.png");
            groundSprite.wrapT = THREE.ClampToEdgeWrapping;
            var groundMaterial = new THREE.MeshBasicMaterial({ map: groundSprite, transparent: true });
            var groundGeometry = new THREE.BoxGeometry(1280, 960, 0);
            var ground = new THREE.Mesh(groundGeometry, groundMaterial);
            currentScene.add(ground);
            //this.ground = new createjs.Bitmap(managers.Assets.loader.getResult("ground"));
            //this.objectIndex[0] = game.children.length;
            //game.addChildAt(this, this.objectIndex[0]);
            /*
            this.x = screenWidth * 0.5;
            this.y = screenHeight * 0.5;
            
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            
            this.speed = constants.GAME_SPEED;
            
            this.altitude = constants.PLANE_HEIGHT;
            this.currentAltitude = 1;
            
            var initialScale = 0.1;
            
            this.width = this.getTransformedBounds().width;
            this.height = this.getTransformedBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.scaleX = initialScale; //this.currentAltitude;
            this.scaleY = initialScale; //this.currentAltitude;
            
            this.objectIndex[1] = game.children.length;
            this.smokeRings = new objects.smokeRing(this.objectIndex[1], 1.2, 2.5);
            */
        }
        return skyDiverLevel;
    })();
    objects.skyDiverLevel = skyDiverLevel;
})(objects || (objects = {}));
//# sourceMappingURL=skydiverlevel.js.map
