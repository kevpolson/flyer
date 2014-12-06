var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/input.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="skydiverplayer.ts" />
/// <reference path="smokering.ts" />
var objects;
(function (objects) {
    var skyDiverLevel = (function (_super) {
        __extends(skyDiverLevel, _super);
        function skyDiverLevel(game, screenWidth, screenHeight) {
            _super.call(this, managers.Assets.loader.getResult("ground"));
            //ground: createjs.Bitmap;
            this.objectIndex = [];

            //this.ground = new createjs.Bitmap(managers.Assets.loader.getResult("ground"));
            this.objectIndex[0] = game.children.length;
            game.addChildAt(this, this.objectIndex[0]);

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
            this.smokeRings = new objects.smokeRing(this.objectIndex[1]);
        }
        skyDiverLevel.prototype.update = function (player) {
            if (this.currentAltitude < 3) {
                this.currentAltitude += constants.FEET_PER_UPDATE_HIGH;
            } else if (this.currentAltitude < 10) {
                this.currentAltitude += constants.FEET_PER_UPDATE_MID;
            } else if (this.currentAltitude < this.altitude) {
                this.currentAltitude += constants.FEET_PER_UPDATE_LOW;
            }

            //console.log(this.currentAltitude + ' ' + this.altitude);
            if (this.currentAltitude < this.altitude) {
                this.scaleX = this.currentAltitude; //this.currentAltitude;
                this.scaleY = this.currentAltitude; //this.currentAltitude;
            }

            player.gotoAndPlay('falling');
            var motion = 0.1;
            console.log(this.y + ' ' + this.x);
            if (input.isKeyDown(constants.UP)) {
                player.gotoAndPlay('forward');
                this.y += motion;
                this.regY -= motion;
            } else if (input.isKeyDown(constants.DOWN)) {
                player.gotoAndPlay('backward');
                this.y -= motion;
                this.regY += motion;
            }

            if (input.isKeyDown(constants.RIGHT)) {
                this.x -= motion;
                this.regX += motion;
            } else if (input.isKeyDown(constants.LEFT)) {
                this.x += motion;
                this.regX -= motion;
            }
        };

        skyDiverLevel.prototype.destroy = function () {
            for (var i = 0; i < this.objectIndex.length; i++) {
                game.removeChildAt(this.objectIndex[i]);
            }
        };
        return skyDiverLevel;
    })(createjs.Bitmap);
    objects.skyDiverLevel = skyDiverLevel;
})(objects || (objects = {}));
//# sourceMappingURL=skydiverlevel.js.map
