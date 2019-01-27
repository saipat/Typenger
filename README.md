# Typenger - A JavaScript Project

### Typenger

Typenger is a JavaScript game which helps you to increase your typing speed through a fun interactive way. Typing fast is one of the essential skills for the software professionals.

With the help of Typenger, you will pick up typing speed without making any typos. The words that Typenger gives you are repetitive through which you will learn to type faster without making mistakes, subconciously.

This game is inspired by TypeRacer and Avengers.

![Imgur](https://i.imgur.com/PiWKBH8.png)

### Functionality

* Players type a word seen on the screen. 
* For every correct word thay type, Thor will gain one point and vice versa.
* Set the timer. Give them 1 or 2 words in  every 5 seconds.
* The game ends if one of them wins or it's tie.

### Wireframes

![Imgur](https://i.imgur.com/U0QBynU.png)

### Technologies Employed

* Vanilla Javascript for the game logic.
* WepAudio Api for the background music.
* Canvas and Sprites for rendering the characters.
* Webpack to bundle various scripts into a single source.

### Features

- [ ] Generate random words that player can type.
- [ ] Start and stop buttons.
- [ ] Basic visuals and an interactive interface.
- [ ] Determine the winner.
- [ ] Write instructions on how to play the game.
- [ ] Background music.

![Imgur](https://i.imgur.com/IpMNpdr.png)

For Animation:

```JS
 <canvas id="thorAnimation" class="thor-animation hidden">
 </canvas>
 
  that.render = function (destX, destY) {
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
    canvas.width = 1200;
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
        width: 7700,
        height: 500,
        image: thanosSheet,
        numberOfFrames: 20
    });
        
```

Added event listeners for sound.

```JS
 <script src="./src/sound.js"></script>

let audio = document.querySelector('audio');
    let play = document.querySelector('.play');    

    audio.addEventListener('play', playTrack);
    audio.addEventListener('pause', pauseTrack);

    play.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playTrack();
        } else {
            audio.pause();
            pauseTrack();
        }
    });

    audio.addEventListener('ended', () => {
        pauseTrack();
    });
    

    

