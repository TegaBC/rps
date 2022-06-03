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
           alert("You drew! CPU chose: " + cpuChoice +".");
       }
       else if(gameWon){
            alert("You Won! CPU chose: " + cpuChoice +".");
            const scoreElement = document.querySelector(".client-score");
            clientScore++
            scoreElement.textContent = "Your Score: " + clientScore
       }
       else{
            alert("You lost! CPU chose: " + cpuChoice +".");
            const scoreElement = document.querySelector(".cpu-score");
            cpuScore++
            scoreElement.textContent = "CPU Score: " + cpuScore
       };

   }
   else{
        alert("Client did not choose a valid...")
   }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", clientPlay)
});