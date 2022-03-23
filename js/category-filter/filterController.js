import * as view from './filterView.js';
import Filter from './filterModel.js';

export default async function(state){
    
    //Создание объекта фильтра
    if(!state.filter){
        
        state.filter = new Filter();
    }
    
    //Параметры фильтра
   await state.filter.getParams();



    view.render(state.filter.params);

    await state.filter.getResults();

    //прослушка формы

    
    
    view.filter.addEventListener('change', filterCards);

    //Прослушка чекбоксов

    view.checkboxes.forEach((checkbox) => checkbox.addEventListener('click', resetPageNumber))
    
    //Рендер всех карточек первичный
    view.populateCards(state.filter.results);
    
    //прослушка кнопки "показать еще"
    
    view.showMoreButton.addEventListener('click', expandProducts)
    
    
}

let pageNumber = 1;

function filterCards(){
    
    view.catalogWrapper.innerHTML = "";

    //Сбор данных чекбоксов
    const checkboxValues = view.grabCheckboxes();
    let productNumber = 1;
    let productQuantity = pageNumber*6;

    //Рендер отфильтрованных карточек
    state.filter.results.forEach((element) => {
        let params = Object.values(element);
        let result = (arr, target) => target.every((v) => arr.includes(v));

        let isMatch = result(params, checkboxValues);
        console.log(isMatch)


        if(isMatch && productQuantity != 0){
            
            view.catalogWrapper.innerHTML += view.renderCard(element, productNumber);
            
           productNumber += 1;
           productQuantity -=1;
            
        }

        view.renderShowButton(view.checkProductsNumber(), productQuantity);
    });

    //Проверка кол-ва продуктов и изменение кнопки "показать больше"
}

function expandProducts(){
    pageNumber++;
    filterCards();
    
}

function resetPageNumber(){
    
    pageNumber = 1;
    console.log("fired")
}

