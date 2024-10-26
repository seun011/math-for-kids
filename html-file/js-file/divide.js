const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const num1Display = document.getElementById("num1");
const num2Display = document.getElementById("num2");
const audio = document.getElementById("myAudio");

let answer = 0;

function generate_equation() {
  const num1 = Math.floor(Math.random() * 30);
  let num2;
  
  // Ensure num2 is not zero to avoid division by zero
  do {
    num2 = Math.floor(Math.random() * 30);
  } while (num2 === 0);

  const dummyAnswer1 = (Math.random() * 30).toFixed(2);
  const dummyAnswer2 = (Math.random() * 30).toFixed(2);

  answer = (num1 / num2).toFixed(2);

  num1Display.innerHTML = num1;
  num2Display.innerHTML = num2;

  const allAnswer = [answer, dummyAnswer1, dummyAnswer2];
  const switchAnswer = [];

  for (let i = allAnswer.length; i > 0; i--) {
    switchAnswer.push(allAnswer.splice(Math.floor(Math.random() * i), 1)[0]);
  }

  option1.innerHTML = switchAnswer[0];
  option2.innerHTML = switchAnswer[1];
  option3.innerHTML = switchAnswer[2];
}

function handleClick(option) {
  // Use parseFloat for decimal comparison
  if (parseFloat(option.innerHTML) === parseFloat(answer)) {
    generate_equation();
  } else {
    audio.play();
  }
}

option1.addEventListener("click", () => handleClick(option1));
option2.addEventListener("click", () => handleClick(option2));
option3.addEventListener("click", () => handleClick(option3));

generate_equation();
