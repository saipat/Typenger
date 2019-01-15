import ScoreBoard from './score_board';
import Word from './word';
import Timer from './timer';

 class Game {
    constructor() {
        this.word = new Word();
        this.timer = new Timer();
        this.scoreBoard = new ScoreBoard(this.word.wordsLength());
        this.wordToDisplay = '';
        this.wordInputEl = document.querySelector('#word-input');
        // this.canvasEl = document.querySelector('#thorAnimation');

        this.wordInputEl.addEventListener("keyup", (e) => {
            // Number 13 is the "Enter" key on the keyboard
            if (e.keyCode === 13) {
                console.log("e ----> ", e);
                this.timer.stop();
                this.compareWords();
            }
        });
    }

    play() {
        this.wordInputEl.value = '';
        
        this.wordToDisplay = this.word.pickEasyWord();
        if (!this.wordToDisplay) {
            this.scoreBoard.updateBoard();
            return;
        } else {
            document.querySelector('#current-word').innerHTML = this.wordToDisplay;
        }

        this.timer.start(() => {
            this.compareWords();
        });

        if(this.scoreBoard.updateBoard()) {
            this.timer.stop();
        }
    }

    compareWords() {
        if (this.wordInputEl.value.toLowerCase() === this.wordToDisplay.toLowerCase()) {
            this.scoreBoard.incThor();
        } else {
            //change the input color to red.
            this.scoreBoard.incThanos();
        }
        this.play();
    }

    stop() {
        this.timer.stop();
        this.scoreBoard.reset();
        this.wordInputEl.value = '';
    }

    // showThor() {
    //     console.log("has won ======> ", this.scoreBoard.isWon());
    //     if (this.scoreBoard.isWon() === 'Thor') {
    //         this.canvasEl.className.replace('hidden', '');
    //     }
    // }

}


export default Game;