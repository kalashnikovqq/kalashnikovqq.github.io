function sub() {
  document.getElementById("first").style.display = "none";
  document.getElementById("quiz").style.display = "flex";
}
const quizData = [
  {
    question: "Фильмы каких годов вам нравятся? ",
    a: "50х-60х",
    b: "70х-90х",
    c: "00-н.в",
    correct: "b",
  },
  {
    question: "Кинематограф каких стран вы предпочитаете?",
    a: "США",
    b: "Великобритания",
    c: "СССР и Россия",
    correct: "a",
  },
  {
    question: "В какой компании вы собираетесь смотреть фильм? ",
    a: "В компании друзей ",
    b: "С девушкой ",
    c: "Один",
    correct: "c",
  },
  {
    question: "Какие фильмы вам больше нравятся?",
    a: "Авторские ",
    b: "Блокбастеры",
    c: "Драмы",
    correct: "b",
  },
  {
    question: "Как часто вы смотрите фильмы?",
    a: "Раз в месяц",
    b: "Раз в неделю",
    c: "Раз в день",
    correct: "a",
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
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score == 0) {
        var films = ["ap", "tnk", "fno"];
        var rand = Math.floor(Math.random() * films.length);
        var link = films[rand];
        if (link == "ap") {
          window.open("https://www.fieldfilm.ru/ap", "_self").focus;
        } else if (link == "tnk") {
          window.open("https://www.fieldfilm.ru/redline", "_self").focus;
        } else if (link == "fno") {
          window.open("https://www.fieldfilm.ru/glag", "_self").focus;
        }
      } else if (score == 1) {
        var films = ["osr", "voina"];
        var rand = Math.floor(Math.random() * films.length);
        var link = films[rand];
        if (link == "osr") {
          window.open("https://www.fieldfilm.ru/they", "_self").focus;
        } else if (link == voina) {
          window.open("https://www.fieldfilm.ru/war", "_self").focus;
        }
      } else if (score == 2) {
        var films = ["zzt", "co"];
        var rand = Math.floor(Math.random() * films.length);
        var link = films[rand];
        if (link == "zzt") {
          window.open("https://www.fieldfilm.ru/quiet", "_self").focus;
        } else if (link == "co") {
          window.open("https://www.fieldfilm.ru/metal", "_self").focus;
        }
      } else if (score == 3) {
        var films = ["iis", "lzh"];
        var rand = Math.floor(Math.random() * films.length);
        var link = films[rand];
        if (link == "iis") {
          window.open("https://www.fieldfilm.ru/look", "_self").focus;
        } else if (link == "lzh") {
          window.open("https://www.fieldfilm.ru/fly", "_self").focus;
        }
      } else if (score == 4) {
        var films = ["star", "vzvod", "morpeh"];
        var rand = Math.floor(Math.random() * films.length);
        var link = films[rand];
        if (link == "star") {
          window.open("https://www.fieldfilm.ru/old", "_self").focus;
        } else if (link == "vzvod") {
          window.open("https://www.fieldfilm.ru/platoon", "_self").focus;
        } else if (link == "morpeh") {
          window.open("https://www.fieldfilm.ru/jarhead", "_self").focus;
        }
      } else if (score == 5) {
        var films = ["pian", "yar"];
        var rand = Math.floor(Math.random() * films.length);
        var link = films[rand];
        if (link == "pian") {
          window.open("https://www.fieldfilm.ru/pianist", "_self").focus;
        } else if (link == "yar") {
          window.open("https://www.fieldfilm.ru/fury", "_self").focus;
        }
      }
    }
  }
});
