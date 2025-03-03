const questions = [
    { question: "What is the sister of Hancho at school Acodes?", answer: ["Parfaite", "Chantal", "Joyce", "Olive"], correct: "Joyce" },
    { question: "What is 2 + 2?", answer: [3, 4, 5, 6], correct: 4 },
    { question: "What is the capital of France?", answer: ["Paris", "London", "Berlin", "Madrid"], correct: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: ["Earth", "Mars", "Jupiter", "Venus"], correct: "Mars" },
    { question: "Which is the largest mountain on Earth?", answer: ["Nyiragongo", "Kilimanjaro", "Kalisimbi", "Muhabura"], correct: "Kilimanjaro" },
    { question: "Who is the President of the USA?", answer: ["Macron", "Biden", "Trump", "Kagame"], correct: "Biden" },
    { question: "Which thing is both a fruit and a color?", answer: ["Orange", "Lemon", "Apple", "Pineapple"], correct: "Orange" },
    { question: "Which thing comes from the sky and is formed like water?", answer: ["Cloud", "Rain", "Ice", "Snow"], correct: "Rain" },
    { question: "Which color does this boy love?", answer: ["Pink", "Yellow", "Blue", "Red"], correct: "Blue" },
    { question: "A house made of ice?", answer: ["House", "Igloo", "White House", "School"], correct: "Igloo" },
    { question: "A small, hard block used for building?", answer: ["Brick", "Grass", "Cement", "Iron Sheet"], correct: "Brick" },
    { question: "A white fluffy thing in the sky?", answer: ["Snow", "Rain", "Lightning", "Clouds"], correct: "Clouds" },
    { question: "A large bird with sharp eyes?", answer: ["Hawk", "Eagle", "Bird", "Owl"], correct: "Eagle" },
    { question: "The bright, hot part of a fire?", answer: ["Liquid", "Air", "Flame", "Gas"], correct: "Flame" }
];

let currentQuestion = 0;

function loadQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion].question;
    let buttons = document.getElementsByClassName("answer");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questions[currentQuestion].answer[i];
        buttons[i].setAttribute("onclick", `checkAnswer('${questions[currentQuestion].answer[i]}')`);
    }
    document.getElementById("result").textContent = "";
    document.getElementById("next-question").style.display = "none";
}

function checkAnswer(answer) {
    let correctAnswer = questions[currentQuestion].correct.toString();
    
    if (answer === correctAnswer) {
        document.getElementById("result").textContent = "✅ Correct! You Win!";
        document.getElementById("result").style.color = "green";
        document.querySelector('#correct_audio').play();
    } else {
        document.getElementById("result").textContent = "❌ Wrong! You Lose!";
        document.getElementById("result").style.color = "red";
        document.querySelector('#incorrect_audio').play();
    }
    document.getElementById("next-question").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").textContent = "Game Over! 🎉";
        document.getElementById("result").textContent = "";
        document.getElementById("next-question").style.display = "none";
    }
}

window.onload = loadQuestion;
