import Player from "./player.js"

export default class Lottery {
    constructor(people) {
        this.people = people;
        this.players = [];
        this.winningCombination = [];
    }

    getLotteryNumbers() {
        const lotteryNumbers = [];
        while (lotteryNumbers.length < 4)
        {            
            const number = Math.floor(Math.random()*7) + 1;
            if (lotteryNumbers.indexOf(number) === -1) {
                lotteryNumbers.push(number);
            }
        }
        lotteryNumbers.sort();
        return lotteryNumbers;
    }

    generatePlayers() {

        if (!this.players.length) // If there are no players, fill 'em. Otherways, don't waste time.
        {
            this.people.map(person => {
                this.players.push(new Player(person.name, person.surname, this.getLotteryNumbers()));
            });
        }
    }

    getwinningCombination() {
        this.winningCombination = this.getLotteryNumbers();
    }

    startDrawing() {
        this.generatePlayers();
        this.getwinningCombination();

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const winners = this.players
                    .filter(player => player.lotteryNumbers
                        .every((val, index) => val === this.winningCombination[index]));

                const result = {
                    winningCombination: this.winningCombination,
                    winners
                };                
                
                if (winners.length > 0) {
                    resolve(result);
                }else {
                    reject(result);
                }
            }, 250); // Made it a bit faster.
        });
    }
}