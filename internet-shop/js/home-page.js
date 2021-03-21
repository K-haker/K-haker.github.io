/*Главная страница*////////
/*работа со слайдером*/

try{

   let slidersArr = document.querySelectorAll(".banner-section__slider-item");
   let prevSlideButton = document.querySelector(".prev-button");
   let nextSlideButton = document.querySelector(".next-button");

   let slideIndex = 0;

   nextSlideButton.addEventListener("click", function(){
      if(slideIndex >= slidersArr.length-1){
         slideIndex = -1;
      }

      for(i = 0; i <slidersArr.length; i++){
         slidersArr[i].classList.remove("active-slider")
      }
      slideIndex++;
      slidersArr[slideIndex].classList.add("active-slider");
      console.log(slideIndex)
   })

   prevSlideButton.addEventListener("click", function(){
      if(slideIndex <=0){
         slideIndex = slidersArr.length;
      }

      for(i = 0; i <slidersArr.length; i++){
         slidersArr[i].classList.remove("active-slider")
      }
      slideIndex--;
      slidersArr[slideIndex].classList.add("active-slider");
      console.log(slideIndex)
   })

} catch(err){

}
