module constants {
    //State Machine Constants
    export var LOADING_STATE: number = 0;
    export var MENU_STATE: number = 1;
    export var PLAY_STATE: number = 2;
    export var GAME_OVER_STATE: number = 3;

    //Game Constants
    export var MISSILE_NUM: number = 2;
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#FF8000";
    export var SCORE_COLOUR = "#000000";
    export var PLAYER_LIVES = 5;
    export var EXPLOSION_TIME = 1000;
    export var GAME_SPEED = 2.5;
    export var GROUND_HEIGHT = 425;

    //Input Constants
    export var KEYCODE_UP: number = 38;
    export var KEYCODE_W: number = 87;
    export var KEYCODE_DOWN: number = 40;
    export var KEYCODE_S: number = 83;
    export var KEYCODE_LEFT: number = 37;
    export var KEYCODE_A: number = 65;
    export var KEYCODE_RIGHT: number = 39;
    export var KEYCODE_D: number = 68;
    export var KEYCODE_ENTER: number = 13;
    export var KEYCODE_SPACE: number = 32;
    export var KEYCODE_ESCAPE: number = 27;

    export enum Keys { Up = 0, Down = 1, Left = 2, Right = 3, Space = 4, Enter = 5, Escape = 6 };
    export var UP: string = 'Up';
    export var DOWN: string = 'Down';
    export var LEFT: string = 'Left';
    export var RIGHT: string = 'Right';
    export var SPACE: string = 'Space';
    export var ENTER: string = 'Enter';
    export var ESCAPE: string = 'Escape';

    //Player Animation Constants
    export enum Animations { idle = 0, dash = 1, attack = 2, victory = 3 };
    export var IDLE_WIDTH: number = 35;
    export var IDLE_HEIGHT: number = 40;
    export var FLY_WIDTH: number = 45;
    export var FLY_HEIGHT: number = 15;
    export var ANIMATION_TIME: number = 0.1;
    export var ANIMATION_COUNT: number = 10;

    //SkyDiving Level Constants
    export var PLANE_HEIGHT: number = 100;//994.01;
    export var PARACHUTE_HEIGHT: number = 100;
    export var DESCEND_PER_UPDATE: number = 0.1; 
    export var ASCEND_PER_UPDATE: number = 1;
    export var MAX_ASCEND: number = 75;
    export var LEVEL_END_RING: number = 18;
    export var LEVEL_END_RING_BONUS: number = 19;
    export var GROUND = 1.01;
    export var POINTS = 100;
    export var MAX_SPIRTES = 7;

    export var INVALID: number = -1;
}