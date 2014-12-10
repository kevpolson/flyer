/// <reference path="../../managers/asset.ts" />
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
        bullets: objects.punchBullet[];
        punching: boolean;
        punchOffset: THREE.Vector2[];
        punchFrames: number[];
        bulletCount: number;
        direction: number;
        energy: number;
        keyCount: number;
        transitionCounter: number;
        startTransition: boolean;
        transition: boolean;
        damaged: boolean;
        damagedCounter: number;
        blinkCounter: number;
        visble: boolean;
        gameover: boolean;
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
            this.direction = constants.FACING_RIGHT;

            this.bullets = new Array<objects.punchBullet>();
            this.punching = false;
            this.punchOffset = new Array<THREE.Vector2>(3);
            this.punchOffset[0] = new THREE.Vector2(59, 28);
            this.punchOffset[1] = new THREE.Vector2(69, 26);
            this.punchOffset[2] = new THREE.Vector2(64, 25);

            this.punchFrames = new Array<number>(3);
            this.punchFrames[0] = 0;
            this.punchFrames[1] = 2;
            this.punchFrames[2] = 5;

            this.energy = constants.ENERGY_MAX;

            this.startTransition = false;
            this.transition = false;
            this.transitionCounter = 0;
            this.keyCount = 0;

            this.damaged = false;
            this.damagedCounter = 0;

            this.blinkCounter = 0;
            this.visble = true;

            this.gameover = false;
        }

        update(exit: objects.exit, key: objects.key): number { 
            var points = 0;

            this.energy += constants.ENERGY_CHARGE;
            if (this.energy > constants.ENERGY_MAX) {
                this.energy = constants.ENERGY_MAX;
            }

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

            if (!this.damaged && !this.startTransition) {
                if (this.currentAnimationType != "attack" && this.currentAnimationType != "victory") {
                    this.punching = false;
                    if (input.isKeyDown(constants.RIGHT)) {
                        this.movement(constants.FACING_RIGHT);
                    } else if (input.isKeyDown(constants.LEFT)) {
                        this.movement(constants.FACING_LEFT);
                    }
                    else {
                        this.idle();
                    }
                }

                if (!this.punching && this.currentAnimationType != "victory" && input.hasKeyBeenUp(constants.SPACE)) {
                    this.punching = true;
                    this.bulletCount = 0;
                    this.changeAnimation("attack", false);
                }
                if (!this.punching && input.hasKeyBeenUp(constants.ENTER)) {
                    this.changeAnimation("victory", false);
                    if (managers.Collision.playerExit(this, exit)) {
                        if (this.keyCount > 0) {
                            this.startTransition = true;
                            this.keyCount--;
                        }
                    }
                    if (managers.Collision.playerKey(this, key)) {
                        this.keyCount++;
                        points += constants.POINTS;
                        key.y += 1000;
                    }
                }

                if (this.punching) {
                    if (this.currentAnimationFrame === this.punchFrames[this.bulletCount]) {
                        if (this.energy - constants.ENERGY_DRAIN >= constants.ENERGY_DRAIN) {
                            this.energy -= constants.ENERGY_DRAIN;
                            if (this.direction === constants.FACING_LEFT) {
                                this.bullets[this.bullets.length] =
                                new objects.punchBullet(game,
                                    this.x - (this.regX * 3) + this.punchOffset[this.bulletCount].x,
                                    this.y - this.regY + this.punchOffset[this.bulletCount].y,
                                    this.direction);
                            }
                            else {
                                this.bullets[this.bullets.length] =
                                new objects.punchBullet(game,
                                    this.x - this.regX + this.punchOffset[this.bulletCount].x,
                                    this.y - this.regY + this.punchOffset[this.bulletCount].y,
                                    this.direction);
                            }
                            this.bulletCount++;
                        }
                    }
                }

            }
            else if (this.damaged) {
                this.damagedCounter++;
                this.blinkCounter++;
                if (this.blinkCounter > constants.ANIMATION_COUNT) {
                    this.blinkCounter = 0;
                    if (!this.visble) {
                        game.addChildAt(this, this.objectIndex);
                    }
                    else {
                        game.removeChildAt(this.objectIndex);
                    }
                    this.visble = !this.visble;
                }
                if (this.damagedCounter > constants.ANIMATION_COUNT * 20) {
                    if (!this.visble) {
                        game.addChildAt(this, this.objectIndex);
                        this.visble = !this.visble;
                    }
                    this.damaged = false;
                }
            }
            else {
                this.transitionState();
            }

            for (var i = 0; i < this.bullets.length; i++) {
                this.bullets[i].update();
            }

            return points;
        }

        //move player based on scale    
        movement(scale: number) {
            this.direction = scale;
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

        hit(): number {
            if (!this.damaged) {
                this.idle();
                this.damaged = true;
                this.damagedCounter = 0;
                this.blinkCounter = 0;
                this.visble = true;
                this.life--;
            }
            if (this.life <= 0) {
                this.life = 0;
                this.startTransition = true;
                this.gameover = true;
            }

            return;
        }

        changeAnimation(animationName: string, forceChange: boolean) {
            if (this.currentAnimationType != animationName || forceChange) {
                this.currentAnimationType = animationName;
                this.gotoAndPlay(animationName);

                this.currentAnimationFrame = 0;
                this.animationCounter = 0;
            }
        }

        transitionState() {
            this.transitionCounter++;
            if (this.transitionCounter > constants.ANIMATION_COUNT * 20) {
                this.transition = true;
            }
        }
    }
} 