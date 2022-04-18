const mobMenuButton = document.querySelector(".header__burger-menu");
const mobMenu = document.querySelector(".mobile-menu");
const mobMenuClose = document.querySelector(".mobile-menu__close");

window.addEventListener("scroll", changeNavBar);
mobMenuButton.addEventListener("click", openMobMenu);
mobMenuClose.addEventListener("click", closeMobMenu);

function changeNavBar() {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("header-scroll-active", windowPosition);
}

function openMobMenu() {
  mobMenu.classList.add("active");
}

function closeMobMenu() {
  mobMenu.classList.remove("active");
}
