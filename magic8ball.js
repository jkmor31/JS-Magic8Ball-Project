const btn = document.querySelector("button");
const main = document.querySelector("main");
const inputName = document.querySelector("#inputName");
const inputQuestion = document.querySelector("#inputQuestion");
const para = document.createElement("p");




function findAns(){
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = '';
  let text;
  switch (eightBall = randomNumber) {
    case 0:
      text = 'It is certain';
      break;
    case 1:
      text = 'It is decidedly so';
      break;
    case 2:
      text = 'Reply hazy try again';
      break;
    case 3:
      text = 'Cannot predict now';
      break;
    case 4:
      text = 'Do not count on it';
      break;
    case 5:
      text = 'My sources say no';
      break;
    case 6:
      text = 'Outlook not so good';
      break;
    case 7:
      text = 'Signs point to yes';
      break;
    default:
      text = 'Error. Try again';
  }
  para.innerText = text;
  main.appendChild(para);
}
