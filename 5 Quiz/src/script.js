const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];

const question = document.querySelector(".question");
const optionA = document.getElementById("option-text-a");
const optionB = document.getElementById("option-text-b");
const optionC = document.getElementById("option-text-c");
const optionD = document.getElementById("option-text-d");
const submit = document.querySelector(".submit");

let currenstQuestion = 0;
let score = 0;

question.textContent = quiz[currenstQuestion].question;
optionA.textContent = quiz[currenstQuestion].ans1text;
optionB.textContent = quiz[currenstQuestion].ans2text;
optionC.textContent = quiz[currenstQuestion].ans3text;
optionD.textContent = quiz[currenstQuestion].ans4text;

submit.addEventListener("click", () => {
  let checkedAns = document.querySelector("input[type='radio']:checked");

  if (checkedAns === null) {
    alert("Please select an answer");
  } else {
    if (
      checkedAns.nextElementSibling.textContent ===
      quiz[currenstQuestion].answer
    ) {
      score++;
    }

    currenstQuestion++;

    if (currenstQuestion < quiz.length) {
      question.textContent = quiz[currenstQuestion].question;
      optionA.textContent = quiz[currenstQuestion].ans1text;
      optionB.textContent = quiz[currenstQuestion].ans2text;
      optionC.textContent = quiz[currenstQuestion].ans3text;
      optionD.textContent = quiz[currenstQuestion].ans4text;

      checkedAns.checked = false;
      console.log(currenstQuestion);
    } else {
      console.log("sssss");
      alert(`Your score is ${score} out of ${quiz.length}`);
      location.reload();
    }
  }
});
