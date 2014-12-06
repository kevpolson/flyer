var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
        }
        Collision.inCircle = function (x, y, centreX, centreY, radius) {
            return Math.pow(x - centreX, 2) + Math.pow(y - centreY, 2) < Math.pow(radius, 2);
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
