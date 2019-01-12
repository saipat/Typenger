import ScoreBoard from './score_board';
import Play from './play';

export default class Game {
    constructor() {
        this.isPlaying = false;
        this.noOfErrors = 0;
        this.correctTypes = 0;
        this.time = 10;

        this.easyWords = [
            "Bottle", "Coffee", "Meanwhile", "Dianosur", "Pineapple", "Terrorist", "Acieve", "Retrive", "Opposite", "Significantly", "Treacherous", "Environment", "Immediately", "Independent"
        ];

        this.toughWords = [
            "Santa's", "Abrogate", "Accomodate", "Indict", "Cementry", "Embarass", "Convalesce", "Carrabian", "Abnegation"
        ];
    }

    pickEasyWord() {
        const randomIndex = Math.floor(Math.random() * this.easyWords.length);
        return this.easyWords[randomIndex];
    }


    pickToughWord() {
        const randomIndex = Math.floor(Math.random() * this.toughWords.length);
        return this.toughWords[randomIndex];
    }

    init() {
        const game = document.querySelector('div.game');

    }

}
