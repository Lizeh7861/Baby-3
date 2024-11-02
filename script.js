const reasons = [
    "I love the way you look at me.", 
    "With you I can be myself.",
    "Because I miss you… even when you’re in the next room.", 
    "You sacrifice and work so hard, without even realizing that you are.",
    "You always apologize first, no matter who’s wrong.",
    "You love me even when I’m being horrible and hard to be around.", 
    "You still give me butterflies.", 
    "You’re cute when you’re grumpy.",
    "You make me feel so safe.", 
    "I love the values you hold as a person.",
    "I love you for putting up with my tantrums and anxiety.", 
    "I love you for smelling so good all the time.",
    "I love you for being so utterly handsome.", 
    "Because you feel like home to me.", 
];

const questions = [
    { question: "What's my favourite colour?", options: ["pink", "blue", "yellow", "orange"], answer: "orange" },
    { question: "What's my biggest fear?", options: ["ghosts", "cockroaches", "darkness", "loneliness"], answer: "cockroaches" },
    { question: "What's my ideal date?", options: ["hiking and trekking", "romantic dinner", "netflix and cuddling", "Going to the mall"], answer: "netflix and cuddling" },
    { question: "What food do I not like?", options: ["pizza", "paalak", "chops", "baingan"], answer: "pizza" },
    { question: "What's my dream travel spot?", options: ["thailand", "maldives", "japan", "russia"], answer: "japan" },
    { question: "What do I say when I feel a lot of love for you?", options: ["I love you", "Babyyyyy", "Haseeb + pause", "just you"], answer: "just you" },
    { question: "What's my favourite way to be addressed?", options: ["baby", "meri jaan", "darling", "alizeh"], answer: "meri jaan" }
];

let score = 0;
let questionIndex = 0;

// DOM elements
const questionContainer = document.getElementById('question-container');
const scoreContainer = document.getElementById('score-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreText = document.getElementById('score-text');
const reasonsElement = document.getElementById('reasons');
const startButton = document.getElementById('start-button');

// Shuffle questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(questions);

function startGame() {
    score = 0;
    questionIndex = 0;
    questionContainer.classList.remove('hidden');
    scoreContainer.classList.add('hidden');
    startButton.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    if (questionIndex < questions.length) {
        const currentQuestion = questions[questionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = ''; // Clear previous options

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            optionsElement.appendChild(button);
        });
    } else {
        showReasons();
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[questionIndex].answer;
    if (selectedOption === correctAnswer) {
        score += 2; // Each correct answer adds 2 points
    }
    questionIndex++;
    showQuestion();
}

function showReasons() {
    questionContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreText.textContent = `For each correct answer you got 2 points. You got a score of ${score / 2}! So here are ${score} reasons why I love you <3:`;

    // Display reasons based on score
    reasonsElement.innerHTML = reasons.slice(0, score).map((reason, index) => `<p>${index + 1}. ${reason}</p>`).join('');
}

// Start button event
startButton.onclick = startGame;
