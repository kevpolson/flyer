var managers;
(function (managers) {
    var Input = (function () {
        function Input() {
        }
        Input.init = function () {
            window.onkeyup = this.keyReleased;
            window.onkeydown = this.keyPressed;
        };

        Input.update = function () {
            //this.previousKeyUp = this.currentKeyUp;
            this.previousKeyDown = this.currentKeyDown;
        };

        //allow for WASD and arrow control scheme
        Input.keyPressed = function (event) {
            //this.currentKeyDown = [];
            var count = this.currentKeyDown.length - 1;
            if (count < 0) {
                count = 0;
            }

            if (event.keyCode === constants.KEYCODE_W || event.keyCode === constants.KEYCODE_UP) {
                this.upKeyDown = true;
                this.currentKeyDown[count++] = event.keyCode;
                console.log('up');
            }
            if (event.keyCode === constants.KEYCODE_S || event.keyCode === constants.KEYCODE_DOWN) {
                this.downKeyDown = true;
                this.currentKeyDown[count++] = event.keyCode;
                console.log('down');
            }
            if (event.keyCode === constants.KEYCODE_A || event.keyCode === constants.KEYCODE_LEFT) {
                this.leftKeyDown = true;
                this.currentKeyDown[count++] = event.keyCode;
            }
            if (event.keyCode === constants.KEYCODE_D || event.keyCode === constants.KEYCODE_RIGHT) {
                this.rightKeyDown = true;
                this.currentKeyDown[count++] = event.keyCode;
            }
            if (event.keyCode === constants.KEYCODE_SPACE) {
                this.spaceKeyDown = true;
                this.currentKeyDown[count++] = event.keyCode;
            }
            if (event.keyCode === constants.KEYCODE_ENTER) {
                this.enterKeyDown = true;
                this.currentKeyDown[count++] = event.keyCode;
            }
            console.log(this.currentKeyDown.length);
        };

        Input.keyReleased = function (event) {
            //this.currentKeyUp = [];
            if (event.keyCode === constants.KEYCODE_W || event.keyCode === constants.KEYCODE_UP) {
                this.upKeyDown = false;
                console.log('up');
            }
            if (event.keyCode === constants.KEYCODE_S || event.keyCode === constants.KEYCODE_DOWN) {
                this.downKeyDown = false;
                console.log('down');
            }
            if (event.keyCode === constants.KEYCODE_A || event.keyCode === constants.KEYCODE_LEFT) {
                this.leftKeyDown = false;
                console.log('left');
            }
            if (event.keyCode === constants.KEYCODE_D || event.keyCode === constants.KEYCODE_RIGHT) {
                this.rightKeyDown = false;
                console.log('right');
            }
            if (event.keyCode === constants.KEYCODE_SPACE) {
                this.spaceKeyDown = false;
                console.log('space');
            }
            if (event.keyCode === constants.KEYCODE_ENTER) {
                this.enterKeyDown = false;
                console.log('enter');
            }
        };
        Input.currentKeyDown = [];
        Input.previousKeyDown = [];
        return Input;
    })();
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map
