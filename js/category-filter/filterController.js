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

    const filter = document.querySelector('.catalog-pattern__filter');

    filter.addEventListener('change', filterCards);
    
    view.populateCards(state.filter.results);


    
}

function filterCards(){
    view.catalogWrapper.innerHTML = "";

    const checkboxValues = view.grabCheckboxes();
    let number = 1;

    state.filter.results.forEach((element) => {
        let params = Object.values(element);
        let result = (arr, target) => target.every((v) => arr.includes(v));

        let isMatch = result(params, checkboxValues);
        
        if(isMatch){
            
            view.catalogWrapper.innerHTML += view.renderCard(element, number);
            
            number += 1;
        }
    });
}


