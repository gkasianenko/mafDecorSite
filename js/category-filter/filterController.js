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
}


