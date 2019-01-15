document.addEventListener("DOMContentLoaded", function () {

    //create a new Image object and specify the source
    let spriteSheet = new Image();
    spriteSheet.src = "../images/t1.png";

    let thanosSheet = new Image();
    thanosSheet.src = '../Images/e.png';
    
    let countThor = 500;
    let countThanos = 498;

    //define sprite class
    function sprite(options) {

        let that = {},
            frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1,
            dx1 = options.dx1 || 0,
            dy = options.dy || 0,
            dx2 = options.dx2 || 0;

        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.loop = options.loop;

        that.update = function () {
            tickCount += 10;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };

        that.move = function() {
            dx1 += countThor;
            if (dx1 === 8000) {
                dx1 = 0;
            }
            dx2 += countThanos;
            if (dx2 === 6720) {
                dx2 = 0;
            }
        };

        that.render = function (destX, destY) {

            // Clear the canvas
            // that.context.clearRect(0, 0, that.width, that.height);

            // Draw the animation
            that.context.drawImage(
                that.image,
                dx1,
                dy,
                that.width / numberOfFrames,
                that.height,
                destX,
                destY,
                that.width / numberOfFrames,
                that.height);
            };

        return that;
        }

    var canvas = document.getElementById("thorAnimation");
    canvas.width = 1000;
    canvas.height = 1000;

    var thor = new sprite({
        context: canvas.getContext("2d"),
        width: 8000,
        height: 500,
        image: spriteSheet,
        numberOfFrames: 16
    });

    var thano = new sprite({
        context: canvas.getContext("2d"),
        width: 6720,
        height: 240,
        image: thanosSheet,
        numberOfFrames: 19
    });

    function gameLoop() {
        // debugger
        canvas.getContext('2d').clearRect(0, 0, 1000, 1000);
        
        thor.update();
        thano.update();
        thor.move();
        thano.move();
        thor.render(0, 0);
        thano.render(560, 100);
        window.requestAnimationFrame(gameLoop);
    }

    spriteSheet.addEventListener("load", gameLoop);
    thanosSheet.addEventListener("load", gameLoop);

});