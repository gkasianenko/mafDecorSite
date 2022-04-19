const uploadInput = document.querySelector("#input-upload");

const uploadButton = document.querySelector(".contacts-form__file");

const imgDiv = document.querySelector('.product__main-photo');

const mobMenuButton = document.querySelector(".header__burger-menu");
const mobMenu = document.querySelector(".mobile-menu");
const mobMenuClose = document.querySelector(".mobile-menu__close");

mobMenuButton.addEventListener("click", openMobMenu);
mobMenuClose.addEventListener("click", closeMobMenu);


imgDiv.addEventListener("click", changeImg)

uploadButton.addEventListener("click", initUpload);

function initUpload(){
    uploadInput.click();
}

function changeImg() {
    const image = document.querySelector('.main-photo');

    if (image.src.match("./img/product/main.jpg")) {
        image.src = "./img/product/sub-1.jpg";
        return;
    }

    if (image.src.match("./img/product/sub-1.jpg")){
        image.src = "./img/product/sub-2.jpg";
        return;
    }
    
    if(image.src.match("./img/product/sub-2.jpg")){
        image.src = "./img/product/sub-3.jpg";
        return;
    }

    if(image.src.match("./img/product/sub-3.jpg")){
        image.src = "./img/product/sub-4.jpg";
        return;
    }

    if(image.src.match("./img/product/sub-4.jpg")){
        image.src = "./img/product/main.jpg";
        return;
    }


}

function openMobMenu() {
    mobMenu.classList.add("active");
  }
  
  function closeMobMenu() {
    mobMenu.classList.remove("active");
  }
  
