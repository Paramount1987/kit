$(window).on('load', function () {
  
    var preloader = $('#page-preloader'),
    spinner   = preloader.find('.spinner');
    spinner.fadeOut();
    preloader.fadeOut('slow');

/////////////////////////////////////////carousel
$("#main-owl").owlCarousel({
  theme : "owl-theme",
  items: 1,
  singleItem: true,
  pagination: false,
  navigation: true,
  autoPlay: true,
  transitionStyle : "fadeUp"
  // afterAction: function(elem){
  //   var current = this.currentItem;
  //   var prev = this.prevItem;

  //   elem.find(".owl-item").eq(current).find(".inner-slide").addClass("active");

  //   elem.find(".owl-item").eq(prev).find(".inner-slide").removeClass("active");
    

  // }
});

});


$(document).ready(function(){


//////////////////////////nav menu
setTimeout(function(){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 0){
      $('.nav-menu').addClass("scrolled");
    }else{
      $('.nav-menu').removeClass("scrolled");
    }
     
  }); 
}, 10); 



////////////////////////////////////////////end

$('.bottom-page').click(function(){ 
  $('html,body').animate({ scrollTop: 0 }, 800);
});

$(".down-page").click(function(e){
  e.preventDefault();
  var top = $("html").height() - 60;
  $('html,body').animate({ scrollTop: top }, 800);
});

$(".menu-list").on("click","a",function(e){

   e.preventDefault();

var container = $("." + $(this).data("class")).offset();


  $('html,body').animate({ scrollTop: container.top -58 }, 500);
});
/////slider ui
function slider(){

  if($( "#slider" ).length){

      var container = $(".works-type");
      var ul = $(".chema-list");
      var itemsWidth = ul.innerWidth() - container.outerWidth();

      $("#slider").slider(
      {
          min: 0,
          max: itemsWidth,
          stop: function(event, ui){ul.animate({'left': ui.value * -1}, 500);},
          slide: function(event, ui){ul.css('left', ui.value * -1);}
      });

}

}
slider();

$('.scroll-pane').jScrollPane();

$(".scroll-pane").on("scroll",function(){

  var str = $(".jspPane").css('left').substring(1, $(".jspPane").css('left').length -2);
console.log(str);

  $( "#slider" ).slider( "value", str * 1.025 );
});


$(window).resize(function(){
  slider();
});


function is_touch_device() {

   return !!('ontouchstart' in window) ||  navigator.userAgent.indexOf("iPad") != -1 ||  navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1;
}
 
 if(is_touch_device()){

  $('.scroll-pane').jScrollPane();
  $(".scroll-pane").on("scroll",function(){

    var str = $(".jspPane").css('left').substring(1, $(".jspPane").css('left').length -2);

    $( "#slider" ).slider( "value", str * 1.025 );
  });

  $(".scroll-pane").css({position : "relative", zIndex : "10"});

  $(window).resize(function(){

  $('.scroll-pane').jScrollPane();

});


 }
//////slider ui end

//////////////////////////////////////////////////filter show

$(".filter-header .title").click(function(){

  $(".filter-body").slideToggle();

});

$(".close-filter").click(function(e){
  e.preventDefault();
  $(".filter-body").slideUp();
});

/////////////////////////////////////////contacts hide

$("#contact, .contact-link").click(function(e){
  e.preventDefault();
  $(".contacts-hide-wrap").toggleClass("active");

});

$(".close-contacts").click(function(){

  $(".contacts-hide-wrap").removeClass("active");

});

//////////////////////////////////////////////.swipebox();
if($( ".swipebox" ).length){
  $( ".swipebox" ).swipebox();
  }
///////////////////////////////////////////link-projects
$(".link-projects").click(function(e){

  e.preventDefault();
  $(".projects-list .none").slideDown(500);
  $(".link-projects").animate({height: 0},200)

});


});