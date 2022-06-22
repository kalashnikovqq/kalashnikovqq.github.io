function sub() {
  document.getElementById("first").style.display = "none";
  document.getElementById("quiz").style.display = "flex";
}
const quizData = [
  {
    question: "Фильмы каких годов вам нравятся? ",
    a: "50х-60х",
    b: "70х-90х",
    c: "2000-х",
  },
  {
    question: "Кинематограф каких стран вы предпочитаете?",
    a: "США",
    b: "Великобритания",
    c: "СССР и Россия",
  },
  {
    question: "В какой компании вы собираетесь смотреть фильм? ",
    a: "В компании друзей ",
    b: "С девушкой ",
    c: "Один",
  },
  {
    question: "Какие фильмы вам больше нравятся?",
    a: "Авторские ",
    b: "Блокбастеры",
    c: "Драмы",
  },
  {
    question: "Как часто вы смотрите фильмы?",
    a: "Раз в месяц",
    b: "Раз в неделю",
    c: "Раз в день",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
}

function deselectAnswers() {
  answerElements.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerElements.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submit.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (currentQuiz == 0) {
      if (answer === "a") {
        score += 10;
      }
      if (answer === "b") {
        score += 100;
      }
      if (answer === "c") {
        score += 1000;
      }
    }
    if (currentQuiz == 1) {
      if (answer === "a") {
        score += 50;
      }
      if (answer === "b") {
        score += 500;
      }
      if (answer === "c") {
        score += 5000;
      }
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score == 5010) {
        window.open("cranes-are-flying.html", "_self").focus;
      } else if (score == 150) {
        var films = ["ap", "redline", "vzvod"];
        var rand = Math.floor(Math.random() * films.length);
        var link = films[rand];
        if (link == "ap") {
          window.open("apocalypse-now.html", "_self").focus;
        } else if (link == "redline") {
          window.open("the-thin-red-line.html", "_self").focus;
        } else if (link == "vzvod") {
          window.open("platoon.html", "_self").focus;
        }
      } else if (score == 600) {
        window.open("full-metall-jacket.html", "_self").focus;
      } else if (score == 5100) {
        var films = ["they", "zori", "stariki"];
        var rand = Math.floor(Math.random() * films.length);
        var link = films[rand];
        if (link == "they") {
          window.open("they-fought-for-their-country.html", "_self").focus;
        } else if (link == "zori") {
          window.open("the-dawns-here-are-quiet.html", "_self").focus;
        } else if (link == "stariki") {
          window.open("only-old-men-are-going-to-battle.html", "_self").focus;
        }
      } else if (score == 1050) {
        var films = ["flag", "jarhead", "fury"];
        var rand = Math.floor(Math.random() * films.length);
        var link = films[rand];
        if (link == "flag") {
          window.open("flags-of-our-fathers.html", "_self").focus;
        } else if (link == "jarhead") {
          window.open("jarhead.html", "_self").focus;
        } else if (link == "fury") {
          window.open("fury.html", "_self").focus;
        }
      } else if (score == 1500) {
        window.open("the-pianist.html", "_self").focus;
      } else if (score == 6000) {
        window.open("war.html", "_self").focus;
      } else {
        var films = ["ap", "redline", "vzvod"];
        var rand = Math.floor(Math.random() * films.length);
        var link = films[rand];
        if (link == "ap") {
          window.open("apocalypse-now.html", "_self").focus;
        } else if (link == "redline") {
          window.open("the-thin-red-line.html", "_self").focus;
        } else if (link == "vzvod") {
          window.open("platoon.html", "_self").focus;
        }
      }
    }
  }
});
