$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
  });

  $(".menu-btn").click(function(){
    $(".backdrop").toggleClass("close");
    $(".header__menu-wrapper").toggleClass("wrapper--active");
  });

});