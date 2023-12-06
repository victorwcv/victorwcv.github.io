let showingMenu = false;
const menu = document.getElementById("nav");
const interests = document.getElementsByClassName("interests");
const interestsContainer = document.getElementById("interests-container");
const header = document.querySelector(".header-container");
let pos = 0;

//nav-var animation
window.addEventListener("scroll", function () {
  if (window.scrollY >= document.documentElement.clientHeight / 8) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//Interests animation
function toggle(pos) {
  if (pos < 0) return;
  interests[pos].classList.add("active");
}

function move() {
  if (pos >= interests.length) return;
  toggle(pos);
  toggle(pos - 1);
  pos += 1;
  setTimeout(move, 300);
}

//Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        move();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);


observer.observe(interestsContainer);

//show and hide nav-bar in small devices
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
