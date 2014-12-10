module constants {
    //State Machine Constants
    export var LOADING_STATE: number = 0;
    export var STARTMENU_STATE: number = 1;
    export var CUTSCENE1: number = 2;
    export var LEVEL1: number = 3;
    export var CUTSCENE2: number = 4;
    export var LEVEL2: number = 5;
    export var CUTSCENE3: number = 6;
    export var GAMEOVER_STATE: number = 7;

    //Game Constants
    export enum enemyLife { Easy = 0.5, Normal = 1, Hard = 1.5 };
    export enum startOptions { Difficulty = 0, Start = 1 };
    export enum difficultyOptions { Easy = 1, Normal = 2, Hard = 3 };
    export var MISSILE_NUM: number = 2;
    export var PLAYER_LIVES = 5;
    export var EXPLOSION_TIME = 1000;
    export var GAME_SPEED = 2.5;
    export var GROUND_HEIGHT = 430;
    export var FACING_RIGHT = 1;
    export var FACING_LEFT = -1;
    export var BULLET_LIFE = 100;
    export var ENERGY_DRAIN = 10;
    export var ENERGY_CHARGE = 10/60;
    export var ENERGY_MAX = 100;

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

    export var EASY: string = "Easy";
    export var NORMAL: string = "Normal";
    export var HARD: string = "Hard";

    //Player Animation Constants
    export enum Animations { idle = 0, dash = 1, attack = 2, victory = 3 };
    export var IDLE_WIDTH: number = 35;
    export var IDLE_HEIGHT: number = 40;
    export var FLY_WIDTH: number = 45;
    export var FLY_HEIGHT: number = 15;
    export var ANIMATION_TIME: number = 0.1;
    export var ANIMATION_COUNT: number = 10;

    //SkyDiving Level Constants
    export enum ringMisses { Easy = 3, Normal = 2, Hard = 1 };
    export var PLANE_HEIGHT: number = 994.01;
    export var PARACHUTE_HEIGHT: number = 50;
    export var DESCEND_PER_UPDATE: number = 0.1; 
    export var ASCEND_PER_UPDATE: number = 1;
    export var MAX_ASCEND: number = 75;
    export var LEVEL_END_RING: number = 18;
    export var LEVEL_END_RING_BONUS: number = 19;
    export var GROUND = 1.01;
    export var POINTS = 100;
    export var MAX_SPIRTES = 7;

    //Colors
    export var COLOR_CREAM: string = "#F2F5A9";
    export var COLOR_LIGHT_RED: string = "#FE2E2E";
    export var COLOR_ORANGE: string = "#FF8000";

    export var INVALID: number = -1;
}