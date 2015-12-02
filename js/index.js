$(document).ready(function(){

/////////////////////////////////////////carousel
$("#main-owl").owlCarousel({
	theme : "owl-theme",
	items: 1,
	singleItem: true,
	pagination: false,
	navigation: true,
  transitionStyle : "fadeUp"
});
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

$(window).resize(function(){
  slider();
});

 
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
  

});