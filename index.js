//import chalk from 'chalk';
var  readlineSync=require("readline-sync");
// const chalk = require("chalk");
// console.log(chalk.blue("Welcome to my Quiz Show!"));
var score=0;
var userName=readlineSync.question("May I know your name?");
console.log("Welcome "+userName+",Let's see how well you know Suberthi!");
console.log("Rule of the Game:\nThis game has total 5 questions\nEach correct Answer=+3\nEach incorrect answer=-1");
var highestScorer={
  name:"Suberthi",
  score:"15"
}
function fungame(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log("Right Answer!");
    score=score+3;
  }
  else{
    console.log("Wrong Answer!");
    score=score-1;
  }
  console.log("Your Current Score=",score);
}
var questionAndAnswer=[{
  question:"Where do I work?",
  answer:"Hexaware Technologies",
},
{
  question:"What is my favourite color?",
  answer:"Orange",
},
{
  question:"Which is my fav DC comic character?",
  answer:"Batman",
},
{
  question:"Guess my birthday month?",
  answer:"September",
},
{
  question:"Guess my favourite movie?",
  answer:"Jab we met",
}]
for(var i=0;i<questionAndAnswer.length;i++){
  var currentQuestion=questionAndAnswer[i];
  fungame(currentQuestion.question,currentQuestion.answer);
}
if(highestScorer.score<=score){
  console.log("Last Highest Scorer name=",highestScorer.name);
  console.log("Last Highest Score=",highestScorer.score);
  console.log("Congratulations!"+userName+",You have bet the top scorer\nYour Score="+score);
  console.log("You can send screenshot of your score for highest scorer update!");
}else{
  console.log("Sorry! You couldn't be the highest scorer,Your score=",score);
  console.log("Highest Scorer name=",highestScorer.name);
  console.log("Highest Score=",highestScorer.score);
  console.log("Better luck next time:)");
}
console.log("****Thanks for your participation****");
