export default function userInput() {
  let isValidInput = false;
  const inputValue = document.getElementById("user-input").value;
  const arrInput = inputValue.split("");
  const set = new Set(arrInput);

  if (inputValue.length !== 3 || isNaN(inputValue)) {
    window.alert("3자리 숫자로 입력하세요.");
  } else if (set.size !== 3) {
    window.alert("중복된 값입니다.");
  } else if (arrInput.includes("0")) {
    window.alert("1에서 9까지의 숫자 입력하세요.");
  } else {
    isValidInput = true;
  }

  if (isValidInput) {
    return inputValue;
  } else {
    return null;
  }
}
