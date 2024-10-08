export function validateNum(input) { //모델 
  let setInput = new Set(input);
  if (isNaN(Number(input)) || input.includes("0")|| setInput.size !==3 || input.length !== 3) {
    return false;
  }
  return true;
}

export function play(userNum,comNum) { //모델
  let strike = 0
  let ball = 0;
  for(let i =0;i<3;i++){
    if(userNum[i]==comNum[i])
      strike+=1;
    else if(comNum.includes(userNum[i]))
      ball+=1;
  }

  if (strike === 3) return 3;
  if (ball===0 && strike === 0) return "낫싱";
  if (strike > 0 && ball > 0) return `${ball}볼 ${strike}스트라이크`;
  if (strike > 0) return `${strike}스트라이크`;
  if (ball > 0) return `${ball}볼`;
}

export function getRandomNum() { // 랜덤한 수 받기  //모델
  let comNum = new Set();
  while(comNum.size!==3){
    comNum.add(MissionUtils.Random.pickNumberInRange(1,9));
  }
  return Array.from(comNum).map(String).join('');
}