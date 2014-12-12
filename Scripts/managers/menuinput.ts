module managers {
    //input manager for the menus
    export class MenuInput {
        specialKeyPressed: number;
        specialKeyReleased: number;
        currentKeyDown: boolean[] = [false, false, false, false, false, false, false];
        private previousKeyDown: boolean[] = [false, false, false, false, false, false, false];
        constructor() {
            window.onkeyup = null;
            window.onkeydown = null;
            window.onkeyup = this.onKeyReleased;
            window.onkeydown = this.onKeyPressed;
        }

        update() {
            for (var i = 0; i < this.currentKeyDown.length; i++) {
                this.previousKeyDown[i] = this.currentKeyDown[i];
            }
            this.checkSpecialKeyDown();
            this.checkSpecialKeyUp();
        }

        isKeyDown(key: string) {
            return this.currentKeyDown[constants.Keys[key]];
        }

        hasKeyBeenUp(key: string) {
            return !this.previousKeyDown[constants.Keys[key]] && this.currentKeyDown[constants.Keys[key]];
        }

        private onKeyPressed(event) {
            menuInput.specialKeyPressed = event.keyCode;
            /*
            if (menuInput.specialKeyPressed != constants.KEYCODE_SPACE &&
                menuInput.specialKeyPressed != constants.KEYCODE_ENTER &&
                menuInput.specialKeyPressed != constants.KEYCODE_ESCAPE) {
                menuInput.checkKeyDown(event.keyCode);
            }
            */
        }

        private onKeyReleased(event) {
            menuInput.specialKeyReleased = event.keyCode;
            //menuInput.checkKeyUp(event.keyCode);
        }

        private checkSpecialKeyDown() {
            if (this.specialKeyPressed != constants.INVALID) {
                if (this.specialKeyPressed === constants.KEYCODE_UP) {
                    this.currentKeyDown[constants.Keys[constants.UP]] = true;
                }
                if (this.specialKeyPressed === constants.KEYCODE_DOWN) {
                    this.currentKeyDown[constants.Keys[constants.DOWN]] = true;
                }
                if (this.specialKeyPressed === constants.KEYCODE_LEFT) {
                    this.currentKeyDown[constants.Keys[constants.LEFT]] = true;
                }
                if (this.specialKeyPressed === constants.KEYCODE_RIGHT) {
                    this.currentKeyDown[constants.Keys[constants.RIGHT]] = true;
                }
                if (this.specialKeyPressed === constants.KEYCODE_SPACE) {
                    this.currentKeyDown[constants.Keys[constants.SPACE]] = true;
                }
                if (this.specialKeyPressed === constants.KEYCODE_ENTER) {
                    this.currentKeyDown[constants.Keys[constants.ENTER]] = true;
                }
                if (this.specialKeyPressed === constants.KEYCODE_ESCAPE) {
                    this.currentKeyDown[constants.Keys[constants.ESCAPE]] = true;
                }
                this.specialKeyPressed = constants.INVALID;
            }
        }

        private checkSpecialKeyUp() {
            if (this.specialKeyReleased != constants.INVALID) {
                if (this.specialKeyReleased === constants.KEYCODE_UP) {
                    this.currentKeyDown[constants.Keys[constants.UP]] = false;
                }
                if (this.specialKeyReleased === constants.KEYCODE_DOWN) {
                    this.currentKeyDown[constants.Keys[constants.DOWN]] = false;
                }
                if (this.specialKeyReleased === constants.KEYCODE_LEFT) {
                    this.currentKeyDown[constants.Keys[constants.LEFT]] = false;
                }
                if (this.specialKeyReleased === constants.KEYCODE_RIGHT) {
                    this.currentKeyDown[constants.Keys[constants.RIGHT]] = false;
                }
                if (this.specialKeyReleased === constants.KEYCODE_SPACE) {
                    this.currentKeyDown[constants.Keys[constants.SPACE]] = false;
                }
                if (this.specialKeyReleased === constants.KEYCODE_ENTER) {
                    this.currentKeyDown[constants.Keys[constants.ENTER]] = false;
                }
                if (this.specialKeyReleased === constants.KEYCODE_ESCAPE) {
                    this.currentKeyDown[constants.Keys[constants.ESCAPE]] = false;
                }
                this.specialKeyReleased = constants.INVALID;
            }
        }

        checkKeyDown(keyPressed: number) {
            if (keyPressed === constants.KEYCODE_W || keyPressed === constants.KEYCODE_UP) {
                menuInput.currentKeyDown[constants.Keys[constants.UP]] = true;
            }
            if (keyPressed === constants.KEYCODE_S || keyPressed === constants.KEYCODE_DOWN) {
                menuInput.currentKeyDown[constants.Keys[constants.DOWN]] = true;
            }
            if (keyPressed === constants.KEYCODE_A || keyPressed === constants.KEYCODE_LEFT) {
                menuInput.currentKeyDown[constants.Keys[constants.LEFT]] = true;
            }
            if (keyPressed === constants.KEYCODE_D || keyPressed === constants.KEYCODE_RIGHT) {
                menuInput.currentKeyDown[constants.Keys[constants.RIGHT]] = true;
            }
        }

        checkKeyUp(keyReleased: number) {
            if (keyReleased === constants.KEYCODE_W || keyReleased === constants.KEYCODE_UP) {
                menuInput.currentKeyDown[constants.Keys[constants.UP]] = false;
            }
            if (keyReleased === constants.KEYCODE_S || keyReleased === constants.KEYCODE_DOWN) {
                menuInput.currentKeyDown[constants.Keys[constants.DOWN]] = false;
            }
            if (keyReleased === constants.KEYCODE_A || keyReleased === constants.KEYCODE_LEFT) {
                menuInput.currentKeyDown[constants.Keys[constants.LEFT]] = false;
            }
            if (keyReleased === constants.KEYCODE_D || keyReleased === constants.KEYCODE_RIGHT) {
                menuInput.currentKeyDown[constants.Keys[constants.RIGHT]] = false;
            }
        }
    }
} 