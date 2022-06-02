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
   let choice = prompt("Rock, Paper or Scissors?")
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
           alert("You drew! CPU chose: " + cpuChoice +".")
       }
       else if(gameWon){
            alert("You Won! CPU chose: " + cpuChoice +".")
       }
       else{
            alert("You lost! CPU chose: " + cpuChoice +".")
       }

   }
   else{
        alert("Client did not choose a valid...")
   }
}

while (true){
    clientPlay()
}