export const filter = document.querySelector('.catalog-pattern__filter');

export const showMoreButton = document.querySelector('.catalog-pattern__more');
    
export function render(params){

   

    const markup = `<div class="catalog-pattern__filter-wrapper">
<div class="catalog-pattern__show">
    <h3>Подобрать</h3>
    <svg class="show-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.77988 0.229439C9.6389 0.0825295 9.44771 -2.41412e-08 9.24837 -3.2855e-08C9.04902 -4.15688e-08 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866926 0.94238 0.00770571 0.745262 0.00949116C0.548143 0.0112766 0.359584 0.0936914 0.220195 0.238985C0.0808067 0.384278 0.00174138 0.580825 2.85759e-05 0.786293C-0.00168423 0.991761 0.0740928 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z" fill="#FF5C00"/>
        </svg>
        
</div>
<div class="catalog-pattern__inner show">
<div class="catalog-pattern__category">
    <p>Вид лестницы</р>
    <ul>
        <li><label>
            ${params.kind[0]}
            <input type="checkbox" class="real-checkbox" value=${params.kind[0]}>
            <span class="custom-checkbox"></span>
        </label>
            
        </li>
        <li><label>${params.kind[1]}
            <input type="checkbox" class="real-checkbox" value=${params.kind[1]}>
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.kind[2]}
            <input type="checkbox" class="real-checkbox" value=${params.kind[2]}>
            <span class="custom-checkbox"></span>
        </label>
        </li>
    </ul>
</div>
<div class="catalog-pattern__type">
    <p>Тип лестницы</р>
    <ul>
        <li><label>${params.type[0]}
            <input type="checkbox" class="real-checkbox" value="${params.type[0]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[1]}
            <input type="checkbox" class="real-checkbox" value="${params.type[1]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[2]}
            <input type="checkbox" class="real-checkbox" value="${params.type[2]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[3]}
            <input type="checkbox" class="real-checkbox" value="${params.type[3]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[4]}
            <input type="checkbox" class="real-checkbox" value="${params.type[4]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[5]}
            <input type="checkbox" class="real-checkbox" value="${params.type[5]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
    </ul>
</div>
<div class="catalog-pattern__carcas">
    <p>Тип каркаса</р>
    <ul>
        <li><label><div class="carcas-item">${params.carcas[0]}
        <svg width="18" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17.8838C6.91142 17.8838 4.90838 17.0045 3.43153 15.4394C1.95468 13.8742 1.125 11.7515 1.125 9.53802C1.125 7.32459 1.95468 5.20181 3.43153 3.63667C4.90838 2.07154 6.91142 1.19225 9 1.19225C11.0886 1.19225 13.0916 2.07154 14.5685 3.63667C16.0453 5.20181 16.875 7.32459 16.875 9.53802C16.875 11.7515 16.0453 13.8742 14.5685 15.4394C13.0916 17.0045 11.0886 17.8838 9 17.8838ZM9 19.076C11.3869 19.076 13.6761 18.0712 15.364 16.2824C17.0518 14.4937 18 12.0677 18 9.53802C18 7.00838 17.0518 4.58235 15.364 2.79362C13.6761 1.0049 11.3869 0 9 0C6.61305 0 4.32387 1.0049 2.63604 2.79362C0.948212 4.58235 0 7.00838 0 9.53802C0 12.0677 0.948212 14.4937 2.63604 16.2824C4.32387 18.0712 6.61305 19.076 9 19.076Z" fill="#464646"/>
<path d="M5.91186 6.89845C5.91032 6.93695 5.91623 6.97538 5.92922 7.01137C5.94221 7.04737 5.96202 7.08016 5.98741 7.10775C6.0128 7.13533 6.04325 7.15711 6.07689 7.17176C6.11052 7.18641 6.14663 7.19362 6.18298 7.19293H7.11111C7.26636 7.19293 7.39011 7.05821 7.41036 6.89487C7.51161 6.11276 8.01786 5.54286 8.92011 5.54286C9.69185 5.54286 10.3984 5.9518 10.3984 6.93541C10.3984 7.69248 9.9776 8.04062 9.31273 8.56998C8.55561 9.15299 7.95598 9.83376 7.99873 10.939L8.00211 11.1977C8.00329 11.2759 8.03344 11.3505 8.08606 11.4054C8.13867 11.4602 8.20954 11.491 8.28336 11.491H9.19573C9.27032 11.491 9.34186 11.4596 9.3946 11.4037C9.44735 11.3478 9.47698 11.272 9.47698 11.1929V11.0677C9.47698 10.2117 9.7841 9.96252 10.6132 9.29605C11.2984 8.74404 12.0127 8.13123 12.0127 6.8448C12.0127 5.04331 10.5772 4.17297 9.00561 4.17297C7.58023 4.17297 6.01874 4.8764 5.91186 6.89845ZM7.66348 13.7694C7.66348 14.4048 8.14161 14.8746 8.79973 14.8746C9.48485 14.8746 9.95623 14.4048 9.95623 13.7694C9.95623 13.1112 9.48373 12.6487 8.79861 12.6487C8.14161 12.6487 7.66348 13.1112 7.66348 13.7694Z" fill="#464646"/>
</svg></div> 
            <input type="checkbox" class="real-checkbox" value="${params.carcas[0]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label><div class="carcas-item">${params.carcas[1]}
        <svg width="18" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17.8838C6.91142 17.8838 4.90838 17.0045 3.43153 15.4394C1.95468 13.8742 1.125 11.7515 1.125 9.53802C1.125 7.32459 1.95468 5.20181 3.43153 3.63667C4.90838 2.07154 6.91142 1.19225 9 1.19225C11.0886 1.19225 13.0916 2.07154 14.5685 3.63667C16.0453 5.20181 16.875 7.32459 16.875 9.53802C16.875 11.7515 16.0453 13.8742 14.5685 15.4394C13.0916 17.0045 11.0886 17.8838 9 17.8838ZM9 19.076C11.3869 19.076 13.6761 18.0712 15.364 16.2824C17.0518 14.4937 18 12.0677 18 9.53802C18 7.00838 17.0518 4.58235 15.364 2.79362C13.6761 1.0049 11.3869 0 9 0C6.61305 0 4.32387 1.0049 2.63604 2.79362C0.948212 4.58235 0 7.00838 0 9.53802C0 12.0677 0.948212 14.4937 2.63604 16.2824C4.32387 18.0712 6.61305 19.076 9 19.076Z" fill="#464646"/>
<path d="M5.91186 6.89845C5.91032 6.93695 5.91623 6.97538 5.92922 7.01137C5.94221 7.04737 5.96202 7.08016 5.98741 7.10775C6.0128 7.13533 6.04325 7.15711 6.07689 7.17176C6.11052 7.18641 6.14663 7.19362 6.18298 7.19293H7.11111C7.26636 7.19293 7.39011 7.05821 7.41036 6.89487C7.51161 6.11276 8.01786 5.54286 8.92011 5.54286C9.69185 5.54286 10.3984 5.9518 10.3984 6.93541C10.3984 7.69248 9.9776 8.04062 9.31273 8.56998C8.55561 9.15299 7.95598 9.83376 7.99873 10.939L8.00211 11.1977C8.00329 11.2759 8.03344 11.3505 8.08606 11.4054C8.13867 11.4602 8.20954 11.491 8.28336 11.491H9.19573C9.27032 11.491 9.34186 11.4596 9.3946 11.4037C9.44735 11.3478 9.47698 11.272 9.47698 11.1929V11.0677C9.47698 10.2117 9.7841 9.96252 10.6132 9.29605C11.2984 8.74404 12.0127 8.13123 12.0127 6.8448C12.0127 5.04331 10.5772 4.17297 9.00561 4.17297C7.58023 4.17297 6.01874 4.8764 5.91186 6.89845ZM7.66348 13.7694C7.66348 14.4048 8.14161 14.8746 8.79973 14.8746C9.48485 14.8746 9.95623 14.4048 9.95623 13.7694C9.95623 13.1112 9.48373 12.6487 8.79861 12.6487C8.14161 12.6487 7.66348 13.1112 7.66348 13.7694Z" fill="#464646"/>
</svg></div> 
            <input type="checkbox" class="real-checkbox" value="${params.carcas[1]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label><div class="carcas-item">${params.carcas[2]}
        <svg width="18" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17.8838C6.91142 17.8838 4.90838 17.0045 3.43153 15.4394C1.95468 13.8742 1.125 11.7515 1.125 9.53802C1.125 7.32459 1.95468 5.20181 3.43153 3.63667C4.90838 2.07154 6.91142 1.19225 9 1.19225C11.0886 1.19225 13.0916 2.07154 14.5685 3.63667C16.0453 5.20181 16.875 7.32459 16.875 9.53802C16.875 11.7515 16.0453 13.8742 14.5685 15.4394C13.0916 17.0045 11.0886 17.8838 9 17.8838ZM9 19.076C11.3869 19.076 13.6761 18.0712 15.364 16.2824C17.0518 14.4937 18 12.0677 18 9.53802C18 7.00838 17.0518 4.58235 15.364 2.79362C13.6761 1.0049 11.3869 0 9 0C6.61305 0 4.32387 1.0049 2.63604 2.79362C0.948212 4.58235 0 7.00838 0 9.53802C0 12.0677 0.948212 14.4937 2.63604 16.2824C4.32387 18.0712 6.61305 19.076 9 19.076Z" fill="#464646"/>
<path d="M5.91186 6.89845C5.91032 6.93695 5.91623 6.97538 5.92922 7.01137C5.94221 7.04737 5.96202 7.08016 5.98741 7.10775C6.0128 7.13533 6.04325 7.15711 6.07689 7.17176C6.11052 7.18641 6.14663 7.19362 6.18298 7.19293H7.11111C7.26636 7.19293 7.39011 7.05821 7.41036 6.89487C7.51161 6.11276 8.01786 5.54286 8.92011 5.54286C9.69185 5.54286 10.3984 5.9518 10.3984 6.93541C10.3984 7.69248 9.9776 8.04062 9.31273 8.56998C8.55561 9.15299 7.95598 9.83376 7.99873 10.939L8.00211 11.1977C8.00329 11.2759 8.03344 11.3505 8.08606 11.4054C8.13867 11.4602 8.20954 11.491 8.28336 11.491H9.19573C9.27032 11.491 9.34186 11.4596 9.3946 11.4037C9.44735 11.3478 9.47698 11.272 9.47698 11.1929V11.0677C9.47698 10.2117 9.7841 9.96252 10.6132 9.29605C11.2984 8.74404 12.0127 8.13123 12.0127 6.8448C12.0127 5.04331 10.5772 4.17297 9.00561 4.17297C7.58023 4.17297 6.01874 4.8764 5.91186 6.89845ZM7.66348 13.7694C7.66348 14.4048 8.14161 14.8746 8.79973 14.8746C9.48485 14.8746 9.95623 14.4048 9.95623 13.7694C9.95623 13.1112 9.48373 12.6487 8.79861 12.6487C8.14161 12.6487 7.66348 13.1112 7.66348 13.7694Z" fill="#464646"/>
</svg></div> 
            <input type="checkbox" class="real-checkbox" value="${params.carcas[2]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
    </ul>
</div>
<div class="catalog-pattern__stages">
    <p>Материал ступеней</р>
        <ul>
            <li><label>${params.stages[0]}
                <input type="checkbox" class="real-checkbox" value="${params.stages[0]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.stages[1]}
                <input type="checkbox" class="real-checkbox" value="${params.stages[1]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
        </ul>
</div>
<div class="catalog-pattern__railing">
    <p>Материал перил</р>
        <ul>
            <li><label>${params.material[0]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[0]}">
            <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.material[1]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[1]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.material[2]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[2]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.material[3]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[3]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
        </ul>
</div>
</div>


</div>`;

    document.querySelector('#catalog-pattern').querySelector('.catalog-pattern__filter').insertAdjacentHTML('afterbegin', markup);

}

