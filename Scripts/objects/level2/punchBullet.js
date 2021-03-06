﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var punchBullet = (function (_super) {
        __extends(punchBullet, _super);
        function punchBullet(game, newX, newY, currentDirection) {
            _super.call(this);
            this.direction = currentDirection;
            this.timer = 0;

            var startAngle = 345 * Math.PI / 180;
            var endAngle = 15 * Math.PI / 180;
            var anticlockwise = false;
            if (this.direction === constants.FACING_LEFT) {
                startAngle = 195 * Math.PI / 180;
                endAngle = 165 * Math.PI / 180;
                anticlockwise = true;
            }

            this.graphics.moveTo(0, 0);
            this.graphics.beginFill(constants.COLOR_ORANGE).arc(0, 0, 15, startAngle, endAngle, anticlockwise);
            this.x = newX;
            this.y = newY;

            this.life = constants.BULLET_LIFE;

            this.objectIndex = game.children.length;
            game.addChildAt(this, this.objectIndex);
            this.destroyed = false;
        }
        //update the bullet
        punchBullet.prototype.update = function () {
            this.x += this.direction * constants.GAME_SPEED * 3;
            if (this.timer++ >= this.life) {
                this.destroy();
            }
        };

        //destroy the bullet
        punchBullet.prototype.destroy = function () {
            game.removeChild(this);
            this.destroyed = true;
        };
        return punchBullet;
    })(createjs.Shape);
    objects.punchBullet = punchBullet;
})(objects || (objects = {}));
//# sourceMappingURL=punchbullet.js.map
