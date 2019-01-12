document.addEventListener("DOMContentLoaded", function () {
    // window.onLoad = function(){

    //create a new Image object and specify the source
    var thorSheet = new Image();
    thorSheet.src = "../images/t2.png";
    var count = 3;

    function thorSprite(options) {
        var that = {},
            frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1,
            dx = options.dx || 0;

        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.loop = options.loop;

        that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {
                    frameIndex += 1;
                    dx += count;
                }
                // if (dx === 1000) {
                //      dx = 0;
                // }
                // } else {
                //      frameIndex = 0;
                // }
            }
        };

        //Add the width to the destination x every time and keep the height the same.
        // that.moveSquares = function () {
        //         x += 378;
        // };

        that.render = function () {

            // Clear the canvas
            that.context.clearRect(0, 0, that.width, that.height);

            // Draw the animation
            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width,
                that.height,
                0,
                0,
                that.width / numberOfFrames - 2,
                that.height);
        };

        return that;
    }

    var canvas = document.getElementById("ThorAnimation");
    canvas.width = 700;
    canvas.height = 300;

    var thor = new thorSprite({
        context: canvas.getContext("2d"),
        width: 5000,
        height: 300,
        image: thorSheet,
        numberOfFrames: 5
    });


    function showThor() {
        thor.update();
        thor.render();
        window.requestAnimationFrame(showThor);
    }

    thorSheet.addEventListener("load", showThor);
});

console.log("hi");