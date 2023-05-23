const quizData = [
  {
    question: "What is the closest galaxy to the the milky way?",
    options: ["Andromeda", "Virgo A", "Cygnus A", "Cartwheel"],
    answer: "Andromeda"
  },
  {
    question: "Question2",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Option2"
  },
  {
    question: "Question3",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Option3"
  }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
  const currentQuiz = quizData[currentQuestion];
  questionElement.textContent = currentQuiz.question;

  optionsElement.innerHTML = "";
  for (let i = 0; i < currentQuiz.options.length; i++) {
    const option = document.createElement("li");
    option.textContent = currentQuiz.options[i];
    option.onclick = selectAnswer;
    optionsElement.appendChild(option);
  }

  submitButton.disabled = true;
}

function selectAnswer(event) {
  const selectedOption = event.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedOption.textContent === answer) {
    score++;
  }

  selectedOption.classList.add("selected");
  disableOptions();
  submitButton.disabled = false;
}

function disableOptions() {
  const options = optionsElement.getElementsByTagName("li");
  for (let i = 0; i < options.length; i++) {
    options[i].onclick = null;
    options[i].classList.remove("selected");
  }
}

function submitAnswer() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuiz();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.style.display = "none";
  resultElement.textContent = `Your score: ${score} out of ${quizData.length}`;
  resultElement.style.display = "block";
}

window.onload = loadQuiz;
submitButton.addEventListener("click", submitAnswer);
