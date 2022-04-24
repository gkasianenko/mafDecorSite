import * as view from "./filterView.js";
import Filter from "./filterModel.js";

export default async function (state) {
  //Создание объекта фильтра
  if (!state.filter) {
    state.filter = new Filter();
  }

  //Параметры фильтра
  await state.filter.getParams();

  view.render(state.filter.params);

  await state.filter.getResults();

  //Пречек чекбоксов из локал сторедж
  const checkboxes = view.filter.querySelectorAll("input[type='checkbox']");
  const checkboxesMobile = view.filterMobile.querySelectorAll(
    "input[type='checkbox']"
  );

  view.filterCheckInputs(checkboxes);
  view.filterCheckInputs(checkboxesMobile);

  //прослушка формы
  view.filter.addEventListener("change", filterCards);
  view.filterMobile.addEventListener("change", filterCards);

  //Прослушка чекбоксов

  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", resetPageNumber)
  );

  checkboxesMobile.forEach((checkbox) =>
    checkbox.addEventListener("click", resetPageNumber)
  );

  //Рендер всех карточек первичный
  view.populateCards(state.filter.results);
  filterCards();

  //прослушка кнопки "показать еще"

  view.showMoreButton.addEventListener("click", expandProducts);

  //Прослушка кнопки сворачивания фильтра
  const hideFilterButton = document.querySelectorAll(
    ".catalog-pattern__show .filter-show"
  );

  const filterContent = document.querySelectorAll(".catalog-pattern__inner");

  hideFilterButton.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterContent.forEach((el) => {
        el.classList.toggle("show");
      });

      if (!filterContent.classList.contains("show")) {
        hideFilterButton.forEach((btn) => {
          btn.innerHTML = "";

          btn.insertAdjacentHTML(
            "afterbegin",
            `<h3>Развернуть</h3><svg class="show-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.77988 0.229439C9.6389 0.0825295 9.44771 -2.41412e-08 9.24837 -3.2855e-08C9.04902 -4.15688e-08 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866926 0.94238 0.00770571 0.745262 0.00949116C0.548143 0.0112766 0.359584 0.0936914 0.220195 0.238985C0.0808067 0.384278 0.00174138 0.580825 2.85759e-05 0.786293C-0.00168423 0.991761 0.0740928 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z" fill="#FF5C00"/>
                </svg>`
          );
        });

        document.querySelectorAll(".show-arrow").forEach((arrow) => {
          arrow.classList.remove("show");
        });
      } else {
        hideFilterButton.forEach((btn) => {
          btn.innerHTML = "";

          btn.insertAdjacentHTML(
            "afterbegin",
            `<h3>Подобрать</h3><svg class="show-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.77988 0.229439C9.6389 0.0825295 9.44771 -2.41412e-08 9.24837 -3.2855e-08C9.04902 -4.15688e-08 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866926 0.94238 0.00770571 0.745262 0.00949116C0.548143 0.0112766 0.359584 0.0936914 0.220195 0.238985C0.0808067 0.384278 0.00174138 0.580825 2.85759e-05 0.786293C-0.00168423 0.991761 0.0740928 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z" fill="#FF5C00"/>
                </svg>`
          );
        });

        document.querySelectorAll(".show-arrow").forEach((arrow) => {
          arrow.classList.remove("show");
        });
      }
    });
  });
}

let pageNumber = 1;

async function filterCards() {
  console.log(pageNumber);
  view.catalogWrapper.innerHTML = "";
  //Сбор данных чекбоксов
  const checkboxValues = view.grabCheckboxes();
  let productNumber = 1;
  let productQuantity = pageNumber * 6;

  //Рендер отфильтрованных карточек
  await state.filter.results.forEach((element) => {
    let params = Object.values(element);
    let result = (arr, target) => target.every((v) => arr.includes(v));

    let isMatch = result(params, checkboxValues);

    if (isMatch && productQuantity != 0) {
      view.catalogWrapper.innerHTML += view.renderCard(element, productNumber);

      productNumber += 1;
      productQuantity -= 1;
    }
  });

  view.renderShowButton(view.checkProductsNumber(), productQuantity);
  //Проверка кол-ва продуктов и изменение кнопки "показать больше"
}

function expandProducts() {
  pageNumber++;
  filterCards();
}

function resetPageNumber() {
  console.log("fired");
  pageNumber = 1;
}
