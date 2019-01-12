import Game from './game';

export default class ScoreBoard extends Game {
    construtor() {
        this.thor_score = 0;
        this.thanos_score = 0;
    }

    isWon() {
        //determine the winner by comparing the lives left
        //call display message
    }

    displayMessage() {
        //display winning or loosing message.
    }
}