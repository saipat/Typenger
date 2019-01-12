class Word {
    constructor() {
        this.easyWords = [
            "Bottle", "Coffee", "Meanwhile", "Dianosur", "Pineapple", "Terrorist", "Acieve", "Retrive", "Opposite", "Significantly", "Treacherous", "Environment", "Immediately", "Independent"
        ];

        this.toughWords = [
            "Santa's", "Abrogate", "Accomodate", "Indict", "Cementry", "Embarass", "Convalesce", "Carrabian", "Abnegation"
        ];
    }

    pickEasyWord() {
        let pickedWords = [];
        let randomIndex = Math.floor(Math.random() * this.easyWords.length);
        
        //check if the random word id already picked
        let word = this.easyWords[randomIndex];
        console.log("word===>>>", word);
        if (pickedWords.includes(word)) {
            
            randomIndex = Math.floor(Math.random() * this.easyWords.length);
            word = this.easyWords[randomIndex];
        }

        pickedWords.push(word);

        return word;
    }


    pickToughWord() {
        const randomIndex = Math.floor(Math.random() * this.toughWords.length);
        return this.toughWords[randomIndex];
    }


}


export default Word;