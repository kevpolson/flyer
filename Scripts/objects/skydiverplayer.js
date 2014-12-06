var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var skyDiverPlayer = (function (_super) {
        __extends(skyDiverPlayer, _super);
        function skyDiverPlayer(game, screenWidth, screenHeight) {
            _super.call(this, game, managers.Assets.skyPlayer, "falling");
            this.scaleX = 3;
            this.scaleY = 3;
            this.x = screenWidth * 0.5 - this.regX;
            this.y = screenHeight * 0.5 - this.regY;
        }
        skyDiverPlayer.prototype.update = function (player) {
        };
        return skyDiverPlayer;
    })(objects.GameObject);
    objects.skyDiverPlayer = skyDiverPlayer;
})(objects || (objects = {}));
//# sourceMappingURL=skydiverplayer.js.map
