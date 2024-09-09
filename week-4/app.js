const readlineSync = require('readline-sync');
const chalk = require('chalk')


const playerName = readlineSync.question('what is your name? ')

console.log(chalk.bold('hello ' +playerName + 'welcome to quiz!!'))

let score = 0;
let question1 = readlineSync.question('who is god of cricket? ')

if(question1.toLowerCase() == 'dhoni') {
   
    console.log(chalk.green('correct!'))
    score++;
} else {
    console.log("Ans is wrong")
}

console.log(chalk.bgBlue('your score is ' + score))