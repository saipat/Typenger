import Game from './game';

 class ScoreBoard{
    constructor(totalWords) {
        this.thorScore = 0;
        this.thanosScore = 0;
        this.totalWords = totalWords;
        this.thorScoreEl = document.querySelector('#thor-score');
        this.thanosScoreEl = document.querySelector('#thanos-score');
        this.winnerEl = document.querySelector('#isWon-message');
        this.canvasEl = document.querySelector('#thorAnimation');
        this.winningScore = (this.totalWords / 2);
    }

    incThor() {
        this.thorScore += 1;
        this.thorScoreEl.innerHTML = this.thorScore;
    }

    incThanos() {
        this.thanosScore += 1;
        this.thanosScoreEl.innerHTML = this.thanosScore;
    }

    isWon() {
        // console.log("this ===> ", this);
        if (this.thorScore > this.winningScore) {
             return 'Thor';
        } else if (this.thanosScore > this.winningScore) {
            return 'Thanos';
        } else if (this.thorScore === this.winningScore && this.thanosScore ===     this.winningScore) {
            console.log("It;s a tie");
            return 'Tie';
        } else if (this.thorScore <= this.winningScore && this.thanosScore <=                   this.winningScore) {
            return '';
        }
    }

    updateBoard() {
        let win = this.isWon();
        // console.log("Winner Winner", win);
        let hasWinner = false;        
        if (win === 'Thor') {
            this.winnerEl.innerHTML = 'Congratulations Thor! You saved the world!';
            hasWinner = true;
        } else if (win === 'Thanos') {
            this.winnerEl.innerHTML = 'You Loose! You should have aimed for the head!';
            hasWinner = true;
        } else if (win === 'Tie') {
            this.winnerEl.innerHTML = 'It is a Tie. You both Sucks!';
            hasWinner = true;
        } else {
            this.winnerEl.innerHTML = '';
        }
        return hasWinner;
    }

    reset() {
        this.thorScore = 0;
        this.thanosScore = 0;
        this.thorScoreEl.innerHTML = 0;
        this.thanosScoreEl.innerHTML = 0;
        this.winnerEl.innerHTML = '';
    }

}
export default ScoreBoard;