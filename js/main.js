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
