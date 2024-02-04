$(document).ready(function(){
  $('.carusel__inner').slick({    
    speed: 1000,    
    adaptiveHeight: true,
    /* autoplay: true,
    autoplaySpeed: 2000 */
    prevArrow: '<button type="button" class="slick-prev"><img src="icon/block-4/chevron-left-solid.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icon/block-4/chevron-right-solid.svg"></button>',
    responsive: [
       {
        breakpoint: 768,
        settings: {          
          dots: true,
          arrows: false
        }
      } 
      
    ]
  });
});

