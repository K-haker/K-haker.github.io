

/*Страница каталога*///////



try{
   fetch('data.json')
      .then(response => response.json( ) )
      .then(data => {

      for (let i = 0; i <data.length; i++){
            let srcImgCard = data[i].src;
            let cardId = data[i].id;
            let cardText = data[i].name;
            let cardPrice = data[i].price;
            let cardType = data[i].type;
            let card;
            let cardsBlock = document.querySelector(".cards");

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

   })


/*Сортировка по цене*/
   /*По возрастанию*/

let priceUpButton = document.querySelector('.price-up')
let priceDownButton = document.querySelector('.price-down')

priceUpButton.addEventListener("click", function(){
   let cardsBlock = document.querySelector(".cards");

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
   let cardsBlock = document.querySelector(".cards");

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
   let searchInput = document.querySelector("[data-searchInput]")

   searchButton.addEventListener("click", ()=>{

      fetch('data.json')
      .then(response => response.json( ))
      .then(data => {


         for(let i = 0; i<data.length; i++){
            let nameProduct = data[i].name;
            let searchNameProduct = searchInput.value;
            if(nameProduct.toLocaleLowerCase().indexOf(`${searchNameProduct}`.toLocaleLowerCase()) > -1){
                  console.log("yes!");


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
              }
           }

      })


   })



/*Работа с типами товаров*/

} catch(err){

};




