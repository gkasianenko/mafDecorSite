const typeRow = document.querySelector(".leaders-filter__categories-row");

const kindRow = document.querySelector(".leaders-filter__types-row");

const carcasTypeRow = document.querySelector(".leaders-filter__carcases-row");

const items = document.querySelectorAll(".leaders-filter__item");

const catalogButton = document.querySelector(".button.button--catalog");
//positionCatalogButton);

const uploadInput = document.querySelector("#input-upload");

const uploadButton = document.querySelector(".contacts-form__file");


uploadButton.addEventListener("click", initUpload);

function initUpload(){
    uploadInput.click();
}



items.forEach((item) => {
    item.addEventListener("change", positionCatalogButton)
})

function positionCatalogButton(event){
    event.stopPropagation()

    if(isChecked(kindRow)){
        catalogButton.style.top = "465px";
    }

     if(isChecked(kindRow) && isChecked(typeRow)){
            catalogButton.style.top = "845px";
    }

    if(isChecked(kindRow) && isChecked(typeRow) && isChecked(carcasTypeRow)){
        catalogButton.style.top = "1370px";
    }
       
    selectedItemStyle(event.target)

    

}

function isChecked(row){
    

    let isChecked = false;
    
   const items = row.querySelectorAll(".leaders-filter__item");

    
    items.forEach((item) => {
        const input = item.querySelector("input");
      
        if(input.checked === true){
            isChecked = true;
            
        } 
        
    })

    return isChecked;
 
}

function selectedItemStyle(item){
    const element = item.closest("div");
    const img = element.querySelector(".leaders-filter__img");
    const parent = element.parentElement;
    
   const items =  parent.querySelectorAll(".leaders-filter__item");

   items.forEach((item) => {
       item.querySelector(".leaders-filter__img").classList.remove("active");
    
    });

   img.classList.add("active");

}



