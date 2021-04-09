import Player from "./player.js"

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

export default class Lottery {
    constructor(people) {
        this.people = people;
        this.players = [];
        this.WinningCombination = [];
    }
    getLotteryNumbers() {
        let lotteryNumbers = [];
        while (lotteryNumbers.length < 4)
            lotteryNumbers.push(Math.floor(Math.random()*7) + 1);
        lotteryNumbers.sort();
        return lotteryNumbers;
    }
    generatePlayers() {
        for (person in people)
        {
            players.push(new Player(person.name, person.surname, getLotteryNumbers()));
        }
    }
    getWinningCombination() {

    }
}