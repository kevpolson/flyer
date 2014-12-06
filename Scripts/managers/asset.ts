/// <reference path="../states/loading.ts" />
module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "bgMusic", src: "assets/sounds/UnderTheClouds.mp3" },
        { id: "background", src: "assets/images/background.png" }
    ];

    var skydivingPlayerSheetData = {
        "images": ["assets/images/skydivingPlayer.png"],
        "frames": [
            [1, 1, 28, 32],   //falling  [0]
            [38, 2, 36, 38],  //falling  [1] not used
            [1, 34, 26, 28],  //forward  [2]
            [36, 42, 32, 36], //forward  [3] not used
            [1, 63, 26, 25],  //backward [4]
            [36, 83, 36, 25], //backward [5] not used
        ],
        "animations": {
            "falling": {
                frames: [0],
                speed: constants.ANIMATION_TIME
            },
            "forward": {
                frames: [4],
                speed: constants.ANIMATION_TIME
            },
            "backward": {
                frames: [2],
                speed: constants.ANIMATION_TIME
            }
        }
    }

    var sideScrollingPlayerSheetData = {
        "images": ["assets/images/sideScrollingPlayer.png"],
        "frames": [
            [1, 1, 36, 59],     //idle      [0]
            [38, 1, 36, 57],    //idle      [1]
            [75, 1, 36, 56],    //idle      [2]
            [112, 1, 36, 57],   //idle      [3]
            [149, 1, 36, 59],   //idle      [4]
            [186, 1, 36, 57],   //idle      [5]
            [223, 1, 36, 56],   //idle      [6]
            [260, 1, 36, 57],   //idle      [7]
            [1, 61, 37, 53],    //dash      [8]
            [39, 61, 43, 60],   //dash      [9]
            [84, 61, 53, 60],   //dash     [10]
            [137, 61, 46, 51],  //dash     [11]
            [185, 61, 39, 52],  //dash     [12]
            [224, 61, 41, 59],  //dash     [13]
            [266, 61, 50, 51],  //dash     [14]
            [317, 61, 46, 52],  //dash     [15]
            [1, 122, 59, 52],   //attack   [16]
            [61, 122, 50, 53],  //attack   [17]
            [112, 122, 70, 53], //attack   [18]
            [183, 122, 64, 51], //attack   [19]
            [248, 122, 50, 53], //attack   [20]
            [299, 122, 65, 51], //attack   [21]
            [1, 176, 41, 49],   //victory  [22]
            [43, 176, 45, 47],  //victory  [23]
            [89, 176, 41, 51],  //victory  [24]
            [131, 176, 30, 70], //victory  [25]
            [162, 176, 33, 67], //victory  [26]
            [196, 176, 33, 69], //victory  [27]
            [230, 176, 33, 69], //victory  [28]
            [264, 176, 42, 62]  //victory  [29]
        ],
        "animations": {
            "idle": {
                frames: [0, 1, 2, 3, 4, 5, 6, 7],
                //next: "victory",
                speed: constants.ANIMATION_TIME
            },
            "dash": {
                frames: [8, 9, 10, 11, 12, 13, 14, 15],
                speed: constants.ANIMATION_TIME
            },
            "attack": {
                frames: [16, 17, 18, 19, 20, 21],
                next: "idle",
                speed: constants.ANIMATION_TIME
            },
            "victory": {
                frames: [22, 23, 24, 25, 26, 27, 28, 29],
                next: "idle",
                speed: constants.ANIMATION_TIME
            }
        }
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static buttons: createjs.SpriteSheet;
        public static sidePlayer: createjs.SpriteSheet;
        public static skyPlayer: createjs.SpriteSheet;
        public static energytank: createjs.SpriteSheet;
        public static missile: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();

            this.loader = new createjs.LoadQueue();
            this.loader.on("progress", states.loadingState, this);
            this.loader.on("complete", states.loadingUnload, this);

            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            
            this.sidePlayer = new createjs.SpriteSheet(sideScrollingPlayerSheetData);
            this.skyPlayer = new createjs.SpriteSheet(skydivingPlayerSheetData);
        }
    }
} 