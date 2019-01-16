import ScoreBoard from './score_board';
import Word from './word';
import Timer from './timer';

 class Game {
    constructor() {
        this.word = new Word();
        this.timer = new Timer();
        this.scoreBoard = new ScoreBoard(this.word.wordsLength());
        this.scoreBoard.reset();
        this.wordToDisplay = '';
        this.wordInputEl = document.querySelector('#word-input');
        this.currentWordEl = document.querySelector('#current-word');        
        this.wordInputEl.onkeyup = (e) => {
            // Number 13 is the "Enter" key on the keyboard
            if (e.keyCode === 13) {
                console.log('Stopping Timer on Enter');
                this.timer.stop();
                this.compareWords();
            }
        };
        
        this.gameEl = document.getElementById('game');
    }

    play() {
        this.wordInputEl.value = '';        
        this.wordToDisplay = this.word.pickEasyWord();
        if (!this.wordToDisplay) {
            this.scoreBoard.updateBoard();
            return;
        } else {
            this.currentWordEl.innerHTML = this.wordToDisplay;
        }

        this.timer.start(() => {
            this.compareWords();
        });

        if(this.scoreBoard.updateBoard()) {
            console.log('Stopping Timer');
            this.timer.stop();
            this.gameEl.dispatchEvent(new Event('gamecomplete'));
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
        this.wordInputEl.value = '';
        this.currentWordEl.innerHTML = '';
        delete this.scoreBoard;
    }

    // showThor() {
    //     console.log("has won ======> ", this.scoreBoard.isWon());
    //     if (this.scoreBoard.isWon() === 'Thor') {
    //         this.canvasEl.className.replace('hidden', '');
    //     }
    // }

}


export default Game;