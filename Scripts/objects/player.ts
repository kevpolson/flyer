/// <reference path="../managers/asset.ts" />
/// <reference path="gameobject.ts" />
module objects {
    // Player Class
    export class Player extends GameObject {
        prevAnimation: string;
        prevJumpHeight: number;
        jumpHieght: number;
        jumping: boolean = false;
        jumpX: number;
        falling: boolean;
        jumpNext: boolean = false;

        enemyX: number;
        enemyY: number;
        shootNext: boolean = false;
        laser: createjs.Shape;
        GUNX: number = this.regX * 0.5;
        LASER_DURATION: number = 125;
        LASER_WIDTH: number = 3;
        gunFired: boolean = false;
        fireTime: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super(stage, game, managers.Assets.player, "idle");

            this.x = 100;
            this.y = constants.GROUND_HEIGHT - this.regY;

            this.prevAnimation = this.currentAnimation;
        }

        //initiate firing the gun
        shootPressed() {
            this.shootNext = true;
        }

        //shoot the laser
        shoot() {
            if (!this.gunFired) {
                createjs.Sound.play("laser");
                this.gunFired = true;
                this.fireTime = createjs.Ticker.getTime() + this.LASER_DURATION;

                this.enemyX = this.stage.mouseX;
                this.enemyY = this.stage.mouseY;

                this.createLaser("#DF0174");
            }
        }
        
        update(input: managers.Input) {
            if(input.isKeyDown(constants.UP)) {
                console.log('up');
            } else if (input.isKeyDown(constants.DOWN)) {
                console.log('down');
            }
            if (input.isKeyDown(constants.RIGHT)) {
                console.log('right');
            } else if (input.isKeyDown(constants.LEFT)) {
                console.log('left');
            }
            if(input.hasKeyBeenUp(constants.SPACE)) {
                console.log('space');
            }
        }

        //set idle animation
        idle() {
            this.gotoAndPlay("idle");
        }

        //refresh the laser if the player is jumping
        refreshLaser() {
            this.game.removeChild(this.laser);
            this.createLaser("#DF0174");
        }

        //create the laser object
        createLaser(newColor: string) {
            this.laser = new createjs.Shape();
            this.laser.graphics.beginFill(newColor);
            this.laser.graphics.moveTo(this.x + this.GUNX, this.y)
                .lineTo(this.enemyX, this.enemyY)
                .lineTo(this.enemyX, this.enemyY + this.LASER_WIDTH)
                .lineTo(this.x + this.GUNX, this.y + this.LASER_WIDTH)
                .lineTo(this.x + this.GUNX, this.y);
            game.addChild(this.laser);
        }

        //remove laser object
        destroyLaser() {
            if (this.gunFired) {
                this.gunFired = false;
                this.enemyX = 0;
                this.enemyY = 0;
                game.removeChild(this.laser);
            }
        }

    }
} 