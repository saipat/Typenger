class Word {
    constructor() {
        this.pickedWords = [];

        this.easyWords = [
            "Bottle", "Coffee", "Meanwhile", "Dianosur", "Pineapple", "Terrorist", "Acieve", "Retrive", "Opposite", "Significantly"
        ];

        this.length = this.easyWords.length;

        this.toughWords = [
            "Santa's", "Abrogate", "Accomodate", "Indict", "Cementry", "Embarass", "Convalesce", "Carrabian", "Abnegation","Treacherous", "Environment", "Immediately", "Independent"
        ];
    }

    pickEasyWord() {
        let randomIndex = Math.floor(Math.random() * this.easyWords.length);
        let word = this.easyWords[randomIndex];
        this.easyWords.splice(this.easyWords.indexOf(word), 1); 
        return word;
    }

    wordsLength() { 
        return this.length;
    }

    pickToughWord() {
        const randomIndex = Math.floor(Math.random() * this.toughWords.length);
        return this.toughWords[randomIndex];
    }


}


export default Word;