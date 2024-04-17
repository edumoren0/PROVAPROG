if (localStorage.getItem('feedback-message')) {
			
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.textContent = localStorage.getItem('feedback-message');

    
    setTimeout(() => {
        localStorage.removeItem('feedback-message');
        feedbackMessage.textContent = '';
    }, 5000);
}


const feedbackForm = document.getElementById('feedback-form');
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    
    const feedback = {
        nome,
        email,
        mensagem,
        data: new Date()
    };
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.textContent = 'Obrigado pelo seu feedback!';

    
    feedbackForm.reset();
});