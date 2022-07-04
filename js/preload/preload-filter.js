const typeRow = document.querySelector(".leaders-filter__categories-row");

const kindRow = document.querySelector(".leaders-filter__types-row");

const carcasTypeRow = document.querySelector(".leaders-filter__carcases-row");

const items = document.querySelectorAll(".leaders-filter__item");

const catalogButton = document.querySelector(".button.button--catalog");
//positionCatalogButton);

const uploadInput = document.querySelector("#input-upload");

const uploadButton = document.querySelector(".contacts-form__file");

const forwardButton = document.querySelector(".button--catalog");

const localData = [];

//Mobmenu vars
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

//Mobmenu funcs
mobMenuButton.addEventListener("click", openMobMenu);
mobMenuClose.addEventListener("click", closeMobMenu);

uploadButton.addEventListener("click", initUpload);

//Header apply handlers
headerApplyButton.addEventListener("click", showModal);
modalClose.addEventListener("click", hideModal);
mobileHeaderApplyButton.addEventListener("click", showModal);

function initUpload() {
  uploadInput.click();
}

forwardButton.addEventListener("click", saveParams);

items.forEach((item) => {
  item.addEventListener("change", positionCatalogButton);
});

function setUpLS() {
  if (!localStorage) {
    localStorage.setItem("inputValues", JSON.stringify(localData));
  }
}

function positionCatalogButton(event) {
  event.stopPropagation();

  const windowWidth = window.innerWidth;

  if (!isChecked(kindRow)) {
    if (windowWidth > 1199) {
      catalogButton.style.top = "465px";
    } else if (910 <= windowWidth && windowWidth <= 1199) {
      catalogButton.style.top = "375px";
    } else if (600 <= windowWidth && windowWidth <= 909) {
      catalogButton.style.top = "244px";
    } else if (395 <= windowWidth && windowWidth <= 599) {
      catalogButton.style.top = "153px";
    } else if (windowWidth <= 394) {
      catalogButton.style.top = "145px";
    }
  }

  if (isChecked(kindRow)) {
    if (windowWidth > 1199) {
      catalogButton.style.top = "465px";
    } else if (910 <= windowWidth && windowWidth <= 1199) {
      catalogButton.style.top = "375px";
    } else if (600 <= windowWidth && windowWidth <= 909) {
      catalogButton.style.top = "244px";
    } else if (395 <= windowWidth && windowWidth <= 599) {
      catalogButton.style.top = "153px";
    } else if (windowWidth <= 394) {
      catalogButton.style.top = "145px";
    }
  }

  if (isChecked(kindRow) && isChecked(typeRow)) {
    if (windowWidth > 1199) {
      catalogButton.style.top = "845px";
    } else if (910 <= windowWidth && windowWidth <= 1199) {
      catalogButton.style.top = "720px";
    } else if (600 <= windowWidth && windowWidth <= 909) {
      catalogButton.style.top = "875px";
    } else if (395 <= windowWidth && windowWidth <= 599) {
      catalogButton.style.top = "645px";
    } else if (windowWidth <= 394) {
      catalogButton.style.top = "625px";
    }
  }

  if (isChecked(kindRow) && isChecked(typeRow) && isChecked(carcasTypeRow)) {
    if (windowWidth > 1199) {
      catalogButton.style.top = "1410px";
    } else if (910 <= windowWidth && windowWidth <= 1199) {
      catalogButton.style.top = "1205px";
    } else if (600 <= windowWidth && windowWidth <= 909) {
      catalogButton.style.top = "1280px";
    } else if (395 <= windowWidth && windowWidth <= 599) {
      catalogButton.style.top = "975px";
    } else if (windowWidth <= 394) {
      catalogButton.style.top = "960px";
    }
  }

  selectedItemStyle(event.target);
}

function isChecked(row) {
  let isChecked = false;

  const items = row.querySelectorAll(".leaders-filter__item");

  items.forEach((item) => {
    const input = item.querySelector("input");

    if (input.checked === true) {
      isChecked = true;
    }
  });

  return isChecked;
}

function getInputData(row) {
  const inputData = [];

  const items = row.querySelectorAll(".leaders-filter__item");

  items.forEach((item) => {
    const input = item.querySelector("input");

    if (input.checked === true) {
      inputData.push(input.dataset.name);
    }
  });

  return inputData;
}

function selectedItemStyle(item) {
  const element = item.closest("div");
  const img = element.querySelector(".leaders-filter__img");
  const parent = element.parentElement;

  const items = parent.querySelectorAll(".leaders-filter__item");

  items.forEach((item) => {
    item.querySelector(".leaders-filter__img").classList.remove("active");
  });

  img.classList.add("active");
}

function saveParams() {
  const inputValues = [
    ...getInputData(kindRow),
    ...getInputData(typeRow),
    ...getInputData(carcasTypeRow),
  ];

  console.log(inputValues);

  localStorage.setItem("inputValues", JSON.stringify(inputValues));
}

function openMobMenu() {
  mobMenu.classList.add("active");
  document.body.classList.add("noscroll");
  overlay.classList.add("active");
}

function closeMobMenu() {
  mobMenu.classList.remove("active");
  document.body.classList.remove("noscroll");
  overlay.classList.remove("active");
}

function showModal() {
  headerModal.classList.add("active");
  overlay.classList.add("active-modal");
  document.body.classList.add("noscroll");
}

function hideModal() {
  headerModal.classList.remove("active");
  overlay.classList.remove("active-modal");
  
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