export const catalogWrapper = document.querySelector('.catalog-pattern__products-wrapper');


export function grabCheckboxes(){

    const filter = document.querySelector('.catalog-pattern__filter');

    const checkboxes = filter.querySelectorAll("input[type='checkbox']");

    const checkboxValues = [];

    checkboxes.forEach((checkbox) => {
        if(checkbox.checked) checkboxValues.push(checkbox.value);
    })


    return checkboxValues;
}

export function populateCards(data){


    const time = 0;

    data.forEach((element) => {
        const card = `
        <div class="catalog-pattern__card">
            <div class="catalog-pattern__product">
                            
                        <div class="catalog-pattern__text">
                                <div class="catalog-pattern__title">
                                    <p>${element.title}</p> 
                                </div>
                                <div class="catalog-pattern__number">
                                   <p>${element.id}.</p>
                                </div>
                        </div>
                        <div class="catalog-pattern__img">
                            <img src=${element.src}>
                            
                        </div>  
            </div>
            <div class="overlay-product">
                <div class="catalog-pattern__product">
                            
                     <div class="catalog-pattern__text">
                         <div class="catalog-pattern__title">
                        <p>${element.title}</p> 
                    </div>
                    <div class="catalog-pattern__number">
                       <p>${element.id}.</p>
                    </div>
            </div>
            <div class="catalog-pattern__img">
                <img src=${element.src}>
                
            </div>  
</div>
                <a href="./catalog-item.html" class="button button--catalog">Подробнее</a>
                <div class="catalog-pattern__info">
                    <div class="catalog-pattern__price">
                    <p><span>Цена:</span>${element.price}</p>
                </div>
                <div class="catalog-pattern__label">
                    <p>Арт: <span>${element.art}</span></p>
                </div>
                <div class="catalog-pattern__chars">
                    <ul>
                        <li><span>Вид:</span>${element.kind}</li>
                        <li><span>Тип:</span>${element.type}</li>
                        <li><span>Каркас:</span>${element.carcas}</li>
                        <li><span>Ступени:</span>${element.stages}</li>
                        <li><span>Перила:</span>${element.material}</li>
                    </ul>
                </div>   
            </div>
        </div>
        
                           
                            
        </div>`;

        catalogWrapper.innerHTML += card;
    });


}

