const mobMenuButton = document.querySelector(".header__burger-menu");
const mobMenu = document.querySelector(".mobile-menu");
const mobMenuClose = document.querySelector(".mobile-menu__close");

window.addEventListener("scroll", changeNavBar);
window.addEventListener("DOMContentLoaded", checkNavBar);
mobMenuButton.addEventListener("click", openMobMenu);
mobMenuClose.addEventListener("click", closeMobMenu);

function changeNavBar() {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("header-scroll-active", windowPosition);
}

function checkNavBar() {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY;
  if (windowPosition > 0) {
    header.classList.add("header-scroll-active", windowPosition);
  }
}

function openMobMenu() {
  mobMenu.classList.add("active");
}

function closeMobMenu() {
  mobMenu.classList.remove("active");
}
