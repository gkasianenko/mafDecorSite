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

//Mobmenu funcs
mobMenuButton.addEventListener("click", openMobMenu);
mobMenuClose.addEventListener("click", closeMobMenu);


uploadButton.addEventListener("click", initUpload);

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

  if (isChecked(kindRow)) {
    catalogButton.style.top = "465px";
  } else if (!isChecked(kindRow)) {
    catalogButton.style.top = "465px";
  }

  if (isChecked(kindRow) && isChecked(typeRow)) {
    catalogButton.style.top = "845px";
  }

  if (isChecked(kindRow) && isChecked(typeRow) && isChecked(carcasTypeRow)) {
    catalogButton.style.top = "1370px";
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

  console.log(inputValues)

  localStorage.setItem("inputValues", JSON.stringify(inputValues));
}


function openMobMenu() {
  mobMenu.classList.add("active");
}

function closeMobMenu() {
  mobMenu.classList.remove("active");
}
