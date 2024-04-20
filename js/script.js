//vai ser a mesma coisa que no catalogo
//variavel global para controlar o estado da leitura
var isReading = false;

// função para ler o texto em voz alta, que vai ser a narração dos ponto de info
function readText() {
    var tourDescription = document.getElementById("tourDescription").textContent;
    var speech = new SpeechSynthesisUtterance(tourDescription);

    //inicia a leitura do text
    speech.lang = "pt-BR";
    window.speechSynthesis.speak(speech);
    
    //estado da leitura pra verdadeiro
    isReading = true;
    
     //adiciona um evento de fim de fala para att o estado da leitura
    speech.onend = function() {
        isReading = false;
    };
}

// função para parar a leitura
function stopReading() {
    // verifica se a leitura está ocorrendo
    if (isReading) {
        // para a leitura
        window.speechSynthesis.cancel();
        // att o estado da leitura para falso
        isReading = false;
    }
}

// adicionando o clique ao botão de leitura
document.getElementById("readButton").addEventListener("click", readText);

// adicionando o clique ao botão de parar leitura
document.getElementById("stopButton").addEventListener("click", stopReading);