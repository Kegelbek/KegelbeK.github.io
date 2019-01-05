let headerBtn = document.getElementById("btn");
    x = window.matchMedia('(max-width: 767px)');

    function myFunc(x) {
      if (x.matches) {

       
        headerBtn.textContent = "Консульация";
      } else {
        
        headerBtn.textContent = "Получить консультацию";
      }
      
    };

myFunc(x);
x.addListener(myFunc);


$(document).ready(function(){
   $('.featueres-slyder').slick({
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         responsive: [
           {
             breakpoint: 992,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               prevArrow: '<button class="prev"></button>',
               nextArrow: '<button class="next"></button>',
             }
           },
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 1,
               prevArrow: '<button class="prev"></button>',
               nextArrow: '<button class="next"></button>',
               slidesToScroll: 1
             }
           }
         ]
   });
});