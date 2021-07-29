const btn = document.querySelector("button");
const main = document.querySelector("main");
const inputName = document.querySelector("#inputName");
const inputQuestion = document.querySelector("#inputQuestion");
const para = document.createElement("p");

const userName = 'James';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
const userQuestion = '';
console.log(`${userName}'s question is: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

function generateAnswer() {
  switch (eightBall = randomNumber) {
    case 0:
      return 'It is certain';
      break;
    case 1:
      return 'It is decidedly so';
      break;
    case 2:
      return 'Reply hazy try again';
      break;
    case 3:
      return 'Cannot predict now';
      break;
    case 4:
      return 'Do not count on it';
      break;
    case 5:
      return 'My sources say no';
      break;
    case 6:
      return 'Outlook not so good';
      break;
    case 7:
      return 'Signs point to yes';
      break;
    default:
      return 'Error. Try again';
      break;
  }
}
function checkAns() {
  para.innerText = generateAnswer();
  main.appendChild(para);
}