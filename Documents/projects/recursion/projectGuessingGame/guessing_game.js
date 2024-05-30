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
       const isCorrect = checkGuess(Number(answer))
       if (isCorrect === true){
rl.close();

       }

        // close the interface
       if (!isCorrect) {
       askGuess()

       }

      });

}
askGuess()
