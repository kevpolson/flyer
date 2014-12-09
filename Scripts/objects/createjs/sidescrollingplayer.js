/// <reference path="../../managers/asset.ts" />
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
    var sideScrollingPlayer = (function (_super) {
        __extends(sideScrollingPlayer, _super);
        function sideScrollingPlayer(game) {
            _super.call(this, game, managers.Assets.player, "idle");
            this.heights = [];
            this.widths = [];
            this.frames = [];
            this.animationCounter = 0;
            this.currentAnimationType = this.currentAnimation;

            var animations = managers.Assets.player.getAnimations();
            for (var a = 0; a < animations.length; a++) {
                this.heights[a] = new Array();
                this.widths[a] = new Array();
                this.frames[a] = managers.Assets.player.getAnimation(animations[a]).frames;
                console.log('frames: ' + this.frames[a]);
                for (var f = 0; f < this.frames[a].length; f++) {
                    console.log('height (' + a + ':' + this.frames[a][f] + '): ' + managers.Assets.player.getFrame(this.frames[a][f]).rect.height);
                    this.heights[a][f] = managers.Assets.player.getFrame(this.frames[a][f]).rect.height;
                    this.widths[a][f] = managers.Assets.player.getFrame(this.frames[a][f]).rect.width;
                }
            }

            console.log(this.heights);
            console.log(this.widths);
            this.x = 100;
            this.actualX = this.x;
            this.y = constants.GROUND_HEIGHT - this.regY;
        }
        sideScrollingPlayer.prototype.update = function () {
            this.animationCounter++;
            this.currentAnimationFrame = Math.floor(this.currentAnimationFrame);

            if (this.animationCounter > constants.ANIMATION_COUNT) {
                this.animationCounter = 0;
                this.currentAnimationFrame++;
                if (this.currentAnimationFrame >= managers.Assets.player.getNumFrames(this.currentAnimationType)) {
                    this.changeAnimation(managers.Assets.player.getAnimation(this.currentAnimationType).next, true);
                }
            }

            this.regX = this.widths[constants.Animations[this.currentAnimationType]][Math.floor(this.currentAnimationFrame)] * 0.5;
            this.regY = this.heights[constants.Animations[this.currentAnimationType]][Math.floor(this.currentAnimationFrame)] * 0.5;

            this.y = constants.GROUND_HEIGHT - this.regY;

            /*
            if (input.isKeyDown(constants.UP)) {
            console.log('up');
            } else if (input.isKeyDown(constants.DOWN)) {
            console.log('down');
            }
            */
            if (this.currentAnimationType != "attack" && this.currentAnimationType != "victory") {
                if (input.isKeyDown(constants.RIGHT)) {
                    this.movement(1);
                } else if (input.isKeyDown(constants.LEFT)) {
                    this.movement(-1);
                } else {
                    this.idle();
                }
            }

            if (input.hasKeyBeenUp(constants.SPACE)) {
                this.changeAnimation("attack", false);
            }
            if (input.hasKeyBeenUp(constants.ENTER)) {
                this.changeAnimation("victory", false);
            }
        };

        //move player based on scale
        sideScrollingPlayer.prototype.movement = function (scale) {
            this.scaleX = scale;
            this.x += scale * this.speed;
            this.actualX += scale * this.speed;
            this.lastMovement = scale * this.speed;

            this.changeAnimation("dash", false);
        };

        //set idle animation
        sideScrollingPlayer.prototype.idle = function () {
            this.lastMovement = 0;
            this.changeAnimation("idle", false);
        };

        sideScrollingPlayer.prototype.changeAnimation = function (animationName, forceChange) {
            if (this.currentAnimationType != animationName || forceChange) {
                this.currentAnimationType = animationName;
                this.gotoAndPlay(animationName);

                this.currentAnimationFrame = 0;
                this.animationCounter = 0;
            }
        };
        return sideScrollingPlayer;
    })(objects.GameObject);
    objects.sideScrollingPlayer = sideScrollingPlayer;
})(objects || (objects = {}));
//# sourceMappingURL=sidescrollingplayer.js.map
