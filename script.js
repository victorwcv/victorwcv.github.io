// function that show and hide menu

let showingMenu = false;
const menu = document.getElementById("nav");

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
