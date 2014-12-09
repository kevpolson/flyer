﻿/// <reference path="../../managers/asset.ts" />
/// <reference path="gameobject.ts" />

module objects {
    // Player Class
    export class sideScrollingPlayer extends GameObject {
        actualX: number;
        lastMovement: number;
        heights = [];
        widths = [];
        frames = [];
        currentAnimationType: string;
        animationCounter: number = 0;
        constructor(game: createjs.Container) {
            super(game, managers.Assets.player, "idle");
            this.currentAnimationType = this.currentAnimation;
            
            var animations = managers.Assets.player.getAnimations();
            for (var a = 0; a < animations.length; a++) {
                this.heights[a] = new Array<number>();
                this.widths[a] = new Array<number>();
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

        update() { 
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
                }
                else {
                    this.idle();
                }
            }

            if(input.hasKeyBeenUp(constants.SPACE)) {
                this.changeAnimation("attack", false);
            }
            if (input.hasKeyBeenUp(constants.ENTER)) {
                this.changeAnimation("victory", false);
            }
        }

        //move player based on scale    
        movement(scale: number) {
            this.scaleX = scale;
            this.x += scale * this.speed;
            this.actualX += scale * this.speed;
            this.lastMovement = scale * this.speed;

            this.changeAnimation("dash", false);
        }
        
        //set idle animation
        idle() {
            this.lastMovement = 0;
            this.changeAnimation("idle", false);
        }

        changeAnimation(animationName: string, forceChange: boolean) {
            if (this.currentAnimationType != animationName || forceChange) {
                this.currentAnimationType = animationName;
                this.gotoAndPlay(animationName);

                this.currentAnimationFrame = 0;
                this.animationCounter = 0;
            }
        }
    }
} 