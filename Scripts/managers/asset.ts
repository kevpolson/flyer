/// <reference path="../states/loading.ts" />
module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "background", src: "assets/images/background.png" },
        { id: "bgMusic", src: "assets/sounds/UnderTheClouds.mp3" }
    ];


    // SpriteSheet for Player Object
    var playerSheetData = {
        "images": ["assets/images/supes.png"],
        "frames": [
            [0, 0,
             constants.IDLE_WIDTH, constants.IDLE_HEIGHT], //idle      [0]
            [constants.IDLE_WIDTH, 0,
             constants.IDLE_WIDTH, constants.IDLE_HEIGHT], //idle      [1]
            [constants.IDLE_WIDTH * 2, 0,
             constants.IDLE_WIDTH, constants.IDLE_HEIGHT], //idle      [2]
            [constants.IDLE_WIDTH * 3, 0,
             constants.IDLE_WIDTH, constants.IDLE_HEIGHT], //idle      [3]
            [0, constants.IDLE_HEIGHT,
             constants.FLY_WIDTH, constants.FLY_HEIGHT],   //fly left  [4]
            [constants.FLY_WIDTH, constants.IDLE_HEIGHT,
             constants.FLY_WIDTH, constants.FLY_HEIGHT],   //fly left  [5]
            [0, constants.IDLE_HEIGHT + constants.FLY_HEIGHT,
             constants.FLY_WIDTH, constants.FLY_HEIGHT],   //fly right [6]
            [constants.FLY_WIDTH, constants.IDLE_HEIGHT + constants.FLY_HEIGHT,
             constants.FLY_WIDTH, constants.FLY_HEIGHT]    //fly right [7]
        ],
        "animations": {
            "idle": { frames: [0, 1, 2, 3],
                      speed: constants.ANIMATION_TIME },
            "flyLeft": { frames: [4, 5],
                         speed: constants.ANIMATION_TIME },
            "flyRight": { frames: [6, 7],
                          speed: constants.ANIMATION_TIME }
        }
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static buttons: createjs.SpriteSheet;
        public static player: createjs.SpriteSheet;
        public static energytank: createjs.SpriteSheet;
        public static missile: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();

            this.loader = new createjs.LoadQueue();
            this.loader.on("progress", states.loadingState, this);
            this.loader.on("complete", states.loadingUnload, this);

            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            
            this.player = new createjs.SpriteSheet(playerSheetData);
        }
    }
} 