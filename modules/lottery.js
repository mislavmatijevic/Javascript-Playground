import Player from "./player.js"

export default class Lottery {
    constructor(people) {
        this.people = people;
        this.players = [];
        this.winningCombination = [];
    }

    getLotteryNumbers() {
        let lotteryNumbers = [];
        while (lotteryNumbers.length < 4)
            lotteryNumbers.push(Math.floor(Math.random()*7) + 1);
        lotteryNumbers.sort();
        return lotteryNumbers;
    }

    generatePlayers() {
        for (person in this.people)
        {
            this.players.push(new Player(person.name, person.surname, getLotteryNumbers()));
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
                } else {
                    reject(result);
                }
            }, 2000);
        });
    }
}