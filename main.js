let options = ["rock", "paper", "scissors"];
let cpuScore = 0
let clientScore = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

function computerPlay(){
    let chosenNumber = getRandomInt(options.length);
    let chosenMaterial = options[chosenNumber];
    return chosenMaterial;
};

function clientPlay(e){
    let choice = e.target.parentNode.className;
   
   if (!choice) 
   {
        alert("Client did not choose anything.")
       return
   }
   choice = choice.toLowerCase()
   
   if (choice === "rock" || choice === "paper" || choice === "scissors"){
        let cpuChoice = computerPlay()
        let gameWon = false

       switch(choice){
            case "rock":
                if (cpuChoice === "scissors"){
                    gameWon = true
                }
                else if (cpuChoice === "paper"){
                    gameWon = false
                }
                else{
                    gameWon = 0
                }
                break
            case "paper":
                if (cpuChoice === "rock"){
                    gameWon = true
                }
                else if (cpuChoice === "scissors"){
                    gameWon = false
                }
                else{
                    gameWon = 0
                }
                break
            case "scissors":
                if (cpuChoice === "paper"){
                    gameWon = true
                }
                else if (cpuChoice === "rock"){
                    gameWon = false
                }
                else{
                    gameWon = 0
                }
                break
       }

       if (gameWon === 0){
            let result = document.querySelector(".result");//.textContent = "You drew!"
            result.textContent = "You Drew!";
       }
       else if(gameWon){
            let result = document.querySelector(".result");
            result.textContent = "You Won! CPU chose: " + cpuChoice +".";
            clientScore++;
            const scoreElement = document.querySelector(".client-score");
            scoreElement.textContent = "Your Score: " + clientScore;
       }
       else{
            let result = document.querySelector(".result");
            result.textContent = "You Lost! CPU chose: " + cpuChoice +".";
            cpuScore++;
            const scoreElement = document.querySelector(".cpu-score");
            scoreElement.textContent = "CPU Score: " + cpuScore;
       };
   }
   else{
        alert("Client did not choose a valid...");
   }

   function resetScores(cpuLost){
       cpuScore = 0;
       clientScore = 0;
       let cpuElement = document.querySelector(".cpu-score");
       cpuElement.textContent = "CPU Score: 0";
       let clientElement = document.querySelector(".client-score");
       clientElement.textContent = "Your Score: 0";

       if (cpuLost) {
           alert("You Won!!!")}
        else{
            alert("You Lost!!!")
        }
   }

   if (cpuScore === 5){
        resetScores(false);
   }
   else if (clientScore === 5){
        resetScores(true);
   }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", clientPlay)
});