//verifica se foi enviado
if (localStorage.getItem('feedback-message')) {

			//mostra a mensagem do feedbakc
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.textContent = localStorage.getItem('feedback-message');

    //limpa a mensagem de feedback apos 5 sec
    setTimeout(() => {
        localStorage.removeItem('feedback-message');
        feedbackMessage.textContent = '';
    }, 5000);
}

//enviar o formulario de feedback
const feedbackForm = document.getElementById('feedback-form');
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //vai pegar os valores dos campos do feedback
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    //salva o feedback no localstorage
    const feedback = {
        nome,
        email,
        mensagem,
        data: new Date()
    };
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    //mostra a mensagem de feedback
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.textContent = 'Obrigado pelo seu feedback!';

    //limpa os campo que foi preenchido
    feedbackForm.reset();
});