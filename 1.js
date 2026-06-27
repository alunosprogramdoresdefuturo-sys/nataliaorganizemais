// --- MENSAGEM DINÂMICA DE BOAS-VINDAS ---
const welcomeMsg = document.getElementById('welcome-msg');
const horaAtual = new Date().getHours();

if (horaAtual < 12) {
    welcomeMsg.textContent = "Bom dia! Comece o seu dia planejando com calma.";
} else if (horaAtual < 18) {
    welcomeMsg.textContent = "Boa tarde! Mantenha o foco e lembre-se das pausas.";
} else {
    welcomeMsg.textContent = "Boa noite! Hora de desacelerar e organizar o amanhã.";
}

// --- LÓGICA DO POMODORO ---
let timer;
let timeLeft = 25 * 60; // 25 minutos em segundos
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            alert("Hora de uma pausa para o seu bem-estar!");
            timeLeft = 5 * 60; // Muda automaticamente para 5 min de pausa
            updateDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
}

// Event Listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Inicializa o display
updateDisplay();