const uploadInput = document.querySelector("#input-upload");

const uploadButton = document.querySelector(".contacts-form__file");

const imgSlider = document.querySelector(".product__slider");
const photos = imgSlider.querySelectorAll("img");

const mobMenuButton = document.querySelector(".header__burger-menu");
const mobMenu = document.querySelector(".mobile-menu");
const mobMenuClose = document.querySelector(".mobile-menu__close");

mobMenuButton.addEventListener("click", openMobMenu);
mobMenuClose.addEventListener("click", closeMobMenu);

//Catalog description
const productTab = document.querySelector(".product__tab");
const productTabTitle = document.querySelector(".product__tab-title");

productTabTitle.addEventListener("click", toggleTab);

//Header apply btn
const headerApplyButton = document.querySelector(".header-nav__apply-btn");
const mobileHeaderApplyButton = document.querySelector(
  ".mobile-menu__apply-btn"
);
const headerModal = document.querySelector(".header-modal");
const modalClose = document.querySelector(".header-modal__close");
const overlay = document.getElementById("overlay");

//Header apply handlers
headerApplyButton.addEventListener("click", showModal);
mobileHeaderApplyButton.addEventListener("click", showModal);
modalClose.addEventListener("click", hideModal);

photos.forEach((photo) => {
  photo.addEventListener("mouseover", changeImg);
});

uploadButton.addEventListener("click", initUpload);

function initUpload() {
  uploadInput.click();
}

function changeImg(event) {
  const image = document.querySelector(".main-photo");

  image.src = event.target.src;
}

function openMobMenu() {
  mobMenu.classList.add("active");
  document.body.classList.add("noscroll");
}

function closeMobMenu() {
  mobMenu.classList.remove("active");
  document.body.classList.remove("noscroll");
}

function showModal() {
  headerModal.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("noscroll");
}

function hideModal() {
  headerModal.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("noscroll");
}

function toggleTab() {
  productTab.querySelector(".product__tab-show").classList.toggle("active");
}


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