const mobMenuButton = document.querySelector(".header__burger-menu");
const mobMenu = document.querySelector(".mobile-menu");
const mobMenuClose = document.querySelector(".mobile-menu__close");

//Header apply btn
const headerApplyButton = document.querySelector(".header-nav__apply-btn")
const headerModal = document.querySelector(".header-modal");
const modalClose = document.querySelector(".header-modal__close");
const overlay = document.getElementById("overlay");

window.addEventListener("scroll", changeNavBar);
window.addEventListener("DOMContentLoaded", checkNavBar);
mobMenuButton.addEventListener("click", openMobMenu);
mobMenuClose.addEventListener("click", closeMobMenu);

//Header apply hadler
headerApplyButton.addEventListener("click", showModal);
modalClose.addEventListener("click", hideModal);

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

function showModal(){
  headerModal.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("noscroll");
}

function hideModal(){
  headerModal.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("noscroll");
}