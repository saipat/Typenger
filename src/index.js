import Game from './game';
import ScoreBoard from './score_board';
import Play from './play';
import Level from './levels';

// window.addEventListener("load", function (event) {
document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM fully loaded and parsed");

    const game = new Game();
    // console.log(game.pickEasyWord());

    const playButton = document.getElementById('play-btn');
    const instructions = document.querySelector('p.instructions');
    const startButton = document.getElementById('start-btn');
    const playerInput = document.querySelector('#word-input');
    const currentWOrd = document.querySelector('#current-word');
    const thorScore = document.querySelector('#thor-score');
    const thanosScore = document.querySelector('#thanos-score');
    const timeDisplay = document.querySelector('#time-left');

    playButton.addEventListener('click', function (event) {
        if (instructions.className.includes('hidden')) {
            instructions.className = instructions.className.replace('hidden', '');
        } else {
            instructions.className += 'hidden';
        }
    });

    let count = 2;

    startButton.addEventListener('click', function (event) {
        var interval = setInterval(function () {
            console.log(--count);
            if (count === 1) {
                clearInterval(interval);

                const showOnStart = document.querySelector('#showOnStart');

                if (showOnStart.className.includes('hidden')) {
                    showOnStart.className = showOnStart.className.replace('hidden', '');
                }
                count = 2;
            }
        }, 400);

        game.play();
        
    });


    // logo.addEventListener('click', function (event) {
    //     console.log(event);

    //     if (animation.className.includes('hidden')) {
    //         animation.className = animation.className.replace('hidden', '');
    //     } else {
    //         animation.className += 'hidden';
    //     }
    // });


});
