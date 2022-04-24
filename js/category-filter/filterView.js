export const filter = document.querySelector(".catalog-pattern__filter");
export const filterMobile = document.querySelector(
  ".catalog-pattern__mobile-filter"
);

export const showMoreButton = document.querySelector(".catalog-pattern__more");
export const overlay = document.getElementById("overlay");

//переменные мобфильтра
export const mobFilterIcon = document.querySelector(".catalog-pattern__mobile-icon");
export const mobFilterCloseIcon = document.querySelector(
  ".catalog-pattern__close-btn"
);
export const mobFilter = document.querySelector(".catalog-pattern__mobile-filter");


export function render(params) {
  const markup = `<div class="catalog-pattern__filter-wrapper">
<div class="catalog-pattern__show">
<div class="filter-show">
<h3>Подобрать</h3>
<svg class="show-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.77988 0.229439C9.6389 0.0825295 9.44771 -2.41412e-08 9.24837 -3.2855e-08C9.04902 -4.15688e-08 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866926 0.94238 0.00770571 0.745262 0.00949116C0.548143 0.0112766 0.359584 0.0936914 0.220195 0.238985C0.0808067 0.384278 0.00174138 0.580825 2.85759e-05 0.786293C-0.00168423 0.991761 0.0740928 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z" fill="#FF5C00"/>
        </svg>
</div>
    
        
</div>
<div class="catalog-pattern__inner show">
<div class="catalog-pattern__category">
    <p>Вид лестницы</р>
    <ul>
        <li><label>
            ${params.kind[0]}
            <input type="checkbox" class="real-checkbox" value=${params.kind[0]}" data-name="${params.kind[0]}">
            <span class="custom-checkbox"></span>
        </label>
            
        </li>
        <li><label>${params.kind[1]}
            <input type="checkbox" class="real-checkbox" value=${params.kind[1]} data-name="${params.kind[1]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.kind[2]}
            <input type="checkbox" class="real-checkbox" value=${params.kind[2]} data-name="${params.kind[2]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
    </ul>
</div>
<div class="catalog-pattern__type">
    <p>Тип лестницы</р>
    <ul>
        <li><label>${params.type[0]}
            <input type="checkbox" class="real-checkbox" value="${params.type[0]}" data-name="${params.type[0]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[1]}
            <input type="checkbox" class="real-checkbox" value="${params.type[1]}" data-name="${params.type[1]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[2]}
            <input type="checkbox" class="real-checkbox" value="${params.type[2]}" data-name="${params.type[2]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[3]}
            <input type="checkbox" class="real-checkbox" value="${params.type[3]} data-name="${params.type[3]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[4]}
            <input type="checkbox" class="real-checkbox" value="${params.type[4]}" data-name="${params.type[4]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[5]}
            <input type="checkbox" class="real-checkbox" value="${params.type[5]}" data-name="${params.type[5]}">
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
            <input type="checkbox" class="real-checkbox" value="${params.carcas[0]}" data-name="${params.carcas[0]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label><div class="carcas-item">${params.carcas[1]}
        <svg width="18" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17.8838C6.91142 17.8838 4.90838 17.0045 3.43153 15.4394C1.95468 13.8742 1.125 11.7515 1.125 9.53802C1.125 7.32459 1.95468 5.20181 3.43153 3.63667C4.90838 2.07154 6.91142 1.19225 9 1.19225C11.0886 1.19225 13.0916 2.07154 14.5685 3.63667C16.0453 5.20181 16.875 7.32459 16.875 9.53802C16.875 11.7515 16.0453 13.8742 14.5685 15.4394C13.0916 17.0045 11.0886 17.8838 9 17.8838ZM9 19.076C11.3869 19.076 13.6761 18.0712 15.364 16.2824C17.0518 14.4937 18 12.0677 18 9.53802C18 7.00838 17.0518 4.58235 15.364 2.79362C13.6761 1.0049 11.3869 0 9 0C6.61305 0 4.32387 1.0049 2.63604 2.79362C0.948212 4.58235 0 7.00838 0 9.53802C0 12.0677 0.948212 14.4937 2.63604 16.2824C4.32387 18.0712 6.61305 19.076 9 19.076Z" fill="#464646"/>
<path d="M5.91186 6.89845C5.91032 6.93695 5.91623 6.97538 5.92922 7.01137C5.94221 7.04737 5.96202 7.08016 5.98741 7.10775C6.0128 7.13533 6.04325 7.15711 6.07689 7.17176C6.11052 7.18641 6.14663 7.19362 6.18298 7.19293H7.11111C7.26636 7.19293 7.39011 7.05821 7.41036 6.89487C7.51161 6.11276 8.01786 5.54286 8.92011 5.54286C9.69185 5.54286 10.3984 5.9518 10.3984 6.93541C10.3984 7.69248 9.9776 8.04062 9.31273 8.56998C8.55561 9.15299 7.95598 9.83376 7.99873 10.939L8.00211 11.1977C8.00329 11.2759 8.03344 11.3505 8.08606 11.4054C8.13867 11.4602 8.20954 11.491 8.28336 11.491H9.19573C9.27032 11.491 9.34186 11.4596 9.3946 11.4037C9.44735 11.3478 9.47698 11.272 9.47698 11.1929V11.0677C9.47698 10.2117 9.7841 9.96252 10.6132 9.29605C11.2984 8.74404 12.0127 8.13123 12.0127 6.8448C12.0127 5.04331 10.5772 4.17297 9.00561 4.17297C7.58023 4.17297 6.01874 4.8764 5.91186 6.89845ZM7.66348 13.7694C7.66348 14.4048 8.14161 14.8746 8.79973 14.8746C9.48485 14.8746 9.95623 14.4048 9.95623 13.7694C9.95623 13.1112 9.48373 12.6487 8.79861 12.6487C8.14161 12.6487 7.66348 13.1112 7.66348 13.7694Z" fill="#464646"/>
</svg></div> 
            <input type="checkbox" class="real-checkbox" value="${params.carcas[1]}" data-name="${params.carcas[1]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label><div class="carcas-item">${params.carcas[2]}
        <svg width="18" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17.8838C6.91142 17.8838 4.90838 17.0045 3.43153 15.4394C1.95468 13.8742 1.125 11.7515 1.125 9.53802C1.125 7.32459 1.95468 5.20181 3.43153 3.63667C4.90838 2.07154 6.91142 1.19225 9 1.19225C11.0886 1.19225 13.0916 2.07154 14.5685 3.63667C16.0453 5.20181 16.875 7.32459 16.875 9.53802C16.875 11.7515 16.0453 13.8742 14.5685 15.4394C13.0916 17.0045 11.0886 17.8838 9 17.8838ZM9 19.076C11.3869 19.076 13.6761 18.0712 15.364 16.2824C17.0518 14.4937 18 12.0677 18 9.53802C18 7.00838 17.0518 4.58235 15.364 2.79362C13.6761 1.0049 11.3869 0 9 0C6.61305 0 4.32387 1.0049 2.63604 2.79362C0.948212 4.58235 0 7.00838 0 9.53802C0 12.0677 0.948212 14.4937 2.63604 16.2824C4.32387 18.0712 6.61305 19.076 9 19.076Z" fill="#464646"/>
<path d="M5.91186 6.89845C5.91032 6.93695 5.91623 6.97538 5.92922 7.01137C5.94221 7.04737 5.96202 7.08016 5.98741 7.10775C6.0128 7.13533 6.04325 7.15711 6.07689 7.17176C6.11052 7.18641 6.14663 7.19362 6.18298 7.19293H7.11111C7.26636 7.19293 7.39011 7.05821 7.41036 6.89487C7.51161 6.11276 8.01786 5.54286 8.92011 5.54286C9.69185 5.54286 10.3984 5.9518 10.3984 6.93541C10.3984 7.69248 9.9776 8.04062 9.31273 8.56998C8.55561 9.15299 7.95598 9.83376 7.99873 10.939L8.00211 11.1977C8.00329 11.2759 8.03344 11.3505 8.08606 11.4054C8.13867 11.4602 8.20954 11.491 8.28336 11.491H9.19573C9.27032 11.491 9.34186 11.4596 9.3946 11.4037C9.44735 11.3478 9.47698 11.272 9.47698 11.1929V11.0677C9.47698 10.2117 9.7841 9.96252 10.6132 9.29605C11.2984 8.74404 12.0127 8.13123 12.0127 6.8448C12.0127 5.04331 10.5772 4.17297 9.00561 4.17297C7.58023 4.17297 6.01874 4.8764 5.91186 6.89845ZM7.66348 13.7694C7.66348 14.4048 8.14161 14.8746 8.79973 14.8746C9.48485 14.8746 9.95623 14.4048 9.95623 13.7694C9.95623 13.1112 9.48373 12.6487 8.79861 12.6487C8.14161 12.6487 7.66348 13.1112 7.66348 13.7694Z" fill="#464646"/>
</svg></div> 
            <input type="checkbox" class="real-checkbox" value="${params.carcas[2]}" data-name="${params.carcas[2]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
    </ul>
</div>
<div class="catalog-pattern__stages">
    <p>Материал ступеней</р>
        <ul>
            <li><label>${params.stages[0]}
                <input type="checkbox" class="real-checkbox" value="${params.stages[0]}" data-name="${params.stages[0]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.stages[1]}
                <input type="checkbox" class="real-checkbox" value="${params.stages[1]}" data-name="${params.stages[1]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
        </ul>
</div>
<div class="catalog-pattern__railing">
    <p>Материал перил</р>
        <ul>
            <li><label>${params.material[0]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[0]}" data-name="${params.material[0]}">
            <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.material[1]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[1]}" data-name="${params.material[1]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.material[2]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[2]}" data-name="${params.material[2]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.material[3]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[3]}" data-name="${params.material[3]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
        </ul>
</div>
</div>


</div>`;

const markupMobile = `<div class="catalog-pattern__filter-wrapper">
<div class="catalog-pattern__show">
<div class="catalog-pattern__close-btn">
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.743 0.257026C20.8244 0.338294 20.8891 0.434836 20.9332 0.541125C20.9773 0.647413 21 0.761358 21 0.876434C21 0.991509 20.9773 1.10545 20.9332 1.21174C20.8891 1.31803 20.8244 1.41457 20.743 1.49584L1.49584 20.743C1.33156 20.9072 1.10876 20.9995 0.876432 20.9995C0.64411 20.9995 0.421302 20.9072 0.257025 20.743C0.0927475 20.5787 0.000457764 20.3559 0.000457764 20.1236C0.000457764 19.8912 0.0927475 19.6684 0.257025 19.5042L19.5042 0.257026C19.5854 0.175552 19.682 0.110912 19.7883 0.0668073C19.8945 0.0227026 20.0085 0 20.1236 0C20.2386 0 20.3526 0.0227026 20.4589 0.0668073C20.5652 0.110912 20.6617 0.175552 20.743 0.257026Z" fill="#F37833"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.257026 0.257026C0.175552 0.338294 0.110912 0.434836 0.0668073 0.541125C0.0227026 0.647413 0 0.761358 0 0.876434C0 0.991509 0.0227026 1.10545 0.0668073 1.21174C0.110912 1.31803 0.175552 1.41457 0.257026 1.49584L19.5042 20.743C19.6684 20.9072 19.8912 20.9995 20.1236 20.9995C20.3559 20.9995 20.5787 20.9072 20.743 20.743C20.9072 20.5787 20.9995 20.3559 20.9995 20.1236C20.9995 19.8912 20.9072 19.6684 20.743 19.5042L1.49584 0.257026C1.41457 0.175552 1.31803 0.110912 1.21174 0.0668073C1.10545 0.0227026 0.991509 0 0.876434 0C0.761358 0 0.647413 0.0227026 0.541125 0.0668073C0.434836 0.110912 0.338294 0.175552 0.257026 0.257026Z" fill="#F37833"/>
</div>

</svg>
<div class="filter-show">
<h3>Подобрать</h3>
<svg class="show-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.77988 0.229439C9.6389 0.0825295 9.44771 -2.41412e-08 9.24837 -3.2855e-08C9.04902 -4.15688e-08 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866926 0.94238 0.00770571 0.745262 0.00949116C0.548143 0.0112766 0.359584 0.0936914 0.220195 0.238985C0.0808067 0.384278 0.00174138 0.580825 2.85759e-05 0.786293C-0.00168423 0.991761 0.0740928 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z" fill="#FF5C00"/>
        </svg>
</div>
    
    
        
</div>
<div class="catalog-pattern__inner show">
<div class="catalog-pattern__category">
    <p>Вид лестницы</р>
    <ul>
        <li><label>
            ${params.kind[0]}
            <input type="checkbox" class="real-checkbox" value=${params.kind[0]}" data-name="${params.kind[0]}">
            <span class="custom-checkbox"></span>
        </label>
            
        </li>
        <li><label>${params.kind[1]}
            <input type="checkbox" class="real-checkbox" value=${params.kind[1]} data-name="${params.kind[1]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.kind[2]}
            <input type="checkbox" class="real-checkbox" value=${params.kind[2]} data-name="${params.kind[2]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
    </ul>
</div>
<div class="catalog-pattern__type">
    <p>Тип лестницы</р>
    <ul>
        <li><label>${params.type[0]}
            <input type="checkbox" class="real-checkbox" value="${params.type[0]}" data-name="${params.type[0]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[1]}
            <input type="checkbox" class="real-checkbox" value="${params.type[1]}" data-name="${params.type[1]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[2]}
            <input type="checkbox" class="real-checkbox" value="${params.type[2]}" data-name="${params.type[2]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[3]}
            <input type="checkbox" class="real-checkbox" value="${params.type[3]} data-name="${params.type[3]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[4]}
            <input type="checkbox" class="real-checkbox" value="${params.type[4]}" data-name="${params.type[4]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label>${params.type[5]}
            <input type="checkbox" class="real-checkbox" value="${params.type[5]}" data-name="${params.type[5]}">
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
            <input type="checkbox" class="real-checkbox" value="${params.carcas[0]}" data-name="${params.carcas[0]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label><div class="carcas-item">${params.carcas[1]}
        <svg width="18" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17.8838C6.91142 17.8838 4.90838 17.0045 3.43153 15.4394C1.95468 13.8742 1.125 11.7515 1.125 9.53802C1.125 7.32459 1.95468 5.20181 3.43153 3.63667C4.90838 2.07154 6.91142 1.19225 9 1.19225C11.0886 1.19225 13.0916 2.07154 14.5685 3.63667C16.0453 5.20181 16.875 7.32459 16.875 9.53802C16.875 11.7515 16.0453 13.8742 14.5685 15.4394C13.0916 17.0045 11.0886 17.8838 9 17.8838ZM9 19.076C11.3869 19.076 13.6761 18.0712 15.364 16.2824C17.0518 14.4937 18 12.0677 18 9.53802C18 7.00838 17.0518 4.58235 15.364 2.79362C13.6761 1.0049 11.3869 0 9 0C6.61305 0 4.32387 1.0049 2.63604 2.79362C0.948212 4.58235 0 7.00838 0 9.53802C0 12.0677 0.948212 14.4937 2.63604 16.2824C4.32387 18.0712 6.61305 19.076 9 19.076Z" fill="#464646"/>
<path d="M5.91186 6.89845C5.91032 6.93695 5.91623 6.97538 5.92922 7.01137C5.94221 7.04737 5.96202 7.08016 5.98741 7.10775C6.0128 7.13533 6.04325 7.15711 6.07689 7.17176C6.11052 7.18641 6.14663 7.19362 6.18298 7.19293H7.11111C7.26636 7.19293 7.39011 7.05821 7.41036 6.89487C7.51161 6.11276 8.01786 5.54286 8.92011 5.54286C9.69185 5.54286 10.3984 5.9518 10.3984 6.93541C10.3984 7.69248 9.9776 8.04062 9.31273 8.56998C8.55561 9.15299 7.95598 9.83376 7.99873 10.939L8.00211 11.1977C8.00329 11.2759 8.03344 11.3505 8.08606 11.4054C8.13867 11.4602 8.20954 11.491 8.28336 11.491H9.19573C9.27032 11.491 9.34186 11.4596 9.3946 11.4037C9.44735 11.3478 9.47698 11.272 9.47698 11.1929V11.0677C9.47698 10.2117 9.7841 9.96252 10.6132 9.29605C11.2984 8.74404 12.0127 8.13123 12.0127 6.8448C12.0127 5.04331 10.5772 4.17297 9.00561 4.17297C7.58023 4.17297 6.01874 4.8764 5.91186 6.89845ZM7.66348 13.7694C7.66348 14.4048 8.14161 14.8746 8.79973 14.8746C9.48485 14.8746 9.95623 14.4048 9.95623 13.7694C9.95623 13.1112 9.48373 12.6487 8.79861 12.6487C8.14161 12.6487 7.66348 13.1112 7.66348 13.7694Z" fill="#464646"/>
</svg></div> 
            <input type="checkbox" class="real-checkbox" value="${params.carcas[1]}" data-name="${params.carcas[1]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
        <li><label><div class="carcas-item">${params.carcas[2]}
        <svg width="18" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17.8838C6.91142 17.8838 4.90838 17.0045 3.43153 15.4394C1.95468 13.8742 1.125 11.7515 1.125 9.53802C1.125 7.32459 1.95468 5.20181 3.43153 3.63667C4.90838 2.07154 6.91142 1.19225 9 1.19225C11.0886 1.19225 13.0916 2.07154 14.5685 3.63667C16.0453 5.20181 16.875 7.32459 16.875 9.53802C16.875 11.7515 16.0453 13.8742 14.5685 15.4394C13.0916 17.0045 11.0886 17.8838 9 17.8838ZM9 19.076C11.3869 19.076 13.6761 18.0712 15.364 16.2824C17.0518 14.4937 18 12.0677 18 9.53802C18 7.00838 17.0518 4.58235 15.364 2.79362C13.6761 1.0049 11.3869 0 9 0C6.61305 0 4.32387 1.0049 2.63604 2.79362C0.948212 4.58235 0 7.00838 0 9.53802C0 12.0677 0.948212 14.4937 2.63604 16.2824C4.32387 18.0712 6.61305 19.076 9 19.076Z" fill="#464646"/>
<path d="M5.91186 6.89845C5.91032 6.93695 5.91623 6.97538 5.92922 7.01137C5.94221 7.04737 5.96202 7.08016 5.98741 7.10775C6.0128 7.13533 6.04325 7.15711 6.07689 7.17176C6.11052 7.18641 6.14663 7.19362 6.18298 7.19293H7.11111C7.26636 7.19293 7.39011 7.05821 7.41036 6.89487C7.51161 6.11276 8.01786 5.54286 8.92011 5.54286C9.69185 5.54286 10.3984 5.9518 10.3984 6.93541C10.3984 7.69248 9.9776 8.04062 9.31273 8.56998C8.55561 9.15299 7.95598 9.83376 7.99873 10.939L8.00211 11.1977C8.00329 11.2759 8.03344 11.3505 8.08606 11.4054C8.13867 11.4602 8.20954 11.491 8.28336 11.491H9.19573C9.27032 11.491 9.34186 11.4596 9.3946 11.4037C9.44735 11.3478 9.47698 11.272 9.47698 11.1929V11.0677C9.47698 10.2117 9.7841 9.96252 10.6132 9.29605C11.2984 8.74404 12.0127 8.13123 12.0127 6.8448C12.0127 5.04331 10.5772 4.17297 9.00561 4.17297C7.58023 4.17297 6.01874 4.8764 5.91186 6.89845ZM7.66348 13.7694C7.66348 14.4048 8.14161 14.8746 8.79973 14.8746C9.48485 14.8746 9.95623 14.4048 9.95623 13.7694C9.95623 13.1112 9.48373 12.6487 8.79861 12.6487C8.14161 12.6487 7.66348 13.1112 7.66348 13.7694Z" fill="#464646"/>
</svg></div> 
            <input type="checkbox" class="real-checkbox" value="${params.carcas[2]}" data-name="${params.carcas[2]}">
            <span class="custom-checkbox"></span>
        </label>
        </li>
    </ul>
</div>
<div class="catalog-pattern__stages">
    <p>Материал ступеней</р>
        <ul>
            <li><label>${params.stages[0]}
                <input type="checkbox" class="real-checkbox" value="${params.stages[0]}" data-name="${params.stages[0]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.stages[1]}
                <input type="checkbox" class="real-checkbox" value="${params.stages[1]}" data-name="${params.stages[1]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
        </ul>
</div>
<div class="catalog-pattern__railing">
    <p>Материал перил</р>
        <ul>
            <li><label>${params.material[0]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[0]}" data-name="${params.material[0]}">
            <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.material[1]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[1]}" data-name="${params.material[1]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.material[2]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[2]}" data-name="${params.material[2]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
            <li><label>${params.material[3]}
                
                <input type="checkbox" class="real-checkbox" value="${params.material[3]}" data-name="${params.material[3]}">
                <span class="custom-checkbox"></span>
            </label>
            </li>
        </ul>
</div>
</div>


</div>`;

  document
    .querySelector("#catalog-pattern")
    .querySelector(".catalog-pattern__filter")
    .insertAdjacentHTML("afterbegin", markup);

  document
    .querySelector(".catalog-pattern__mobile-filter").querySelector(".catalog-pattern__filter").insertAdjacentHTML("afterbegin", markupMobile);
}

