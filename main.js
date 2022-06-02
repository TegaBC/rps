let options = ["rock", "paper", "scissors"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
    let chosenNumber = getRandomInt(options.length)
    let chosenMaterial = options[chosenNumber]
    return chosenMaterial
}

function clientPlay(){
   let choice = prompt("Rock, Paper or Scissors?").toLowerCase()
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

       console.log(gameWon)
       if (gameWon === 0){
           console.log("You drew!")
       }
       else if(gameWon){
           console.log("You Won!")
       }
       else{
           console.log("You lost!")
       }

   }
}

while (true){
    clientPlay()
}