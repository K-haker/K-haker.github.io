$(document).ready(function(){


   /*Slick slider*/
   $('.partners__slider').slick({
      slidesToShow:6,
      slidesToScroll:3,
      infinite:true,
      arrows: true,

      prevArrow:'<button class="slider-btn slider-btn-prev"><img src="img/slider/arrow-left.png" alt=""></button>',
      nextArrow:'<button class="slider-btn slider-btn-next"><img src="img/slider/arrow-right.png" alt=""></button>',

      responsive: [
    {

       breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true
      },

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
   });



   /*Плавный скролл*/

   $("[data-scroll]").on("click", function(event){

      event.preventDefault();

      let elementId = $(this).data("scroll");
      let elementOffset = $(elementId).offset().top;
      let dropdownMenu = $("#vertical-menu");

      dropdownMenu.addClass("vertical-menu-display-none")

      $("html,body").animate({
         scrollTop: elementOffset - 70
      }, 700);

   });


   /*Появление/исчезновение меню при клике на кнопку*/

   let burgerButton = document.querySelector("#burger-icon");
   let dropdownMenu = document.querySelector("#vertical-menu")

   burgerButton.addEventListener("click", function(){
      if(dropdownMenu.classList.contains("vertical-menu-display-none")){
         dropdownMenu.classList.remove("vertical-menu-display-none")
      } else{
         dropdownMenu.classList.add("vertical-menu-display-none")
      }
   });



});

























