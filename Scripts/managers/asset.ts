﻿/// <reference path="../states/loading.ts" />
module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "cough", src: "assets/sounds/cough.mp3" },
        { id: "fanfare", src: "assets/sounds/fanfare.mp3" },
        { id: "key", src: "assets/sounds/key.mp3" },
        { id: "laser", src: "assets/sounds/laser.mp3" },
        { id: "screech", src: "assets/sounds/screech.mp3" },
        { id: "stampede", src: "assets/sounds/stampede.mp3" },
        { id: "wind", src: "assets/sounds/wind.mp3" },
        { id: "click", src: "assets/sounds/click.mp3" },
        { id: "bgMusic", src: "assets/sounds/UnderTheClouds.mp3" },
        { id: "island", src: "assets/images/threejs/ground.png" },
        { id: "cutscene1", src: "assets/images/cutscene1.png" },
        { id: "cutscene2", src: "assets/images/cutscene2.png" },
        { id: "cutscene3", src: "assets/images/cutscene3.png" },
        { id: "background", src: "assets/images/background.png" }
    ];

    var triceratopsSheetData = {
        "images": ["assets/images/level2/tri.png"],
        "frames": [
            [1, 1, 217, 76],    //charging  [0]
            [219, 1, 217, 76],  //charging  [1]
            [437, 1, 217, 76],  //charging  [2]
            [656, 1, 217, 76],  //charging  [3]
            [874, 1, 217, 76],  //charging  [4]
            [1092, 1, 217, 76], //charging  [5]
            [1, 78, 220, 76],   //dead      [6]
            [222, 78, 217, 76], //dead      [7]
            [440, 78, 217, 76], //dead      [8]
            [658, 78, 213, 76]  //dead      [9]
        ],
        "animations": {
            "charging": {
                frames: [0, 1, 2, 3, 4, 5],
                speed: constants.ANIMATION_TIME
            },
            "dieing": {
                frames: [6, 7, 8, 9],
                next: "dead",
                speed: constants.ANIMATION_TIME
            },
            "dead": {
                frames: [9]
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
        public static player: createjs.SpriteSheet;
        public static triceratops: createjs.SpriteSheet;
        public static energytank: createjs.SpriteSheet;
        public static missile: createjs.SpriteSheet;

        public static audio = [];

        public static playSound(location: string, volume: number, loop: boolean) {
            var sound = document.createElement('audio');
            var source = document.createElement('source');
            var id = this.audio.length;
            console.log(id);

            source.src = location;
            sound.appendChild(source);

            this.audio[id] = sound;
            this.audio[id].volume = volume;
            this.audio[id].loop = loop;
            this.audio[id].play();
        }

        public static killSounds() {
            for (var i = 0; i < this.audio.length; i++) {
                this.audio[i].pause();
            }
            this.audio = [];
        }

        public static init() {
            createjs.Sound.initializeDefaultPlugins();

            this.loader = new createjs.LoadQueue();
            this.loader.on("progress", states.loadingState, this);
            this.loader.on("complete", states.loadingUnload, this);

            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            
            this.player = new createjs.SpriteSheet(sideScrollingPlayerSheetData);
            this.triceratops = new createjs.SpriteSheet(triceratopsSheetData);
        }
    }
} 