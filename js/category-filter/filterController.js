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
    const checkboxes = view.filter.querySelectorAll("input[type='checkbox']");

    
    
    view.filter.addEventListener('change', filterCards);

    //Прослушка чекбоксов

    checkboxes.forEach((checkbox) => checkbox.addEventListener('click', resetPageNumber))
    
    //Рендер всех карточек первичный
    view.populateCards(state.filter.results);
    
    //прослушка кнопки "показать еще"
    
    view.showMoreButton.addEventListener('click', expandProducts)
    
    
}

let pageNumber = 1;

async function filterCards(){
    console.log(pageNumber)
    view.catalogWrapper.innerHTML = "";
    //Сбор данных чекбоксов
    const checkboxValues = view.grabCheckboxes();
    let productNumber = 1;
    let productQuantity = pageNumber*6;
    
    

    //Рендер отфильтрованных карточек
   await state.filter.results.forEach((element) => {
        let params = Object.values(element);
        let result = (arr, target) => target.every((v) => arr.includes(v));

        let isMatch = result(params, checkboxValues);
        


        if(isMatch && productQuantity != 0){
            
            view.catalogWrapper.innerHTML += view.renderCard(element, productNumber);
            
           productNumber += 1;
           productQuantity -= 1;
            
        }

    });
   
    view.renderShowButton(view.checkProductsNumber(), productQuantity);
    //Проверка кол-ва продуктов и изменение кнопки "показать больше"
}

function expandProducts(){
    pageNumber++;
    filterCards();
    
}

function resetPageNumber(){
    console.log("fired")
    pageNumber = 1;
    
}

