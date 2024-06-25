const quizData = [
    {
        audio: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2024/html/quiz/audio/brasilxangola/midia/Dikamba.mp3",
        question: "“Dikamba”",
        options: ["Cambada", "Cambalear", "Samba"],
        correct: "Cambada",
        explanation: "“Cambada” vem da palavra “dikamba”, que significa “amigo ou companheiro” na língua kimbundu."
    },
    {
        audio: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2024/html/quiz/audio/brasilxangola/midia/Kubanga.mp3",
        question: "“Kubanga”",
        options: ["Capanga", "Fubanga", "Miçanga"],
        correct: "Capanga",
        explanation: "“Capanga” vem do termo “kubanga”, que significa “lutar” na língua kimbundu. Em kikongo, é “o que é torto”."
    },
    {
        audio: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2024/html/quiz/audio/brasilxangola/midia/Kubaba.mp3",
        question: "“Kubaba”",
        options: ["Babá", "Baba", "Cuba (de banheiro)"],
        correct: "Babá",
        explanation: "“Babá” vem do verbo “kubaba”, que, em kimbundu, significa “acalentar ou embalar uma criança para dormir”."
    },
    {
        audio: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2024/html/quiz/audio/brasilxangola/midia/Mbalale.mp3",
        question: "“Mbalale”",
        options: ["Beleléu", "Bailar", "Balada"],
        correct: "Beleléu",
        explanation: "“Beleléu” vem de “mbalale”, que, em kimbundu, significa “sepultar” ou “cemitério”, “o lugar onde se enterram as pessoas”."
    },
    {
        audio: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2024/html/quiz/audio/brasilxangola/midia/kisambu.mp3",
        question: "“Kisambu”",
        options: ["caçamba", "bagunça", "escambo"],
        correct: "caçamba",
        explanation: "“Caçamba” vem de “kisambu”, que, em kimbundu, significa “cesto grande”."
    },
    {
        audio: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2024/html/quiz/audio/brasilxangola/midia/kazuli.mp3",
        question: "“Kazuli”",
        options: ["caçula", "casulo", "casual"],
        correct: "caçula",
        explanation: "“Caçula” vem de “kazuli”, que, em kimbundu, significa “o último da família”."
    }
];

const finalChallenges = [
    {
        audio: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2024/html/quiz/audio/brasilxangola/midia/Ndengu.mp3",
        question: "“Ndengu”",
        type: "text",
        correct: "Dengo",
        explanation: "“Dengo” vem da palavra “ndengu”, que significa “doçura, carinho e atenção” na língua kikongo (ou em kimbundu, em algumas fontes)."
    },
    {
        audio: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2024/html/quiz/audio/brasilxangola/midia/Mvuka.mp3",
        question: "“Mvuka”",
        type: "text",
        correct: "Muvuca",
        explanation: "“Muvuca” vem da palavra “mvuka”, que significa “aglomeração” em kikongo."
    }
];

let currentQuestion = 0;
let score = 0;
let shuffledQuizData;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initializeQuiz() {
    shuffledQuizData = shuffle([...quizData]);
    showQuestion();
}

function showQuestion() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    let item;
    if (currentQuestion < shuffledQuizData.length) {
        item = shuffledQuizData[currentQuestion];
    } else {
        item = finalChallenges[currentQuestion - shuffledQuizData.length];
    }

    const quizItem = document.createElement('div');
    quizItem.classList.add('quiz-item');

    const question = document.createElement('p');
    question.classList.add('quiz-question');
    question.textContent = `${currentQuestion + 1}. ${item.question}`;
    quizItem.appendChild(question);

    if (item.audio) {
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = item.audio;
        quizItem.appendChild(audio);
    }

    if (item.type === 'text') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `answer${currentQuestion}`;
        quizItem.appendChild(input);
        document.getElementById('submit-btn').style.display = 'inline-block';
        document.getElementById('next-btn').style.display = 'none'; // Ocultar botão próxima aqui
    } else {
        const shuffledOptions = shuffle([...item.options]);

        shuffledOptions.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${currentQuestion}`;
            input.value = option;
            input.onchange = () => { document.getElementById('next-btn').style.display = 'inline-block'; }; // Mostrar botão próxima ao selecionar uma opção
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            quizItem.appendChild(label);
        });
        document.getElementById('submit-btn').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none'; // Ocultar botão próxima inicialmente
    }

    quizContainer.appendChild(quizItem);

    document.getElementById('progress').textContent = `Pergunta ${currentQuestion + 1} de ${quizData.length + finalChallenges.length}`;
    document.getElementById('result').textContent = '';
}


function checkAnswer() {
    const item = currentQuestion < shuffledQuizData.length ? shuffledQuizData[currentQuestion] : finalChallenges[currentQuestion - shuffledQuizData.length];
    let userAnswer = '';

    if (item.type === 'text') {
        userAnswer = document.getElementById(`answer${currentQuestion}`).value.trim();
        document.getElementById('next-btn').style.display = 'inline-block'; // Mostrar botão próxima para questões de texto
    } else {
        const selectedOption = document.querySelector(`input[name="question${currentQuestion}"]:checked`);
        if (selectedOption) {
            userAnswer = selectedOption.value;
        }
    }

    const resultContainer = document.getElementById('result');
    const labels = document.querySelectorAll(`input[name="question${currentQuestion}"] + label`);

    if (userAnswer.toLowerCase() === item.correct.toLowerCase()) {
        score++;
        resultContainer.textContent = `Correto! ${item.explanation}`;
        resultContainer.classList.add('correct-answer');
    } else {
        resultContainer.textContent = `Errado! ${item.explanation}`;
        resultContainer.classList.add('wrong-answer');
    }

    labels.forEach(label => {
        if (label.textContent.trim().toLowerCase() === item.correct.toLowerCase()) {
            label.classList.add('correct-answer');
        } else if (label.previousElementSibling.checked) {
            label.classList.add('wrong-answer');
        }
    });

    // Disable inputs to prevent changing answers
    document.querySelectorAll('input').forEach(input => {
        input.disabled = true;
    });
}


function nextQuestion() {
    const resultContainer = document.getElementById('result');
    resultContainer.classList.remove('correct-answer', 'wrong-answer');

    if (currentQuestion < quizData.length + finalChallenges.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        if (score === quizData.length + finalChallenges.length) {
            confettiExplosion();
        }

        resultContainer.innerHTML = `Quiz concluído! Você acertou ${score} de ${quizData.length + finalChallenges.length} questões.`;
        document.getElementById('quiz').innerHTML = '';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('progress').style.display = 'none';
        document.getElementById('submit-btn').style.display = 'none';
    }
}


function confettiExplosion() {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

window.onload = () => {
    initializeQuiz();
    document.getElementById('quiz').addEventListener('change', checkAnswer);
    document.getElementById('next-btn').addEventListener('click', nextQuestion); // Certifique-se de que esta linha está correta
};
