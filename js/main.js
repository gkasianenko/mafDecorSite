import categoryPage from "./pages/category-ledders.js";

const state = {};

//для теста

window.state = state;

categoryPage(state);

const uploadInput = document.querySelector("#input-upload");

const uploadButton = document.querySelector(".contacts-form__file");

const overlay = document.getElementById("overlay");

//Mobmenu vars
const mobMenuButton = document.querySelector(".header__burger-menu");
const mobMenu = document.querySelector(".mobile-menu");
const mobMenuClose = document.querySelector(".mobile-menu__close");

//Mobmenu funcs
mobMenuButton.addEventListener("click", openMobMenu);
mobMenuClose.addEventListener("click", closeMobMenu);

uploadButton.addEventListener("click", initUpload);

function initUpload() {
  uploadInput.click();
}

window.addEventListener("scroll", changeNavBar);

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

//Mobfilter vars

const mobFilterIcon = document.querySelector(".catalog-pattern__mobile-icon");
const mobFilterCloseIcon = document.querySelector(".catalog-pattern__close-btn");
const mobFilter = document.querySelector(".catalog-pattern__mobile-filter");

mobFilterIcon.addEventListener("click", showMobFilter);
mobFilterCloseIcon.addEventListener("click", closeMobFilter);

//Mobfilter funcs

function showMobFilter() {
  overlay.classList.add("active");

  mobFilter.classList.add("active");

  document.body.classList.add("noscroll");
}

function closeMobFilter() {
  overlay.classList.remove("active");

  mobFilter.classList.remove("active");

  document.body.classList.remove("noscroll");
}
