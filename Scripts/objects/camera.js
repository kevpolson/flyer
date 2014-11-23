var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Camera Class
    var Camera = (function (_super) {
        __extends(Camera, _super);
        function Camera(stage, game, player) {
            _super.call(this);
            this.stage = stage;
            this.game = game;
            this.player = player;

            this.addChild(this.player);
            this.game.addChild(this);
        }
        Camera.prototype.update = function () {
            this.x = -player.x + stage.canvas.width * 0.5;
            this.y = -player.y + stage.canvas.height * 0.5;
        };
        return Camera;
    })(createjs.Container);
    objects.Camera = Camera;
})(objects || (objects = {}));
//# sourceMappingURL=camera.js.map
