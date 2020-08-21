
$(document).ready(function(){


   // You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: 'false', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


   /*POP UP /увеличение и пролистывание изображений*/

   $('.about-us__bottom').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
         titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
         }
      }
   });


   /*Плавный скролл*/

   $("[data-scroll]").on("click", function(event){

      event.preventDefault();

      let elementId = $(this).data("scroll");
      let elementOffset = $(elementId).offset().top;
      let dropdownMenu = $("#dropdown-menu");

      dropdownMenu.addClass("dropdown-menu--none")

      $("html,body").animate({
            scrollTop: elementOffset - 70
      }, 1000);
   });


   /*ПОПАП*/

   $('.about-us__bottom-photo').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
         titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
         }
      }
   });



      /*Слик Слайдер*/


   $(".slick-slider__block").slick();

});

