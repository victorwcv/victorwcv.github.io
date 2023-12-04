

let showingMenu = false;
const menu = document.getElementById("nav");
const interests = document.getElementsByClassName('interests');
const interestsContainer = document.getElementById('interests-container')
let pos = 0;
const header = document.querySelector('.header-container')

//Efecto de nav-bar

window.addEventListener("scroll", function() {
  if (window.scrollY >= document.documentElement.clientHeight / 8) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//efecto de intereses

function toggle(pos) {
  if (pos < 0) return;
  interests[pos].classList.add('active');
}

function move() {
  if (pos >= interests.length) return;
  toggle(pos);
  toggle(pos - 1);
  pos += 1;
  setTimeout(move, 300);
}

// Crear un observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      move();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observar el elemento 'interestsContainer'
observer.observe(interestsContainer);

//funcion que muestra y oculta nav-bar en dispositivos pequ.

function showHideMenu() {
  if (showingMenu) {
    menu.classList = "";
    showingMenu = false;
  } else {
    menu.classList = "responsive";
    showingMenu = true;
  }
}

function select() {
  menu.classList = "";
  showingMenu = false;
}






