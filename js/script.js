var isReading = false;

function readText() {
    var tourDescription = document.getElementById("tourDescription").textContent;
    var speech = new SpeechSynthesisUtterance(tourDescription);
    
    
    window.speechSynthesis.speak(speech);
    
    
    isReading = true;
    
    
    speech.onend = function() {
        isReading = false;
    };
}


function stopReading() {
    
    if (isReading) {
        
        window.speechSynthesis.cancel();
       
        isReading = false;
    }
}

document.getElementById("readButton").addEventListener("click", readText);

document.getElementById("stopButton").addEventListener("click", stopReading);
