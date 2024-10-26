const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const num1Display = document.getElementById("num1");
const num2Display = document.getElementById("num2");
const audio = document.getElementById("myAudio");

let answer = 0;

function generate_equation() {
  const num1 = Math.floor(Math.random() * 20);
  const num2 = Math.floor(Math.random() * 20);
  const dummyAnswer1 = Math.floor(Math.random() * 20);
  const dummyAnswer2 = Math.floor(Math.random() * 20);
  const allAnswer = [num1 * num2, dummyAnswer1, dummyAnswer2];
  const switchAnswer = [];

  answer = num1 * num2;

  num1Display.innerHTML = num1;
  num2Display.innerHTML = num2;

  for (let i = allAnswer.length; i > 0; i--) {
    switchAnswer.push(allAnswer.splice(Math.floor(Math.random() * i), 1)[0]);
  }

  option1.innerHTML = switchAnswer[0];
  option2.innerHTML = switchAnswer[1];
  option3.innerHTML = switchAnswer[2];
}

option1.addEventListener("click", function () {
  if (parseInt(option1.innerHTML) === answer) {
    generate_equation();
  } else {
    audio.play();
  }
});

option2.addEventListener("click", function () {
  if (parseInt(option2.innerHTML) === answer) {
    generate_equation();
  } else {
    audio.play();
  }
});

option3.addEventListener("click", function () {
  if (parseInt(option3.innerHTML) === answer) {
    generate_equation();
  } else {
    audio.play();
  }
});

generate_equation();
