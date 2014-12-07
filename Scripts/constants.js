var constants;
(function (constants) {
    //State Machine Constants
    constants.LOADING_STATE = 0;
    constants.MENU_STATE = 1;
    constants.PLAY_STATE = 2;
    constants.GAME_OVER_STATE = 3;

    //Game Constants
    constants.MISSILE_NUM = 2;
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#FF8000";
    constants.SCORE_COLOUR = "#000000";
    constants.PLAYER_LIVES = 5;
    constants.EXPLOSION_TIME = 1000;
    constants.GAME_SPEED = 2.5;
    constants.GROUND_HEIGHT = 425;

    //Input Constants
    constants.KEYCODE_UP = 38;
    constants.KEYCODE_W = 87;
    constants.KEYCODE_DOWN = 40;
    constants.KEYCODE_S = 83;
    constants.KEYCODE_LEFT = 37;
    constants.KEYCODE_A = 65;
    constants.KEYCODE_RIGHT = 39;
    constants.KEYCODE_D = 68;
    constants.KEYCODE_ENTER = 13;
    constants.KEYCODE_SPACE = 32;
    constants.KEYCODE_ESCAPE = 27;

    (function (Keys) {
        Keys[Keys["Up"] = 0] = "Up";
        Keys[Keys["Down"] = 1] = "Down";
        Keys[Keys["Left"] = 2] = "Left";
        Keys[Keys["Right"] = 3] = "Right";
        Keys[Keys["Space"] = 4] = "Space";
        Keys[Keys["Enter"] = 5] = "Enter";
        Keys[Keys["Escape"] = 6] = "Escape";
    })(constants.Keys || (constants.Keys = {}));
    var Keys = constants.Keys;
    ;
    constants.UP = 'Up';
    constants.DOWN = 'Down';
    constants.LEFT = 'Left';
    constants.RIGHT = 'Right';
    constants.SPACE = 'Space';
    constants.ENTER = 'Enter';
    constants.ESCAPE = 'Escape';

    //Player Animation Constants
    (function (Animations) {
        Animations[Animations["idle"] = 0] = "idle";
        Animations[Animations["dash"] = 1] = "dash";
        Animations[Animations["attack"] = 2] = "attack";
        Animations[Animations["victory"] = 3] = "victory";
    })(constants.Animations || (constants.Animations = {}));
    var Animations = constants.Animations;
    ;
    constants.IDLE_WIDTH = 35;
    constants.IDLE_HEIGHT = 40;
    constants.FLY_WIDTH = 45;
    constants.FLY_HEIGHT = 15;
    constants.ANIMATION_TIME = 0.1;
    constants.ANIMATION_COUNT = 10;

    //SkyDiving Level Constants
    constants.PLANE_HEIGHT = 100;
    constants.PARACHUTE_HEIGHT = 100;
    constants.DESCEND_PER_UPDATE = 0.1;
    constants.ASCEND_PER_UPDATE = 1;
    constants.MAX_ASCEND = 75;
    constants.LEVEL_END_RING = 18;
    constants.LEVEL_END_RING_BONUS = 19;
    constants.GROUND = 1.01;
    constants.POINTS = 100;
    constants.MAX_SPIRTES = 7;

    constants.INVALID = -1;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
