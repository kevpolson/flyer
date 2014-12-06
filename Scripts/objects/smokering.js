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
        function smokeRing(gameIndex, newAltitude, newRadius) {
            _super.call(this);
            this.radius = newRadius;
            this.altitude = newAltitude;
            this.graphics.setStrokeStyle(0.25).beginStroke("yellow").drawCircle(0, 0, this.radius);
            this.x = 200;
            this.y = 200;

            //this.regX =
            game.addChildAt(this, gameIndex);
        }
        smokeRing.prototype.update = function (currentAlitude, motionX, motionY) {
            if (currentAlitude <= this.altitude) {
                this.scaleX += 0.25;
                this.scaleY += 0.25;
            }
            this.x += motionX;
            this.y += motionY;
        };
        return smokeRing;
    })(createjs.Shape);
    objects.smokeRing = smokeRing;
})(objects || (objects = {}));
//# sourceMappingURL=smokering.js.map
