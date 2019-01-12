import ScoreBoard from './score_board';
import Play from './play';
import Word from './words';
import Timer from './timer';

 class Game {
    constructor() {
        this.word = new Word();
        this.timer = new Timer();
        this.scoreBoard = new ScoreBoard();
    }

    play() {
        let wordToDisplay = this.word.pickEasyWord();
        console.log("pickEasyWord =====>>>> ", wordToDisplay);
    }

    

    init() {
        const game = document.querySelector('div.game');

    }

}


export default Game;