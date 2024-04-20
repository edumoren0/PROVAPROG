// slider de imagem 
const slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;

// Espera tudo carregar antes de aparecer as imagens 
document.addEventListener("DOMContentLoaded", initializeSlider)


function initializeSlider(){
    // se imagem for maior que zero, chama essa função aq
    if (slides.length > 0) {
    slides[slideIndex].classList.add("displayslide");
    intervalId = setInterval(prox_slide, 20000);
    }
}

function aparecaslide(index){
    // se o index for maior que o numero de slide(imagens)
    if(index >= slides.length){
        slideIndex = 0; // vai voltar a ser zero, voltando pra primeira img

    }
    else if(index < 0 ){
        slideIndex = slides.length - 1; // se tiver no primeiro slide isso vai trazer para o ultimos slide, fazendo um loop

    }

    // se mover para o proximo slide, deletara a imagem antiga, dai nn vai ficar duas img junta
    slides.forEach(slide => {
        slide.classList.remove("displayslide");
    })
    slides[slideIndex].classList.add("displayslide");


}
//funçao que diminui o numero do index (slide anterior)
function ante_slide(){
    clearInterval(intervalId);
    slideIndex--;
    aparecaslide(slideIndex);

}
//funçao q aumenta o numero do index (prox slide)
function prox_slide(){
    clearInterval(intervalId);
    slideIndex++;
    aparecaslide(slideIndex);


}