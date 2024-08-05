const messages = [
    "Respire fundo e relaxe...",
    "vai Corinthians",
    "Feche os olhos lentamente...",
    "Gente Bonita dorme cedooooo...",
    "237.....",
    "bielzao lindooooooo",
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

document.getElementById('emergencyButton').addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/intl-pt/track/3lT2haeJ7ype7nCJrV96nI?si=2e7e444541734db1';
});