export function renderCard(element, number){
    const card = `
        <div class="catalog-pattern__product">
                            
                            <div class="catalog-pattern__text">
                                <div class="catalog-pattern__title">
                                    <p>${element.title}</p> 
                                </div>
                                <div class="catalog-pattern__number">
                                   <p>${number}.</p>
                                </div>
                            </div>
                            <div class="catalog-pattern__img">
                                <img src=${element.src}>
                                <div class="overlay">
                                    <a href="./catalog-item.html" class="button button--catalog">Подробнее</a>

                                    <div class="catalog-pattern__info">
                                <div class="catalog-pattern__price">
                                    <p><span>Цена:</span>${element.price}</p>
                                </div>
                                <div class="catalog-pattern__label">
                                    <p>Арт: <span>${element.art}</span></p>
                                </div>
                                <div class="catalog-pattern__chars">
                                    <ul>
                                        <li><span>Вид:</span>${element.kind}</li>
                                        <li><span>Тип:</span>${element.type}</li>
                                        <li><span>Каркас:</span>${element.carcas}</li>
                                        <li><span>Ступени:</span>${element.stages}</li>
                                        <li><span>Перила:</span>${element.material}</li>
                                    </ul>
                                </div>   
                            </div>
                                </div>  
                            </div>
                           
                            
                        </div>`;
    return card;
}

