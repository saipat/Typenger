document.addEventListener("DOMContentLoaded", function () {

    //create a new Image object and specify the source
    let spriteSheet = new Image();
    spriteSheet.src = "../images/t1.png";

    // let thanosSheet = new Image();
    // thanosSheet.src = '../Images/thanos.png';
    
    let countThor = 500;
    // let countThanos = 498;

    //define sprite class
    function sprite(options) {

        let that = {},
            frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1,
            dx1 = options.dx1 || 0;
            // dx2 = options.dx2 || 0;

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
            // dx2 += countThanos;
            // if (dx2 === 9455) {
            //     dx2 = 0;
            // }
        };

        that.render = function () {

            // Clear the canvas
            that.context.clearRect(0, 0, that.width, that.height);

            // Draw the animation
            that.context.drawImage(
                that.image,
                dx1,
                0,
                that.width / numberOfFrames,
                that.height,
                0,
                0,
                that.width / numberOfFrames,
                that.height);
            };
            // that.context.drawImage(
            //     that.image,
            //     dx2,
            //     0,
            //     that.width / numberOfFrames,
            //     that.height,
            //     0,
            //     0,
            //     that.width / numberOfFrames,
            //     that.height);
            // };

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

    // var thano = new sprite({
    //     context: canvas.getContext("2d"),
    //     width: 9455,
    //     height: 485,
    //     image: thanosSheet,
    //     numberOfFrames: 19
    // });

    function gameLoop() {
        thor.update();
        // thano.update();
        thor.move();
        // thano.move();
        thor.render();
        // thano.render();
        window.requestAnimationFrame(gameLoop);
    }



    spriteSheet.addEventListener("load", gameLoop);

});