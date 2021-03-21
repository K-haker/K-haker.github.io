

/*Страница каталога*///////

let cardsBlock = document.querySelector(".cards");
let srcImgCard;
let cardId;
let cardText;
let cardPrice;
let cardType;

try{
   fetch('data.json')
      .then(response => response.json( ) )
      .then(data => {

      for (let i = 0; i <data.length; i++){

         srcImgCard = data[i].src;
         cardId = data[i].id;
         cardText = data[i].name;
         cardPrice = data[i].price;
         cardType = data[i].type;

         createCard();
      }
   })




/*Сортировка по цене*/
   /*По возрастанию*/

let priceUpButton = document.querySelector('.price-up')
let priceDownButton = document.querySelector('.price-down')

priceUpButton.addEventListener("click", function(){

   for(let i =0; i < cardsBlock.children.length; i++){
      for(let k =i; k < cardsBlock.children.length; k++){
         if (+cardsBlock.children[i].getAttribute('data-price') > +cardsBlock.children[k].getAttribute('data-price')){

            replacedNode = cardsBlock.replaceChild (cardsBlock.children[k], cardsBlock.children[i]);
            insertAfter(replacedNode, cardsBlock.children[i])

         }
      }
   }
})


   /*По убыванию*/

priceDownButton.addEventListener("click", function(){

   for(let i =0; i < cardsBlock.children.length; i++){
      for(let k =i; k < cardsBlock.children.length; k++){
         if (+cardsBlock.children[i].getAttribute('data-price') < +cardsBlock.children[k].getAttribute('data-price')){

            replacedNode = cardsBlock.replaceChild (cardsBlock.children[k], cardsBlock.children[i]);
            insertAfter(replacedNode, cardsBlock.children[i])

         }
      }
   }
})

function insertAfter(elem, refElem){
   return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}


/*Поиск товара по названию*/
   let searchButton = document.querySelector("[data-searchButton]");
   let searchInput = document.querySelector("[data-searchInput]");

   searchButton.addEventListener("click", ()=>{
      fetch('data.json')
      .then(response => response.json( ))
      .then(data => {

         removeAllChlidren();

         for(let i = 0; i<data.length; i++){

            srcImgCard = data[i].src;
            cardId = data[i].id;
            cardText = data[i].name;
            cardPrice = data[i].price;
            cardType = data[i].type;


            let searchNameProduct = searchInput.value;
            if(cardText.toLowerCase().indexOf(`${searchNameProduct}`.toLowerCase()) > -1){


               createCard()
              }
           }
      })
   })




   /*Поиск с помощью поиска на главной странице*/

   let searchButtonOnHomePage = document.querySelector("[data-searchButtonOnHomePage]");
   let searchInputOnHomePage = document.querySelector("[data-searchInputOnHomePage]");

   searchButtonOnHomePage.addEventListener("click", function(){
      window.location.href='catalog.html';
   })
} catch(err){

};




/*Работа с типами товаров*/
try{
   let categoriesArr = document.querySelectorAll(".categories-item__input");

   categoriesArr.forEach((item)=>{

      item.addEventListener("click", function(){

         categoriesArr.forEach((it)=>{
            it.checked = false;
         })

         let eventTarget = event.target;
         eventTarget.checked = true;

         removeAllChlidren();

         fetch('data.json')
            .then(response => response.json( ) )
            .then(data => {

               for (let i = 0; i < data.length; i++){
                  if(eventTarget.getAttribute('data-typeProduct') === data[i].type){
                     srcImgCard = data[i].src;
                     cardId = data[i].id;
                     cardText = data[i].name;
                     cardPrice = data[i].price;
                     cardType = data[i].type;

                     createCard()
                  } else {
                     console.log("type none")
                  }
               }
            })
      })
   })
}catch(err){

};


try{
   /*Функция удаления всех детей у родителя*/

   function removeAllChlidren(){
      while (cardsBlock.firstChild) {
          cardsBlock.removeChild(cardsBlock.firstChild);
      }
   }

   /*Функция добавления карточки товара*/
   function createCard(){
            cardsBlock.insertAdjacentHTML("beforeend",
         `
            <div id=${cardId} data-type="${cardType}" data-price="${cardPrice}" class="card">
               <img class="card_like-heart" src="img/catalog/like-heart.svg" alt="">
                 <div class="card_photo-wrapper">
                  <img class="card_photo" src="${srcImgCard}" alt="">
               </div>
               <div class="card_name">${cardText}</div>
               <div class="card_price">${cardPrice}р</div>
               <div class="card-busket">
                  <img class="card-busket__img" src="img/catalog/buscket.svg" alt="">
               </div>
           </div>
            `
         )

         cardsBlock.setAttribute('data-price', cardPrice )
   }
}catch(err){}






