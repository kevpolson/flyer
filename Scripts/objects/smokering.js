var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var smokeRing = (function (_super) {
        __extends(smokeRing, _super);
        function smokeRing(gameIndex) {
            _super.call(this);
            this.graphics.setStrokeStyle(5).beginStroke("yellow").drawCircle(0, 0, 50);
            game.addChildAt(this, gameIndex);
        }
        return smokeRing;
    })(createjs.Shape);
    objects.smokeRing = smokeRing;
})(objects || (objects = {}));
//# sourceMappingURL=smokering.js.map
