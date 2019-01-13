import Game from './game';

 class ScoreBoard{
    constructor(totalWords) {
        this.thorScore = 0;
        this.thanosScore = 0;
        this.totalWords = totalWords;
        this.thorScoreEl = document.querySelector('#thor-score');
        this.thanosScoreEl = document.querySelector('#thanos-score');
        this.winner = document.querySelector('#isWon-message');
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
         } else if (this.thorScore < this.winningScore && this.thanosScore < this.winningScore) {
            return '';
         }else if (this.thorScore === this.thanosScore){
            return 'Tie';
         } 
     }

    displayMessage() {
        if (this.isWon() === 'Thor'){
            this.winner.innerHTML = 'Congratulations Thor! you saved the word.';
        } else if (this.isWon() === 'Thanos') {
            this.winner.innerHTML = 'Its your fault! You should have aimed for the head!';
        } else if (this.isWon() === 'Tie') {
            this.winner.innerHTML = 'It is a Tie. You both Sucks!';
        } else {
            this.winner.innerHTML = '';
        }
    }
}
export default ScoreBoard;