const readline = require('readline');
const max = 10
const rand = Math.floor(Math.random() * max)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const askQuestion = () => {
    rl.question('enter number:', (num) => {
        num = parseInt(num)
        if (isNaN(num)) {
            console.log("Please enter a valid number 🫣.");
            askQuestion()
        }else if (rand === num) {
            console.log("Good Job 🥳👏🏻🎉!");
            rl.close()
        } else if (num > rand) {
            console.log("Too high 🧨↗️!");
            askQuestion()
        } else {
            console.log("Too low 🐥↘️!");
            askQuestion()
        }
    })
}

askQuestion()

  
