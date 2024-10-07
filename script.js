const hands = ['rock', 'paper', 'scissor']
const para = document.createElement('p');
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(hands) {
    const randomHand = Math.floor(Math.random() * hands.length);
    let computerSelection = hands[randomHand];

    return computerSelection;

}

console.log(getComputerChoice(hands));

function getHumanChoice(hands) {
    let humanPlay = window.prompt("rock, paper, or scissor?");
    let humanSelection = humanPlay;

    if(humanPlay === "rock"){
        console.log("rock");
    } else if(getHumanChoice === "paper") {
        console.log("paper");
    } else if(getHumanChoice === "scissor"){
        console.log("scissor");
    } else{
        console.log("invalid choice, please pick from the three (3) options.")
    }
    return humanSelection;
}

function playRound(humanChoice, computerChoice){

}