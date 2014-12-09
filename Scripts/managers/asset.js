/// <reference path="../states/loading.ts" />
var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "bgMusic", src: "assets/sounds/UnderTheClouds.mp3" },
        { id: "background", src: "assets/images/background.png" }
    ];

    var sideScrollingPlayerSheetData = {
        "images": ["assets/images/sideScrollingPlayer.png"],
        "frames": [
            [1, 1, 36, 59],
            [38, 1, 36, 57],
            [75, 1, 36, 56],
            [112, 1, 36, 57],
            [149, 1, 36, 59],
            [186, 1, 36, 57],
            [223, 1, 36, 56],
            [260, 1, 36, 57],
            [1, 61, 37, 53],
            [39, 61, 43, 60],
            [84, 61, 53, 60],
            [137, 61, 46, 51],
            [185, 61, 39, 52],
            [224, 61, 41, 59],
            [266, 61, 50, 51],
            [317, 61, 46, 52],
            [1, 122, 59, 52],
            [61, 122, 50, 53],
            [112, 122, 70, 53],
            [183, 122, 64, 51],
            [248, 122, 50, 53],
            [299, 122, 65, 51],
            [1, 176, 41, 49],
            [43, 176, 45, 47],
            [89, 176, 41, 51],
            [131, 176, 30, 70],
            [162, 176, 33, 67],
            [196, 176, 33, 69],
            [230, 176, 33, 69],
            [264, 176, 42, 62]
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
    };

    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();

            this.loader = new createjs.LoadQueue();
            this.loader.on("progress", states.loadingState, this);
            this.loader.on("complete", states.loadingUnload, this);

            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);

            this.player = new createjs.SpriteSheet(sideScrollingPlayerSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
