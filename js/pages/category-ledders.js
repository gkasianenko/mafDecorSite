import filter from "./../category-filter/filterController.js";

export default function(state){
    filter(state);
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