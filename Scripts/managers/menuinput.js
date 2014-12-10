var managers;
(function (managers) {
    var MenuInput = (function () {
        function MenuInput() {
            this.currentKeyDown = [false, false, false, false, false, false, false];
            this.previousKeyDown = [false, false, false, false, false, false, false];
            window.onkeyup = null;
            window.onkeydown = null;
            window.onkeyup = this.onKeyReleased;
            window.onkeydown = this.onKeyPressed;
        }
        MenuInput.prototype.update = function () {
            for (var i = 0; i < this.currentKeyDown.length; i++) {
                this.previousKeyDown[i] = this.currentKeyDown[i];
            }
            this.checkSpecialKeyDown();
            this.checkSpecialKeyUp();
        };

        MenuInput.prototype.isKeyDown = function (key) {
            return this.currentKeyDown[constants.Keys[key]];
        };

        MenuInput.prototype.hasKeyBeenUp = function (key) {
            return !this.previousKeyDown[constants.Keys[key]] && this.currentKeyDown[constants.Keys[key]];
        };

        MenuInput.prototype.onKeyPressed = function (event) {
            menuInput.specialKeyPressed = event.keyCode;
            /*
            if (menuInput.specialKeyPressed != constants.KEYCODE_SPACE &&
            menuInput.specialKeyPressed != constants.KEYCODE_ENTER &&
            menuInput.specialKeyPressed != constants.KEYCODE_ESCAPE) {
            menuInput.checkKeyDown(event.keyCode);
            }
            */
        };

        MenuInput.prototype.onKeyReleased = function (event) {
            menuInput.specialKeyReleased = event.keyCode;
            //menuInput.checkKeyUp(event.keyCode);
        };

        MenuInput.prototype.checkSpecialKeyDown = function () {
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
        };

        MenuInput.prototype.checkSpecialKeyUp = function () {
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
        };

        MenuInput.prototype.checkKeyDown = function (keyPressed) {
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
        };

        MenuInput.prototype.checkKeyUp = function (keyReleased) {
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
        };
        return MenuInput;
    })();
    managers.MenuInput = MenuInput;
})(managers || (managers = {}));
//# sourceMappingURL=menuinput.js.map
