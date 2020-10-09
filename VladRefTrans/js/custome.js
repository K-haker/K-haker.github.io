$(document).ready(function(){

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

});
