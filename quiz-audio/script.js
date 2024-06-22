const correctAnswer = "luiza só complica a nossa vida"; // Replace with the actual correct answer

function checkAnswer() {
    const userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer.toLowerCase()) {
        feedback.innerHTML = "<span style='color: green;'>Sim, a Luiza só complica mesmo.</span>";
    } else {
        feedback.innerHTML = `<span style='color: red;'>Incorreto, a culpa é da Luiza. A resposta correta é: "${correctAnswer}".</span>`;
    }
}