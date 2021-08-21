$(document).ready(function(){

    $('#header-menu-bar').click(function(){
      $(this).toggleClass('fa-times');
      $('.header-navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
  
      $('#header-menu-bar').removeClass('fa-times');
      $('.header-navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 0){
        $('.header').addClass('sticky');
      }else{
        $('.header').removeClass('sticky');
      }
  
      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }
  
      // scroll spy 
  
       $('.section').each(function(){
  
        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 200 ;
        let id = $(this).attr('id');
        let height = $(this).height() ;
  
        if(top > offset && top < offset + height){
          $('.header-navbar a').removeClass('active');
          $('.header-navbar').find(`[href="#${id}"]`).addClass('active');
        }
  
      }); 


    });
  
  
  });;
 

        /*=====SCROLL TOP======*/
    const scrollTop = document.querySelector(".scroll-top");

    window.addEventListener("scroll", function(e) {
        if (this.scrollY >= 500) {
            scrollTop.classList.add("scrolltop-active");
        } else {
            scrollTop.classList.remove("scrolltop-active");
        }
    });
  

var swiper = new Swiper(".review-slider", {
    spaceBetween: 22,
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});




