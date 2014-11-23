var managers;
(function (managers) {
    var Input = (function () {
        function Input() {
            this.currentKeyDown = [false, false, false, false, false, false, false];
            this.previousKeyDown = [false, false, false, false, false, false, false];
            window.onkeyup = this.onKeyReleased;
            window.onkeydown = this.onKeyPressed;
        }
        Input.prototype.update = function () {
            for (var i = 0; i < this.currentKeyDown.length; i++) {
                this.previousKeyDown[i] = this.currentKeyDown[i];
            }
            this.checkSpecialKeyDown();
            this.checkSpecialKeyUp();
        };

        Input.prototype.isKeyDown = function (key) {
            return this.currentKeyDown[constants.Keys[key]];
        };

        Input.prototype.hasKeyBeenUp = function (key) {
            return !this.previousKeyDown[constants.Keys[key]] && this.currentKeyDown[constants.Keys[key]];
        };

        //allow for WASD and arrow control scheme
        Input.prototype.onKeyPressed = function (event) {
            input.specialKeyPressed = event.keyCode;
            if (input.specialKeyPressed != constants.KEYCODE_SPACE && input.specialKeyPressed != constants.KEYCODE_ENTER && input.specialKeyPressed != constants.KEYCODE_ESCAPE) {
                input.checkKeyDown(event.keyCode);
            }
        };

        Input.prototype.onKeyReleased = function (event) {
            input.specialKeyReleased = event.keyCode;
            input.checkKeyUp(event.keyCode);
        };

        Input.prototype.checkSpecialKeyDown = function () {
            if (this.specialKeyPressed != constants.INVALID) {
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
        };

        Input.prototype.checkSpecialKeyUp = function () {
            if (this.specialKeyReleased != constants.INVALID) {
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
        };

        Input.prototype.checkKeyDown = function (keyPressed) {
            if (keyPressed === constants.KEYCODE_W || keyPressed === constants.KEYCODE_UP) {
                input.currentKeyDown[constants.Keys[constants.UP]] = true;
            }
            if (keyPressed === constants.KEYCODE_S || keyPressed === constants.KEYCODE_DOWN) {
                input.currentKeyDown[constants.Keys[constants.DOWN]] = true;
            }
            if (keyPressed === constants.KEYCODE_A || keyPressed === constants.KEYCODE_LEFT) {
                input.currentKeyDown[constants.Keys[constants.LEFT]] = true;
            }
            if (keyPressed === constants.KEYCODE_D || keyPressed === constants.KEYCODE_RIGHT) {
                input.currentKeyDown[constants.Keys[constants.RIGHT]] = true;
            }
            /*
            if (keyPressed === constants.KEYCODE_SPACE) {
            input.currentKeyDown[constants.Keys[constants.SPACE]] = true;
            }
            if (keyPressed === constants.KEYCODE_ENTER) {
            input.currentKeyDown[constants.Keys[constants.ENTER]] = true;
            }
            if (keyPressed === constants.KEYCODE_ESCAPE) {
            input.currentKeyDown[constants.Keys[constants.ESCAPE]] = true;
            }
            */
        };

        Input.prototype.checkKeyUp = function (keyReleased) {
            if (keyReleased === constants.KEYCODE_W || keyReleased === constants.KEYCODE_UP) {
                input.currentKeyDown[constants.Keys[constants.UP]] = false;
            }
            if (keyReleased === constants.KEYCODE_S || keyReleased === constants.KEYCODE_DOWN) {
                input.currentKeyDown[constants.Keys[constants.DOWN]] = false;
            }
            if (keyReleased === constants.KEYCODE_A || keyReleased === constants.KEYCODE_LEFT) {
                input.currentKeyDown[constants.Keys[constants.LEFT]] = false;
            }
            if (keyReleased === constants.KEYCODE_D || keyReleased === constants.KEYCODE_RIGHT) {
                input.currentKeyDown[constants.Keys[constants.RIGHT]] = false;
            }
            /*
            if (keyReleased === constants.KEYCODE_SPACE) {
            input.currentKeyDown[constants.Keys[constants.SPACE]] = false;
            }
            if (keyReleased === constants.KEYCODE_ENTER) {
            input.currentKeyDown[constants.Keys[constants.ENTER]] = false;
            }
            if (keyReleased === constants.KEYCODE_ESCAPE) {
            input.currentKeyDown[constants.Keys[constants.ESCAPE]] = false;
            }
            */
        };
        return Input;
    })();
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map
