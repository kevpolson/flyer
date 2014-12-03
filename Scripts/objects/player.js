/// <reference path="../managers/asset.ts" />
/// <reference path="gameobject.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Player Class
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game) {
            _super.call(this, game, managers.Assets.player, "idle");
            this.heights = [];
            this.widths = [];

            var animations = managers.Assets.player.getAnimations();
            for (var a = 0; a < animations.length; a++) {
                var frames = managers.Assets.player.getAnimation(animations[a]).frames;
                this.heights[a] = new Array();
                this.widths[a] = new Array();
                console.log('frames: ' + frames);
                for (var f = 0; f < frames.length; f++) {
                    console.log('height (' + a + ':' + f + '): ' + managers.Assets.player.getFrame(frames[f]).rect.height);
                    this.heights[a][frames[f]] = managers.Assets.player.getFrame(frames[f]).rect.height;
                    this.widths[a][frames[f]] = managers.Assets.player.getFrame(frames[f]).rect.width;
                }
            }

            console.log(this.heights);
            console.log(this.widths);
            this.x = 100;
            this.actualX = this.x;
            this.y = constants.GROUND_HEIGHT - this.regY;
        }
        Player.prototype.update = function (input) {
            this.regX = this.widths[constants.Animations[this.currentAnimation]][player.currentFrame] * 0.5;
            this.regY = this.heights[constants.Animations[this.currentAnimation]][player.currentFrame] * 0.5;
            this.y = constants.GROUND_HEIGHT - this.regY;

            /*
            if (input.isKeyDown(constants.UP)) {
            console.log('up');
            } else if (input.isKeyDown(constants.DOWN)) {
            console.log('down');
            }
            */
            if (this.currentAnimation != "attack") {
                if (input.isKeyDown(constants.RIGHT)) {
                    this.movement(1);
                } else if (input.isKeyDown(constants.LEFT)) {
                    this.movement(-1);
                } else {
                    this.idle();
                }
            }
            if (input.hasKeyBeenUp(constants.SPACE)) {
                if (this.currentAnimation != "attack") {
                    this.gotoAndPlay("attack");
                }
            }
        };

        //move player based on scale
        Player.prototype.movement = function (scale) {
            this.scaleX = scale;
            this.x += scale * this.speed;
            this.actualX += scale * this.speed;
            this.lastMovement = scale * this.speed;

            if (this.currentAnimation != "dash") {
                this.gotoAndPlay("dash");
            }
        };

        //set idle animation
        Player.prototype.idle = function () {
            this.lastMovement = 0;
            if (this.currentAnimation != "idle") {
                this.gotoAndPlay("idle");
            }
        };
        return Player;
    })(objects.GameObject);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
