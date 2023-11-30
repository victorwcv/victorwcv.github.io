

const buttons = document.querySelectorAll('.button');
const pages = document.querySelectorAll('.page');
let currentPage = 0;

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentPage = index;
    scrollToPageButton(currentPage);
    button.classList.add('active');

    // Eliminar la clase 'active' después de 1 segundo (1000 milisegundos)
    setTimeout(() => {
      button.classList.remove('active');
    }, 400);
  });
});

function scrollToPageButton(index) {
  const yOffset = pages[index].offsetTop;
  window.scrollTo({ top: yOffset, behavior: 'smooth' });
}

window.addEventListener('load', () => {
  const savedPage = localStorage.getItem('currentPage');
  if (savedPage !== null) {
    currentPage = parseInt(savedPage);
    scrollToPageButton(currentPage);
  } else {
    buttons[0].classList.add('active');
  }
});


