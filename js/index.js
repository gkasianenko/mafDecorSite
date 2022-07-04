const mobMenuButton = document.querySelector(".header__burger-menu");
const mobMenu = document.querySelector(".mobile-menu");
const mobMenuClose = document.querySelector(".mobile-menu__close");

//Header apply btn
const headerApplyButton = document.querySelector(".header-nav__apply-btn");
const mobileHeaderApplyButton = document.querySelector(
  ".mobile-menu__apply-btn"
);
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
mobileHeaderApplyButton.addEventListener("click", showModal);

//Header scroll hide
const header = document.querySelector("header");
let prevScroll = window.scrollY || document.scrollTop;

let curScroll;
let direction = 0;
let prevDirection = 0;

window.addEventListener("scroll", hasScrolled);

function toggleHeader() {
  if (direction === 2 && curScroll > 100) {
    //replace 100 with the height of your header in px

    header.classList.add("nav-up");
    prevDirection = direction;
  } else if (direction === 1) {
    header.classList.remove("nav-up");
    prevDirection = direction;
  }
}

function hasScrolled() {
  curScroll = window.scrollY || document.scrollTop;

 
  if (curScroll > prevScroll) {
    
    //scrolled up
    direction = 2;
  } else if (curScroll < prevScroll) {
    //scrolled down
    direction = 1;
  }

  if (direction !== prevDirection) {
    toggleHeader(direction, curScroll);
  }

  prevScroll = curScroll;
  
}

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
  document.body.classList.add("noscroll");
  overlay.classList.add("active");
}

function closeMobMenu() {
  mobMenu.classList.remove("active");
  document.body.classList.remove("noscroll");
  overlay.classList.remove("active");
}

function showModal() {
  headerModal.classList.add("active");
  overlay.classList.add("active-modal");
  document.body.classList.add("noscroll");
}

function hideModal() {
  headerModal.classList.remove("active");
  overlay.classList.remove("active-modal");
 
}
