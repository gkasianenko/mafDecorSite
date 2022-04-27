const uploadInput = document.querySelector("#input-upload");

const uploadButton = document.querySelector(".contacts-form__file");

const imgSlider = document.querySelector(".product__slider");
const photos = imgSlider.querySelectorAll("img");

const mobMenuButton = document.querySelector(".header__burger-menu");
const mobMenu = document.querySelector(".mobile-menu");
const mobMenuClose = document.querySelector(".mobile-menu__close");

mobMenuButton.addEventListener("click", openMobMenu);
mobMenuClose.addEventListener("click", closeMobMenu);

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
}

function closeMobMenu() {
  mobMenu.classList.remove("active");
}
