export function printResult(result){   //뷰
  if(result===3){
    document.querySelector("#result").innerHTML = `<div style="font-size: 20px;"><b>🎉정답을 맞추셨습니다🎉</b></div><br>게임을 새로 시작하시겠습니까?`;   
    document.getElementById('game-restart-button').style.display ='block';	
  }
  else {
    document.querySelector("#result").innerHTML = result;
  }
}
export function restartHide(){
  document.getElementById('game-restart-button').style.display ='none';	//뷰?
}
