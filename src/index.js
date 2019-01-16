import Game from './game';
import ScoreBoard from './score_board';
import Level from './levels';

// window.addEventListener("load", function (event) {
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    let game = null;

    const startButton = document.getElementById('start-btn');
    const stopButton = document.getElementById('stop-btn');    
    const canvas = document.getElementById('thorAnimation');
    const wordInput = document.getElementById('word-input');
    const showOnStart = document.querySelector('#showOnStart');
    

    startButton.addEventListener('click', function (event) {    
        // event.target.innerText
        if(!game){
            game = new Game();
        }        
        showOnStart.className = showOnStart.className.replace('hidden', '');
        wordInput.focus();
        canvas.className = canvas.className.replace('hidden', '');

        let audio = document.querySelector('audio');
        audio.play();

        game.play();
    });

    stopButton.addEventListener('click', function() {
        game.stop();
        game = null;
        showOnStart.className += ' hidden';
        canvas.className += ' hidden';
    });

});