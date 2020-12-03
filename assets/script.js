var questions = [
  [
    "How do you define a varaibale in javascript?",
    "var",
    "function()",
    ".appendChild",
    ".getElementByID",
    "var",
  ],
  [
    "How do you select a specific html element in javascript?",
    ".appendChild",
    ".getElementByID",
    ".textContent",
    ".addEventListener",
    ".getElementByID",
  ],
  [
    "How do you get the text of an element?",
    ".querySelector",
    "displayMessage",
    ".textContent",
    "console.log",
    ".textContent",
  ],
  ["how do you alert a message?", "confirm()", "const", "return", "alert()", "alert()"],
  ["How do you get a random number?", "Math.random()", "while", "if", "Math.random()"],
];

var score = 0;
var questionCount = 0;
var secondsLeft = 31;
var timerR;

//visual seconds changes
function setTime() {
  secondsLeft--;
  timeEl.textContent = secondsLeft;
  if (secondsLeft <= 0) {
    stopTime();
  }
}

function stopTime() {
  clearInterval(timerR);
  timeEl.textContent = "";
  document.querySelector(".card-header").innerHTML = `
          <h1>Game Over</h1>
          <h1>Score: ${score} </h1>
          <input type="text" name="username" id="username" placeholder="Enter Name" />
          <br>
          <button id="submit" class = "btn">Submit</button>
          `;
  var displayName = localStorage.getItem("username");
  var displayScore = localStorage.getItem("score");
  function renderLastScore() {
    displayName.textContent = localStorage.getItem("username");
    displayScore.textContent = localStorage.getItem("score");
  }
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
      // renderLastRegistered();
      renderLastScore();
    }
  });
  var displayName = localStorage.getItem("username");
  var displayScore = localStorage.getItem("score");
  function renderLastScore() {
    displayName.textContent = localStorage.getItem("username");
    displayScore.textContent = localStorage.getItem("score");
  }
  signUpButton.addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector(".card-header").innerHTML = `
        <h1>Score</h1>
        <h2 id= "test">${localStorage.getItem("username")}: ${localStorage.getItem("score")}</h2>
        
        
        `;
    document.querySelector(".card-footer").innerHTML = "";
    renderLastScore();
  });

  document.querySelector(".card-footer").innerHTML = "";
}

// sets first questios
function showQuestion(questionIndex) {
  //reagan code

  //reagan code end

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
        //stopTime();
      }
      // changes to submit page
    } else {
      // secondsLeft = 0;
      // if ((secondsLeft = 0)) {
      //   clearInterval(timerInterval);
      // }

      //reagan code
      stopTime();
      //reagan code end

      //submits username and score

      // var signUpButton = document.querySelector("#submit");
      // signUpButton.addEventListener("click", function (event) {
      //   event.preventDefault();

      //   var username = document.querySelector("#username").value;

      //   if (username === "") {
      //     displayMessage("error", "username cannot be blank");
      //   } else {
      //     // Save email and password to localStorage and render the last registered.
      //     localStorage.setItem("username", username);

      //     localStorage.setItem("score", score);
      //     // renderLastRegistered();
      //     renderLastScore();
      //   }
      // });
      // var displayName = localStorage.getItem("username");
      // var displayScore = localStorage.getItem("score");
      // function renderLastScore() {
      //   displayName.textContent = localStorage.getItem("username");
      //   displayScore.textContent = localStorage.getItem("score");
      // }
      // signUpButton.addEventListener("click", function (event) {
      //   event.preventDefault();

      //   document.querySelector(".card-header").innerHTML = `
      //   <h1>Score</h1>
      //   <h2 id= "test">${localStorage.getItem("username")}: ${localStorage.getItem("score")}</h2>

      //   `;
      //   document.querySelector(".card-footer").innerHTML = "";
      //   renderLastScore();
      // });
    }

    console.log(score);
  }
  document.querySelector("#answer1").addEventListener("click", answerClickHandler);
  document.querySelector("#answer2").addEventListener("click", answerClickHandler);
  document.querySelector("#answer3").addEventListener("click", answerClickHandler);
  document.querySelector("#answer4").addEventListener("click", answerClickHandler);

  // if (timerStop > 4) {
  //   timeEl.textContent = "";
  // }
}

var timeEl = document.querySelector("#timer");

// document.querySelector("#start-quiz").addEventListener("click", function () {
//   showQuestion(questionCount);
//   timeEl.textContent = secondsLeft;
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft;
//     if (secondsLeft <= 0) {
//       clearInterval(timerInterval);
//       document.querySelector(".card-header").innerHTML = `
//       <h1>Game Over</h1>
//       <h1>Score: ${score} </h1>
//       <input type="text" name="username" id="username" placeholder="Enter Name" />
//       <br>
//       <button id="submit" class = "btn">Submit</button>
//       `;

//       document.querySelector(".card-footer").innerHTML = "";
//       timeEl.textContent = "";
//     }
//   }, 1000);
// }

document.querySelector("#start-quiz").addEventListener("click", function () {
  showQuestion(questionCount);
  timerR = setInterval(setTime, 1000);
});
