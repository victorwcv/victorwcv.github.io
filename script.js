//Scroll de pagina completa

const buttons = document.querySelectorAll('.button');
const pages = document.querySelectorAll('.page');
let currentPage = 0;
let isScrolling = false;

buttons[0].classList.add('active');


function scrollToPageButton(index) {
    
    if(index === 1) {
        buttons[1].classList.add('active');
        buttons[0].classList.remove('active')
    } else {
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active')
        
    };
    
    
    const yOffset = pages[index].offsetTop;
    window.scrollTo({ top: yOffset, behavior: 'smooth' }); 
}

document.addEventListener('wheel', (event) => {
    if (isScrolling) return;
    isScrolling = true;

    if (event.deltaY > 0 && currentPage < pages.length - 1) {
        currentPage++;
        
    } else if (event.deltaY < 0 && currentPage > 0) {
        currentPage--;
    }
    
    scrollToPageWheel(currentPage);
});

function scrollToPageWheel(index) {
    const yOffset = pages[index].offsetTop;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });

    if(index === 1) {
        buttons[1].classList.add('active');
        buttons[0].classList.remove('active')
    } else {
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active')
        
    };
    
    setTimeout(() => {
        isScrolling = false;
    }, 500);
}







