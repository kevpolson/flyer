/// <reference path="../managers/input.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="skydiverplayer.ts" />
/// <reference path="smokering.ts" />
module objects {
    export class skyDiverLevel {
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
        constructor(currentScene: THREE.Scene) {//game: createjs.Container, screenWidth: number, screenHeight: number) {
            //var keyboard = new THREE.KeyboardState();
            //var clock = new THREE.Clock();

            var groundSprite = THREE.ImageUtils.loadTexture("assets/images/ground.png");
            groundSprite.wrapT = THREE.ClampToEdgeWrapping;
            var groundMaterial = new THREE.MeshBasicMaterial({ map: groundSprite, transparent: true });
            var groundGeometry = new THREE.BoxGeometry(1280, 960, 0);//1024, 768, 0);
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

        /*
        update(player: objects.skyDiverPlayer) {
            if (this.currentAltitude < 3) {
                this.currentAltitude += constants.FEET_PER_UPDATE_HIGH;
            }
            else if (this.currentAltitude < 10) {
                this.currentAltitude += constants.FEET_PER_UPDATE_MID;
            }
            else if (this.currentAltitude < this.altitude) {
                this.currentAltitude += constants.FEET_PER_UPDATE_LOW;
            }

            console.log(this.currentAltitude + ' ' + this.altitude);
            if (this.currentAltitude < this.altitude) {
                this.scaleX = this.currentAltitude; //this.currentAltitude;
                this.scaleY = this.currentAltitude; //this.currentAltitude;
            }

            player.gotoAndPlay('falling');
            var motion = 0.1;
            var moveX = 0;
            var moveY = 0;
            if (input.isKeyDown(constants.UP)) {
                player.gotoAndPlay('forward');
                this.y += motion;
                this.regY -= motion;
                moveY = motion;
            }
            else if(input.isKeyDown(constants.DOWN)) {
                player.gotoAndPlay('backward');
                this.y -= motion;
                this.regY += motion;
                moveY = -motion;
            }
            
            if(input.isKeyDown(constants.RIGHT)) {
                this.x -= motion;
                this.regX += motion;
                moveX = -motion;
            }
            else if(input.isKeyDown(constants.LEFT)) {
                this.x += motion;
                this.regX -= motion;
                moveX = motion;
            }

            this.smokeRings.update(this.currentAltitude, moveX, moveY);
        }
        destroy() {
            for (var i = 0; i < this.objectIndex.length; i++) {
                game.removeChildAt(this.objectIndex[i]);
            }
        }
        */
    }
}
 