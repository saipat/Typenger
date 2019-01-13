import Game from './game';

 class ScoreBoard{
    constructor(totalWords) {
        this.thorScore = 0;
        this.thanosScore = 0;
        this.totalWords = totalWords;
        this.thorScoreEl = document.querySelector('#thor-score');
        this.thanosScoreEl = document.querySelector('#thanos-score');
        this.winnerEl = document.querySelector('#isWon-message');
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
         if (this.thorScore > this.winningScore) {
            return 'Thor';
         } else if (this.thanosScore > this.winningScore) {
            return 'Thanos';
         } else if (this.thorScore <= this.winningScore && this.thanosScore <= this.winningScore) {
            return '';
         }else if (this.thorScore === this.thanosScore){
            return 'Tie';
         } 
    }

    updateBoard() {
        let win = this.isWon();
        let hasWinner = false;
        console.log('hi');

        if (win === 'Thor') {
            this.winnerEl.innerHTML = 'Congratulations Thor! you saved the world.';
            hasWinner = true;
        } else if (win === 'Thanos') {
            this.winnerEl.innerHTML = 'Sorry! You Loose!';
            hasWinner = true;
        } else if (win === 'Tie') {
            this.winnerEl.innerHTML = 'It is a Tie. You both Sucks!';
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