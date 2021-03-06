import Lottery from "./modules/lottery.js"
import {politicians, folk} from "./data/data.js"

const buttonStartEl = document.querySelector(".button-start-lottery");
const lotteryResultsEl = document.querySelector(".lottery-results");
const winningCombinationEl = document.querySelector(".winning-combination");
const winnersMessageEl = document.querySelector(".winners-message");
const winnersEl = document.querySelector(".winners");

const lottery = new Lottery(politicians);

buttonStartEl.addEventListener("click", () => {
    buttonStartEl.disabled = true;
    buttonStartEl.innerHTML = "Lottery drawing in progress... ";
    winnersEl.innerHTML = "";
    lotteryResultsEl.style.display = "none";
    lottery.startDrawing()
        .then(result => {
            winnersEl.style.display = "block";
            winnersMessageEl.innerHTML = "Winners:";
            winningCombinationEl.innerHTML = `Winning combination was: ${result.winningCombination}`;

            let winnerList = result.winners;

            console.log(winnerList);

            winnerList.forEach(winner => {
                winnersEl.innerHTML += `<li>${winner.getPlayerDetails()}</li>`;
            })
        })
        .catch(result => {
            winnersEl.style.display = "none";
            winnersMessageEl.innerHTML = "There are no winners.";
            winningCombinationEl.innerHTML = `Nobody had combo: ${result.winningCombination}`;
        })
        .finally(() => {
            buttonStartEl.disabled = false;
            buttonStartEl.innerHTML = "Start lottery drawing";
            lotteryResultsEl.style.display = "block";
        });
})