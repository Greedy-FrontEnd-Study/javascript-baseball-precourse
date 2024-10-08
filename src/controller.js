import { printResult, restartHide } from "./view.js";
import { validateNum, play , getRandomNum } from "./model.js";

let comNum = getRandomNum(); //컨트롤러
restartHide();

document.querySelector('#submit').addEventListener('click', (event) => {
  event.preventDefault();
  let userNum = document.querySelector("#user-input").value;
  if (validateNum(userNum)) {
    console.log("컴퓨터 번호: ", comNum);
    printResult(play(userNum, comNum));
  } else {
    alert("다시 입력해주세요");
  }
});

document.getElementById('game-restart-button').addEventListener('click', () => {  
  location.reload(); 
});