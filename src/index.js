import Game from './game';
import ScoreBoard from './score_board';
import Level from './levels';

// window.addEventListener("load", function (event) {
document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM fully loaded and parsed");

    let game = null;

    const startButton = document.getElementById('start-btn');
    const stopButton = document.getElementById('stop-btn');

    let count = 2;

    startButton.addEventListener('click', function (event) {
        // var interval = setInterval(function () {
        //     console.log(--count);
        //     if (count === 1) {
        //         clearInterval(interval);

        //         const showOnStart = document.querySelector('#showOnStart');

        //         if (showOnStart.className.includes('hidden')) {
        //             showOnStart.className = showOnStart.className.replace('hidden', '');
        //         }
        //         count = 2;
        //     }
        // }, 400);
        if(!game){
            game = new Game();
        }
        const showOnStart = document.querySelector('#showOnStart');
        showOnStart.className = showOnStart.className.replace('hidden', '');

        game.play();

    });

    stopButton.addEventListener('click', function() {
        game.stop();
        game = null;
        showOnStart.className += ' hidden';
    });

});


