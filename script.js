const messages = [
    "Respire fundo e relaxe...",
    "Feche os olhos lentamente...",
    "Gente Bonita dorme cedooooo...",
    "vai Corinthians",
    "237.....",
    "Sinta seu corpo ficando mais leve...",
    "Deixe todos os pensamentos irem embora...",
    "Você está se sentindo cada vez mais relaxado...",
    "A cada respiração, você fica mais calmo...",
    "Agora, você está pronto para dormir..."
];

let index = 0;
const messageElement = document.getElementById('message');
const audioElement = document.getElementById('relaxingMusic');

function showNextMessage() {
    if (index < messages.length) {
        messageElement.textContent = messages[index];
        index++;
        setTimeout(showNextMessage, 5000);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    audioElement.play();
    showNextMessage();
});
