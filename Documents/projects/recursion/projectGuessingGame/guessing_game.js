const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let secretNumber = 8
const checkGuess = (num) => {
    if(num > secretNumber) {
        console.log("Too high")
        return false
    }
    else if(num < secretNumber){
        console.log("Too low")
        return false
    }
    console.log("Correct!")
    return true
}

const askGuess = () => {
    rl.question("Enter a guess: ", answer => {
        // print their response
       const isCorrect = checkGuess(answer)
       if (isCorrect === true){
        console.log("Correct")

        rl.close();
       }
        // close the interface
       else if (!isCorrect) {
        rl.question("Try again: ")
       }
      });
}

console.log(askGuess())
