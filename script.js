var questions = [
  [
    "this is a question",
    "this is an answer 1",
    "this is an answer 2",
    "this is an answer 3",
    "this is an answer 4",
    "this is an answer 1",
  ],
  [
    "this is a question 2",
    "this is an answer 1",
    "this is an answer 2",
    "this is an answer 3",
    "this is an answer 4",
    "this is an answer 2",
  ],
  [
    "this is a question 3",
    "this is an answer 1",
    "this is an answer 2",
    "this is an answer 3",
    "this is an answer 4",
    "this is an answer 3",
  ],
  [
    "this is a question 4",
    "this is an answer 1",
    "this is an answer 2",
    "this is an answer 3",
    "this is an answer 4",
    "this is an answer 4",
  ],
  [
    "this is a question 5",
    "this is an answer 1",
    "this is an answer 2",
    "this is an answer 3",
    "this is an answer 4",
    "this is an answer 1",
  ],
];

var score = 0;
var questionCount = 0;

// sets first questios
function showQuestion(questionIndex) {
  console.log("What you want");
  document.querySelector(".card-header").innerHTML = `<h2> ${questions[questionIndex][0]}</h2>`;
  document.querySelector(".card-footer").innerHTML = `
   <button id="answer1" class = "btn">${questions[questionIndex][1]}</button>
   <button id="answer2" class = "btn">${questions[questionIndex][2]}</button>
   <button id="answer3" class = "btn">${questions[questionIndex][3]}</button>
   <button id="answer4" class = "btn">${questions[questionIndex][4]}</button>
   `;

  // changes questions and score
  function answerClickHandler() {
    questionCount++;
    if (questionCount < 5) {
      showQuestion(questionCount);
      if (this.textContent == questions[questionIndex][5]) {
        console.log(questions[questionIndex][5]);
        score = score + 10;
      } else if (this.textContent !== questions[questionIndex][5]) {
        secondsLeft = secondsLeft - 10;
        console.log("uh oh");
      }
      // changes to submit page
    } else {
      timeEl.textContent = "";
      document.querySelector(".card-header").innerHTML = `
      <h1>Game Over</h1>
      <h1>Score: ${score} </h1>
      <input type="text" name="username" id="username" placeholder="Enter Name" />
      <br>
      <button id="submit" class = "btn">Submit</button>
      `;
      //submits username and score
      document.querySelector(".card-footer").innerHTML = "";
      var signUpButton = document.querySelector("#submit");
      signUpButton.addEventListener("click", function (event) {
        event.preventDefault();

        var username = document.querySelector("#username").value;

        if (username === "") {
          displayMessage("error", "username cannot be blank");
        } else {
          // Save email and password to localStorage and render the last registered.
          localStorage.setItem("username", username);

          localStorage.setItem("score", score);
          renderLastRegistered();
        }
      });
    }

    console.log(score);
  }
  document.querySelector("#answer1").addEventListener("click", answerClickHandler);
  document.querySelector("#answer2").addEventListener("click", answerClickHandler);
  document.querySelector("#answer3").addEventListener("click", answerClickHandler);
  document.querySelector("#answer4").addEventListener("click", answerClickHandler);
}

var timeEl = document.querySelector("#timer");

var secondsLeft = 10;

document.querySelector("#start-quiz").addEventListener("click", function () {
  showQuestion(questionCount);
  timeEl.textContent = secondsLeft;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    clearInterval(timerInterval);
    if (secondsLeft <= 0) {
      document.querySelector(".card-header").innerHTML = `
      <h1>Game Over</h1>
      <h1>Score: ${score} </h1>
      <input type="text" name="username" id="username" placeholder="Enter Name" />
      <br>
      <button id="submit" class = "btn">Submit</button>
      `;

      document.querySelector(".card-footer").innerHTML = "";
      timeEl.textContent = "";
    }
  }, 1000);
});
