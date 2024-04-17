// Variável global para controlar o estado da leitura
var isReading = false;

// Função para ler o texto em voz alta
function readText() {
    var tourDescription = document.getElementById("tourDescription").textContent;
    var speech = new SpeechSynthesisUtterance(tourDescription);
    
    // Iniciar a leitura do texto
    window.speechSynthesis.speak(speech);
    
    // Alterar o estado da leitura para verdadeiro
    isReading = true;
    
    // Adicionar um evento de fim de fala para atualizar o estado da leitura
    speech.onend = function() {
        isReading = false;
    };
}

// Função para parar a leitura
function stopReading() {
    // Verificar se a leitura está ocorrendo
    if (isReading) {
        // Parar a leitura
        window.speechSynthesis.cancel();
        // Atualizar o estado da leitura para falso
        isReading = false;
    }
}

// Adicionando o evento de clique ao botão de leitura
document.getElementById("playButton").addEventListener("click", readText);

// Adicionando o evento de clique ao botão de parar leitura
document.getElementById("stopButton").addEventListener("click", stopReading);