export function filterCheckInputs(checkboxes) {
  if (localStorage.inputValues) {
    const checkedInputValues = localStorage.getItem("inputValues");
    const inputValues = JSON.parse(checkedInputValues);

    checkboxes.forEach((checkbox) => {
      if (inputValues.find((element) => element === checkbox.dataset.name)) {
        checkbox.checked = true;
      }
    });

    localStorage.removeItem("inputValues");
  }
}

export const catalogWrapper = document.querySelector(
  ".catalog-pattern__products-wrapper"
);

export function grabCheckboxes() {
  const filter = document.querySelector(".catalog-pattern__filter");

  const checkboxes = filter.querySelectorAll("input[type='checkbox']");

  const checkboxValues = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) checkboxValues.push(checkbox.value);
  });

  return checkboxValues;
}

export function populateCards(data) {
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
                
                <a href="./catalog-item.html" class="button button--catalog"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2828 11.2828C21.4391 11.1266 21.4391 10.8734 21.2828 10.7172L18.7373 8.17157C18.581 8.01536 18.3278 8.01536 18.1716 8.17157C18.0154 8.32778 18.0154 8.58105 18.1716 8.73726L20.4343 11L18.1716 13.2627C18.0154 13.419 18.0154 13.6722 18.1716 13.8284C18.3278 13.9846 18.581 13.9846 18.7373 13.8284L21.2828 11.2828ZM11 11.4H21V10.6H11V11.4Z" fill="white"/>
                <path d="M0.717157 10.7172C0.560947 10.8734 0.560947 11.1266 0.717157 11.2828L3.26274 13.8284C3.41895 13.9846 3.67222 13.9846 3.82843 13.8284C3.98464 13.6722 3.98464 13.419 3.82843 13.2627L1.56569 11L3.82843 8.73726C3.98464 8.58105 3.98464 8.32778 3.82843 8.17157C3.67222 8.01536 3.41895 8.01536 3.26274 8.17157L0.717157 10.7172ZM11 10.6L1 10.6L1 11.4L11 11.4L11 10.6Z" fill="white"/>
                <path d="M11.2828 0.717157C11.1266 0.560947 10.8734 0.560947 10.7172 0.717157L8.17157 3.26274C8.01536 3.41895 8.01536 3.67222 8.17157 3.82843C8.32778 3.98464 8.58105 3.98464 8.73726 3.82843L11 1.56569L13.2627 3.82843C13.419 3.98464 13.6722 3.98464 13.8284 3.82843C13.9846 3.67222 13.9846 3.41895 13.8284 3.26274L11.2828 0.717157ZM11.4 11L11.4 1L10.6 1L10.6 11L11.4 11Z" fill="white"/>
                <path d="M10.7172 21.2828C10.8734 21.4391 11.1266 21.4391 11.2828 21.2828L13.8284 18.7373C13.9846 18.581 13.9846 18.3278 13.8284 18.1716C13.6722 18.0154 13.419 18.0154 13.2627 18.1716L11 20.4343L8.73726 18.1716C8.58105 18.0154 8.32778 18.0154 8.17157 18.1716C8.01536 18.3278 8.01536 18.581 8.17157 18.7373L10.7172 21.2828ZM10.6 11L10.6 21L11.4 21L11.4 11L10.6 11Z" fill="white"/>
                </svg>
                <p>Подробнее</p></a>
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
                    <a href="./catalog-item.html" class="overlay-product-link">Заказать расчет?</a>
            </div>

        </div>
       `;

    catalogWrapper.innerHTML += card;
  });
}

export function renderCard(element, number) {
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
          
          <a href="./catalog-item.html" class="button button--catalog"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.2828 11.2828C21.4391 11.1266 21.4391 10.8734 21.2828 10.7172L18.7373 8.17157C18.581 8.01536 18.3278 8.01536 18.1716 8.17157C18.0154 8.32778 18.0154 8.58105 18.1716 8.73726L20.4343 11L18.1716 13.2627C18.0154 13.419 18.0154 13.6722 18.1716 13.8284C18.3278 13.9846 18.581 13.9846 18.7373 13.8284L21.2828 11.2828ZM11 11.4H21V10.6H11V11.4Z" fill="white"/>
          <path d="M0.717157 10.7172C0.560947 10.8734 0.560947 11.1266 0.717157 11.2828L3.26274 13.8284C3.41895 13.9846 3.67222 13.9846 3.82843 13.8284C3.98464 13.6722 3.98464 13.419 3.82843 13.2627L1.56569 11L3.82843 8.73726C3.98464 8.58105 3.98464 8.32778 3.82843 8.17157C3.67222 8.01536 3.41895 8.01536 3.26274 8.17157L0.717157 10.7172ZM11 10.6L1 10.6L1 11.4L11 11.4L11 10.6Z" fill="white"/>
          <path d="M11.2828 0.717157C11.1266 0.560947 10.8734 0.560947 10.7172 0.717157L8.17157 3.26274C8.01536 3.41895 8.01536 3.67222 8.17157 3.82843C8.32778 3.98464 8.58105 3.98464 8.73726 3.82843L11 1.56569L13.2627 3.82843C13.419 3.98464 13.6722 3.98464 13.8284 3.82843C13.9846 3.67222 13.9846 3.41895 13.8284 3.26274L11.2828 0.717157ZM11.4 11L11.4 1L10.6 1L10.6 11L11.4 11Z" fill="white"/>
          <path d="M10.7172 21.2828C10.8734 21.4391 11.1266 21.4391 11.2828 21.2828L13.8284 18.7373C13.9846 18.581 13.9846 18.3278 13.8284 18.1716C13.6722 18.0154 13.419 18.0154 13.2627 18.1716L11 20.4343L8.73726 18.1716C8.58105 18.0154 8.32778 18.0154 8.17157 18.1716C8.01536 18.3278 8.01536 18.581 8.17157 18.7373L10.7172 21.2828ZM10.6 11L10.6 21L11.4 21L11.4 11L10.6 11Z" fill="white"/>
          </svg>
          <p>Подробнее</p></a>
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
              <a href="./catalog-item.html" class="overlay-product-link">Заказать расчет</a>
      </div>

  </div>
 `;
  return card;
}

