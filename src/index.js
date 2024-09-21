  export default class BaseballGame {

    // BaseballGame 생성자
    constructor() {
      this.computerNumbers = [];
      this.gameStart();
    }

    // 게임의 결과인 볼, 스트라이크, 낫싱 반환
    play(computerNumbers, userNumbers) {
      const results = this.compareNumbers(userNumbers, computerNumbers);
      return this.extractResult(results);
    }

    // 볼, 스트라이크르 문자열로 변경
    extractResult(results) {
      if(results[0] === 0 && results[1] === 0)
        return "낫싱";
      else if(results[0] === 0 && results[1] !== 0)
        return results[1] + "볼";
      else if(results[0] !== 0 && results[1] === 0)
        return results[0] + "스트라이크";
      else
        return results[1] + "볼 " + results[0] + "스트라이크";
    }

    // 숫자 비교 후 볼, 스트라이크 확인
    compareNumbers(userNumbers, computerNumbers) {
      let results = [0, 0]; // 스트라이크, 볼

      for(let i = 0; i < 3; i++) {
        if(userNumbers[i] === computerNumbers[i]) 
          results[0]++;
        else if(computerNumbers.includes(userNumbers[i]))
          results[1]++;
      }

      return results;
    }

    // 컴퓨터 숫자 생성
    makeComputerNumbers() {
      let numbers = [];

      while(true) {
        numbers = [
          this.makeRandomNumber(),
          this.makeRandomNumber(),
          this.makeRandomNumber()
        ];

        if(this.validateComputerDifferentNumber(numbers))
          break;
      }

      return numbers;
    }

    // 1 ~ 9 랜덤 숫자 생성
    makeRandomNumber() {
      return MissionUtils.Random.pickNumberInRange(1, 9);
    }

    // 컴퓨터의 서로 다른 3자리 숫자를 서로 다른지 검증
    validateComputerDifferentNumber(computerNumbers) {
      return new Set(computerNumbers).size === 3;
    }

    // 3개의 숫자가 서로 다른 수인지 검증
    validateDifferentNumber(userNumbers) {
      if (new Set(userNumbers).size !== 3) {
        alert('잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요.');
        return false;
      }
      return true;
    }

    // 사용자 입력 숫자 길이 검증
    validateLength(userNumbers) {
      if (userNumbers.length !== 3) {
        alert('잘못된 입력입니다. 3자리 숫자를 입력하세요.');
        return false;
      }
      return true;
    }

    // 사용자 숫자 형식 검증
    validateNumbers(userNumbers) {
      if (!/^\d{3}$/.test(userNumbers)) {
        alert('잘못된 입력입니다. 숫자만 입력하세요.');
        return false;
      }
      return true;
    }

    // 결과 표시
    printResult(result) {
      const output = document.querySelector("#result");
      output.insertAdjacentHTML('beforeend', `<div>${result}</div>`);
    }

    // 게임 종료
    endGame(result) {
      alert(result + " 축하드립니다!");

      const restartButton = document.querySelector("#game-restart-button");
      const submitButton = document.querySelector("#submit");

      submitButton.style.display = 'none';
      restartButton.style.display = 'block';

      restartButton.addEventListener('click', () => this.restart());
    }

    // 재시작
    restart() {
      this.computerNumbers = this.makeComputerNumbers();

      const submitButton = document.querySelector("#submit");
      const restartButton = document.querySelector("#game-restart-button");
      const output = document.querySelector("#result");

      submitButton.style.display = 'block';
      restartButton.style.display = 'none';
      output.innerHTML = '';
    }

    // 결과 확인
    checkResult(result) {
      return result === "3스트라이크";
    }

    // 게임 시작
    gameStart() {
      const input = document.querySelector("#user-input");
      const submitButton = document.querySelector("#submit");

      this.computerNumbers = this.makeComputerNumbers();

      submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 동작 방지
        
        console.log(this.computerNumbers);

        const userInput = input.value;
        const userNumbers = userInput.split('').map(Number);

        if (!this.validateLength(userNumbers) ||
            !this.validateNumbers(userInput) ||
            !this.validateDifferentNumber(userNumbers)) {
          return;
        }

        let result = this.play(userNumbers, this.computerNumbers);
        this.printResult(result);

        if(this.checkResult(result)){
          this.endGame(result);
        }
      });
    }
  }

new BaseballGame();