export function checkProductsNumber(){
    const products = document.querySelectorAll('.catalog-pattern__product');
    
    return products.length;
}

export function renderShowButton(productsNumber, productQuantity){
    
    console.log(productQuantity)
    if(productsNumber === 0, productQuantity > 0){
        console.log("нету")
        showMoreButton.innerHTML = `<div class="catalog-pattern__more">
        <p>Больше нет товаров по вашему запросу</p>
        
    </div>`;
    } else if(productQuantity === 0) {
        console.log("больше 6")
        showMoreButton.innerHTML = `<div class="catalog-pattern__more">
        <p>Показать еще</p>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.77988 0.229439C9.6389 0.0825295 9.44771 -2.41412e-08 9.24837 -3.2855e-08C9.04902 -4.15688e-08 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866926 0.94238 0.00770571 0.745262 0.00949116C0.548143 0.0112766 0.359584 0.0936914 0.220195 0.238985C0.0808067 0.384278 0.00174138 0.580825 2.85759e-05 0.786293C-0.00168423 0.991761 0.0740928 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z" fill="#FF5C00"/>
            </svg>
    </div>`;
    } else if(productQuantity > 0){
        console.log("меньше 6")
        showMoreButton.innerHTML = `<div class="catalog-pattern__more">
        <p></p>
       
    </div>`;
    } else if(productsNumber < productQuantity && productQuantity === 6){
        console.log("меньше 6")
        showMoreButton.innerHTML = `<div class="catalog-pattern__more">
        <p></p>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.77988 0.229439C9.6389 0.0825295 9.44771 -2.41412e-08 9.24837 -3.2855e-08C9.04902 -4.15688e-08 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866926 0.94238 0.00770571 0.745262 0.00949116C0.548143 0.0112766 0.359584 0.0936914 0.220195 0.238985C0.0808067 0.384278 0.00174138 0.580825 2.85759e-05 0.786293C-0.00168423 0.991761 0.0740928 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z" fill="#FF5C00"/>
            </svg>
    </div>`;
    }
}