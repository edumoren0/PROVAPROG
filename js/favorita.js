// add clique ao botão de favoritar
document.getElementById("favorite-button").addEventListener("click", function() {
    // define a chave de armazem local para este tour
    var tourKey = "tour_sala_de_aula_favorito";
    var messageElement = document.getElementById("favorite-message");

    // verifica se o tour já foi favoritado
    if (localStorage.getItem(tourKey)) {
        messageElement.textContent = "Este tour já está favoritado!";
    } else {
        // armazena no localStorage que este tour foi favoritado
        localStorage.setItem(tourKey, true);
        messageElement.textContent = "Tour favoritado com sucesso!";
    }
});
