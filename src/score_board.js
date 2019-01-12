import Game from './game';

 class ScoreBoard{
    construtor() {
        this.thor_score = 0;
        this.thanos_score = 0;
    }

    thorScore() {

    }

    thanosScore() {

    }

    isWon() {
        //determine the winner by comparing the lives left
        //call display message
        if(this.thorScore < this.thanosScore) {
            //winner is Thanos
        } else {
            //winner is Thor
        }
    }

    displayMessage() {
        //display winning or loosing message.
    }
}
export default ScoreBoard;