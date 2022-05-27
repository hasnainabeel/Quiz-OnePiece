// let chalk = require('chalk');
var readlineSync = require('readline-sync');




console.log("HOW WELL DO YOU KNOW ONE-PIECE");
var userName = readlineSync.question("Please enter your name: ");
console.log("Welcome " + userName,"to One Piece Quiz");
console.log("Enetr the correct option below");
console.log("\n");
var score = 0;



// function play(question, answer) {
//   var userAnswer = readlineSync.question(question);
//   if (userAnswer === answer) {
//     console.log(chalk.green("You are right"));
//     score += 1;
//   } else {
//     console.log(chalk.red("Wrong answer!"));
//   }
//   console.log("Your Score is: " + score)
//   console.log("-------------")
// }
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are right");
    score += 1;
  } else {
    console.log("Wrong answer!");
  }
  console.log("Your Score is: " + score)
  console.log("-------------")
}


var questions = [One = {
                  question: "01. Monkey D. Luffy ate a/an: \n \t a. Apple \n \t b. Devil fruit \n \t c. Evil fruit \n \t d. Rotten fruit \n \t ",
                  answer: 'b'
                },
                 Two = {
                  question: "02. Which of these devil fruits did Luffy eat? \n \t a. Mero Mero No Mi \n \t b. Bara Bara No Mi \n \t c. Bari Bari No Mi \n \t d. Gomu Gomu No Mi \n \t ",
                  answer: 'd'
                },
                 Three = {
                  question: "03. Who’s the navigator on the ship? \n \t a. Zoro\n \t b. Usoop \n \t c. Nami \n \t d. Chopper\n \t ",
                  answer: 'c'
                },
                 Four = {
                   question: "04. Who inspired Luffy the most?\n \t a. Gol D. Roger \n \t b. Akagami no Shankusu \n \t c. Shirohige \n \t d. Monkey D. Garp\n \t ",
                   answer: 'b'
                 },
                 Five = {
                   question: "05. Who is the odd one? \n \t a. Luffy \n \t b. Dragon \n \t c. Garp \n \t d. Teach \n \t ",
                   answer: 'd'
                 },
                 Six = {
                   question: "06. The map to Grand Line could only be decoded from? \n \t a. A holy book \n \t b. A special parchment \n \t c. Ancient text written by ancient civilization \n \t d. None of these \n \t ",
                   answer: 'c'
                 },
                 Seven = {
                   question: "07. Tony Tony Chopper can transform into a \n \t a. Human-Monkey hybrid \n \t b. Human-Reandear hybrid \n \t c. Human-Rabbit hybrid \n \t d. Human-Human hybrid \n \t ",
                   answer: 'b'
                 },
                 Eight = {
                   question: "08. TWhat did Sanji wanted to see?\n \t a. Girls \n \t b. The largest Fish in the world \n \t c. A mermaid \n \t d. All blue ocean \n \t ",
                   answer: 'd'
                 },
                 Nine = {
                  question: "09. The name of the Luffy’s crew is: \n \t a. Piratea with hat \n \t b. Wooden hat pirates \n \t c. Metal hat pirates \n \t d. Straw hat pirates \n \t ",
                   answer: 'd'
                 },
                 Ten = {
                  question: "10.Gol D. Roger is known as \n \t a. Best sailor in the world \n \t b. King of pirates \n \t c. Loser of the sea \n \t d. Bravest pirate in the World \n \t ",
                   answer: 'b'
                 },
                ]

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

// if (score >= 4) {
//   console.log(chalk.green("Your Final score is : " + score));
// } else {
//   console.log(chalk.red("Your Final score is : " + score));
// }
console.log("Your Final score is : " + score);

console.log("HIGH SCORES: \na.Hasnain \t 10 \nb.\nc.")
console.log("\n\n\n\n")
console.log("Send me a screen short of your score")