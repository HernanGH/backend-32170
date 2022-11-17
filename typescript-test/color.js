"use strict";
var RgbColorGenerator = /** @class */ (function () {
    function RgbColorGenerator() {
    }
    RgbColorGenerator.prototype.generate = function () {
        var max = 256;
        var min = 0;
        var red = Math.floor(Math.random() * (max - min)) + min;
        var green = Math.floor(Math.random() * (max - min)) + min;
        var blue = Math.floor(Math.random() * (max - min)) + min;
        return "RGB (" + red + "," + green + "," + blue + ")";
    };
    return RgbColorGenerator;
}());
var rgbColorGenerator = new RgbColorGenerator();
var color = rgbColorGenerator.generate();
console.log({ color: color });
