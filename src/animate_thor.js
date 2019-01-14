document.addEventListener("DOMContentLoaded", function () {

    //create a new Image object and specify the source
    let spriteSheet = new Image();
    spriteSheet.src = "../images/t3.png";
    
    let dx = 0;

    //define sprite class
    function sprite(options) {

        let that = {},
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
                    // Go to the next frame
                    frameIndex += 1;
                    dx += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };

        that.updateSquares = function() {

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
                dx,
                0,
                that.width / numberOfFrames - 100,
                that.height);
        };

        return that;
    }

    var canvas = document.getElementById("thorAnimation");
    canvas.width = 1000;
    canvas.height = 1000;

    var thor = new sprite({
        context: canvas.getContext("2d"),
        width: 4400,
        height: 1000,
        image: spriteSheet,
        numberOfFrames: 12
    });

    function gameLoop() {
        thor.update();
        thor.render();
        window.requestAnimationFrame(gameLoop);
    }

    spriteSheet.addEventListener("load", gameLoop);

});