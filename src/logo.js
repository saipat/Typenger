window.onload = function () {


    var spriteSheet = new Image();
    spriteSheet.src = "../images/logo.png";

    //define sprite class
    function sprite(options) {

        var that = {},
            frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1;

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
                    // Go to the next frame
                    frameIndex += 0;
                } else {
                    frameIndex = 0;
                }
            }
        };

        that.render = function () {

            // Clear the canvas
            that.context.clearRect(0, 0, that.width, that.height);

            // Draw the animation
            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width / numberOfFrames,
                that.height,
                0,
                0,
                that.width / numberOfFrames,
                that.height);
        };


        return that;
    }

    var canvas = document.getElementById("coinAnimation");
    canvas.width = 300;
    canvas.height = 200;

    var coin = new sprite({
        context: canvas.getContext("2d"),
        width: 2000,
        height: 2000,
        image: spriteSheet,
        numberOfFrames: 10
    });

    function gameLoop() {
        coin.update();
        coin.render();
        window.requestAnimationFrame(gameLoop);
    }

    spriteSheet.addEventListener("load", gameLoop);
};