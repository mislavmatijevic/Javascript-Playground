export class Player {
    constructor(name, surname, lotteryNumbers)
    {
        this.name = name;
        this.surname = surname;
        this.lotteryNumbers = lotteryNumbers;
    }
    getPlayerDetails = function()
    {
        return `${this.name} ${this.surname} [${this.lotteryNumbers.toString()}]`;
    }
}