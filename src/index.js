import Game from './game';
import ScoreBoard from './score_board';
import Level from './levels';

// window.addEventListener("load", function (event) {
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    let game = null;

    const gameButton = document.getElementById('game-btn');
    // const stopButton = document.getElementById('stop-btn');    
    const canvas = document.getElementById('thorAnimation');
    const wordInput = document.getElementById('word-input');
    const showOnStart = document.querySelector('#showOnStart');
    const audio = document.querySelector('audio');
    const gameEl = document.getElementById('game');

    function doStart() {
        if (!game) {            
            game = new Game();
            console.log("Created Game", game);
        }
        showOnStart.className = showOnStart.className.replace('hidden', '');
        canvas.className = canvas.className.replace('hidden', '');
        wordInput.disabled = false;
        wordInput.focus();
        if (audio.paused) {
            audio.play();
        }
        game.play();
    }

    function doStop() {
        game.stop();
        game = null;
        showOnStart.className += ' hidden';
        canvas.className += ' hidden';
        wordInput.disabled = true;
    }

    gameButton.addEventListener('click', function (event) {
        var buttonText = event.target.innerText;

        if (buttonText === 'Start') {
            doStart();
            event.target.innerText = 'Stop';
        }

        if (buttonText === 'Stop') {
            doStop();
            event.target.innerText = 'Start';
        }        
    });

    gameEl.addEventListener('gamecomplete', (event) => {
        // game is complete, no need to "stop" it
        console.log("Game Complete");        
        game = null;
        canvas.className += ' hidden';
        wordInput.disabled = true;
        gameButton.innerText = 'Start';
    });
});