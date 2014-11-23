module managers {
    export class Input {
        public static upKeyDown: boolean;
        public static downKeyDown: boolean;
        public static leftKeyDown: boolean;
        public static rightKeyDown: boolean;
        public static spaceKeyDown: boolean;
        public static enterKeyDown: boolean;

        //static currentKeyUp = [];
        //static previousKeyUp = [];
        static currentKeyDown = [];
        static previousKeyDown = [];

        public static init() {
            window.onkeyup = this.keyReleased; 
            window.onkeydown = this.keyPressed; 
        }

        public static update() {
            //this.previousKeyUp = this.currentKeyUp;
            this.previousKeyDown = this.currentKeyDown;
        }

        //allow for WASD and arrow control scheme
        static keyPressed(event) {
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
        }

        static keyReleased(event) {
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
        }
    }

} 