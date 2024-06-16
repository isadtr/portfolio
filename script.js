document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

\*const texts = ['Bem-vindo à Nossa Landing Page!', 'Oferecemos os melhores serviços!', 'Entre em contato conosco!'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('#typing-effect').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // Pausa de 2 segundos antes de começar a próxima frase
  } else {
    setTimeout(type, 100); // Velocidade da digitação
  }
})();*/