export function checkProductsNumber() {
  const products = document.querySelectorAll(".catalog-pattern__product");

  return products.length;
}

export function renderShowButton(productsNumber, productQuantity) {
  console.log(productQuantity);
  if ((productsNumber === 0, productQuantity > 0)) {
    console.log("нету");
    showMoreButton.innerHTML = `<div class="catalog-pattern__more">
        <p>Больше нет товаров по вашему запросу</p>
        
    </div>`;
  } else if (productQuantity === 0) {
    console.log("больше 6");
    showMoreButton.innerHTML = `<div class="catalog-pattern__more">
        <p>Показать еще</p>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.77988 0.229439C9.6389 0.0825295 9.44771 -2.41412e-08 9.24837 -3.2855e-08C9.04902 -4.15688e-08 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866926 0.94238 0.00770571 0.745262 0.00949116C0.548143 0.0112766 0.359584 0.0936914 0.220195 0.238985C0.0808067 0.384278 0.00174138 0.580825 2.85759e-05 0.786293C-0.00168423 0.991761 0.0740928 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z" fill="#FF5C00"/>
            </svg>
    </div>`;
  } else if (productQuantity > 0) {
    console.log("меньше 6");
    showMoreButton.innerHTML = `<div class="catalog-pattern__more">
        <p></p>
       
    </div>`;
  } else if (productsNumber < productQuantity && productQuantity === 6) {
    console.log("меньше 6");
    showMoreButton.innerHTML = `<div class="catalog-pattern__more">
        <p></p>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.77988 0.229439C9.6389 0.0825295 9.44771 -2.41412e-08 9.24837 -3.2855e-08C9.04902 -4.15688e-08 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866926 0.94238 0.00770571 0.745262 0.00949116C0.548143 0.0112766 0.359584 0.0936914 0.220195 0.238985C0.0808067 0.384278 0.00174138 0.580825 2.85759e-05 0.786293C-0.00168423 0.991761 0.0740928 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z" fill="#FF5C00"/>
            </svg>
    </div>`;
  }
}

//функции мобфильтра

export function showMobFilter() {
    overlay.classList.add("active");
  
    mobFilter.classList.add("active");
  
    document.body.classList.add("noscroll");
  }
  
  export function closeMobFilter() {
    overlay.classList.remove("active");
  
    mobFilter.classList.remove("active");
  
    document.body.classList.remove("noscroll");
  }
  