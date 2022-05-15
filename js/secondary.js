const uploadInput = document.querySelector("#input-upload");

const uploadButton = document.querySelector(".contacts-form__file");

const imgSlider = document.querySelector(".product__slider");
const photos = imgSlider.querySelectorAll("img");

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

mobMenuButton.addEventListener("click", openMobMenu);
mobMenuClose.addEventListener("click", closeMobMenu);

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
