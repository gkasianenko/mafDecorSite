
export function render(params){

   

    const markup = `<div class="catalog-pattern__filter-wrapper">
<div class="catalog-pattern__show">
    <h3>Подобрать</h3>
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.77988 0.229439C9.6389 0.0825295 9.44771 -2.41412e-08 9.24837 -3.2855e-08C9.04902 -4.15688e-08 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866926 0.94238 0.00770571 0.745262 0.00949116C0.548143 0.0112766 0.359584 0.0936914 0.220195 0.238985C0.0808067 0.384278 0.00174138 0.580825 2.85759e-05 0.786293C-0.00168423 0.991761 0.0740928 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z" fill="#FF5C00"/>
        </svg>
        
</div>
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
        <i class="fa-solid fa-circle-question"></i></div> 
            <input type="checkbox" class="real-checkbox" value="${params.carcas[0]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label><div class="carcas-item">${params.carcas[1]}
        <i class="fa-solid fa-circle-question"></i></div> 
            <input type="checkbox" class="real-checkbox" value="${params.carcas[1]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label><div class="carcas-item">${params.carcas[2]}
        <i class="fa-solid fa-circle-question"></i></div> 
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

    console.log(checkboxes)

    return checkboxValues;
}

export function populateCards(data){


    const time = 0;

    data.forEach((element) => {
        const card = `
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
                                    <a href="#" class="button button--catalog">Подробнее</a>

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