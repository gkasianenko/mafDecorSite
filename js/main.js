import categoryPage from "./pages/category-ledders.js";


const state = {};

//для теста, потом стереть

window.state = state;

categoryPage(state);

const uploadInput = document.querySelector("#input-upload");

const uploadButton = document.querySelector(".contacts-form__file");


uploadButton.addEventListener("click", initUpload);

function initUpload(){
    uploadInput.click();
}


window.addEventListener("scroll", changeNavBar);

function changeNavBar(){
    let header = document.querySelector("header");
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('header-scroll-active', windowPosition);
}