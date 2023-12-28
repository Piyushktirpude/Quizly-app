let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;

let userName = readlineSync.question("What's your name? ");
console.log(kuler(`\nHello ${userName} welcome to Quizify`, "#dc2626"))

console.log("\nPlease select any options by typing either a/b/c/d\n")

/** Creating  the questions dataset */
const database = {
  data: [
    {
      question: `let a = {}, b = {}
console.log(a == b)
console.log(a === b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true"
      },
      correctAnswer: "a"
    },
    {
      question: "Who developed and designed TypeScript?",
      options: {
        a: "Amazon",
        b: "Oracle",
        c: "Microsoft",
        d: "facebook"
      },
      correctAnswer: "c"
    },
    {
      question: "Is method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is a filename extension for typescript?",
      options: {
        a: ".jsx",
        b: ".cpp",
        c: ".tsx",
        d: ".py"
      },
      correctAnswer: "c"
    },
    {
      question: "Among which of the following computer programming language influenced the creation of typescript?",
      options: {
        a: "C++",
        b: "python",
        c: "java",
        d: "javascript"
      },
      correctAnswer: "d"
    },
    {
      question: "The following are backported features of typescript, except?",
      options: {
        a: "Modules",
        b: "Arrow",
        c: "Classes",
        d: "Methods",
      },
      correctAnswer: "d"
    }

  ]
}


/** Creating Leader Board*/
const leaderBoard = {
  data: [
    {
      name: "Harry",
      score: 1
    },
    {
      name: "Shivam",
      score: 3
    },
    {
      name: "Shubham",
      score: 2
    }
  ]
}

/** Main Logic */
function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Correct Answer", "#059669"));
    score++
  } else {
    console.log(kuler("Incorrect Answer", "#b91c1c"));
    console.log(kuler(`Correct Answer is ${correctAnswer}`, "#1d4ed8"))
  }
}

function showQuestionAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`)
    }
    let userAnswer = readlineSync.question("Enter your answer - (a/b/c/d) - ").toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer)
  }
}

function showHighScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score })
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("\nCheck your position on the Leader Board🎉🎉", "#fde047"))
  for (let leader of sortedScoreList) {
    console.log(kuler(`${leader.name} -  Score: ${leader.score}`, "#9333ea"))
  }
}

showQuestionAndOptions(database);
console.log(kuler(`\nYour score is - ${score}`, "#5eead4"));
showHighScorer(leaderBoard);