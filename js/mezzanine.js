const uploadInput = document.querySelector("#input-upload");

const uploadButton = document.querySelector(".contacts-form__file");
//Header apply btn
const headerApplyButton = document.querySelector(".header-nav__apply-btn");
const mobileHeaderApplyButton = document.querySelector(
  ".mobile-menu__apply-btn"
);
const headerModal = document.querySelector(".header-modal");
const modalClose = document.querySelector(".header-modal__close");
const overlay = document.getElementById("overlay");

//Mobmenu vars
const mobMenuButton = document.querySelector(".header__burger-menu");
const mobMenu = document.querySelector(".mobile-menu");
const mobMenuClose = document.querySelector(".mobile-menu__close");

//Mobmenu funcs
mobMenuButton.addEventListener("click", openMobMenu);
mobMenuClose.addEventListener("click", closeMobMenu);

uploadButton.addEventListener("click", initUpload);

//Header apply handlers
headerApplyButton.addEventListener("click", showModal);
mobileHeaderApplyButton.addEventListener("click", showModal);
modalClose.addEventListener("click", hideModal);

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

const swiper = new Swiper(".mySwiper", {
  
  slidesPerView: 3, // or 'auto'
      
      spaceBetween: 30,
      slidesPerView: 1,
          grid:{
            rows: 1,
            fill: "row"
          },
     
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        911: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: "row"
          },
          navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          },
        }
      },
  
});


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