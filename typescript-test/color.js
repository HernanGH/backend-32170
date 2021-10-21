var RgbColor = /** @class */ (function () {
    function RgbColor() {
    }
    RgbColor.prototype.create = function () {
        var max = 256;
        var min = 0;
        var red = Math.floor(Math.random() * (max - min)) + min;
        var green = Math.floor(Math.random() * (max - min)) + min;
        var blue = Math.floor(Math.random() * (max - min)) + min;
        return "RGB (" + red + "," + green + "," + blue + ")";
    };
    return RgbColor;
}());
var main = new RgbColor();
var color = main.create();
console.log({ color: color });
