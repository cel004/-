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
let humanChoice;

function getHumanChoice(hands) {
    let humanPlay = window.prompt("rock, paper, or scissor?");
    let humanSelection = humanPlay();

    if(humanPlay === "rock"){
        humanChoice = "rock";
    } else if(getHumanChoice === "paper") {
        humanChoice = "paper";
    } else if(getHumanChoice === "scissor"){
        humanChoice = "scissor";
    } else{
        console.log("invalid choice, please pick from the three (3) options.")
    }
    console.log("player chose " + humanChoice);
}

function round(){
    getComputerChoice();
    getHumanChoice();

    if(computerSelection === humanChoice){
        console.log("tie");
    } else if(
        (computerScore === "rock" && humanChoice === "scissors") ||
        (computerScore === "paper" && humanChoice === "rock") ||
        (computerScore === "scissor" && humanChoice === "paper")){
            computerScore++;
            console.log("computer wins the round!")
        } else{
            humanScore++;
            console.log("human wins this round");
        }
        console.log(`human score: ${humanScore}, computer score: ${computerScore}`);
    }

function playGame(){
        while((humanScore + computerScore) < 5){
            round();
        }

        if(humanScore >= 5){
            console.log("human wins with a score of " + humanScore);
        } else{
            console.log("computer wins with a score of " + computerScore);
        }
    }
