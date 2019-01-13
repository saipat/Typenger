import ScoreBoard from './score_board';
import Play from './play';
import Word from './word';
import Timer from './timer';
import { log } from 'util';

 class Game {
    constructor() {
        this.word = new Word();
        this.timer = new Timer();
        this.scoreBoard = new ScoreBoard(this.word.wordsLength());
        this.wordToDisplay = '';
        this.inputEvent = document.querySelector('#word-input');

        this.inputEvent.addEventListener("keyup", (e) => {
            // Number 13 is the "Enter" key on the keyboard
            if (e.keyCode === 13) {
                console.log("e ----> ", e);
                this.timer.stop();
                this.compareWords();
            }
        });
    }

    play() {
        this.inputEvent.value = '';
        this.wordToDisplay = this.word.pickEasyWord();
        if (!this.wordToDisplay) {
            this.scoreBoard.displayMessage();
            return;
        } else {
            document.querySelector('#current-word').innerHTML = this.wordToDisplay;
        }
        this.timer.start(() => {
            console.log("Timer Done");
            this.compareWords();
        });  
    }

    showCurrentWord() {
        
    }

    compareWords() {
        if (this.inputEvent.value === this.wordToDisplay) {
            this.scoreBoard.incThor();
        } else {
            //change the input color to red.
            this.scoreBoard.incThanos();
        }
        this.play();
    }

    init() {
        const game = document.querySelector('div.game');

    }

}


export default Game;