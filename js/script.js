$('.header__button').click(function(evt) {
  evt.preventDefault;
  evt.stopPropagation();
});

if (window.innerWidth < 1022) {
  $('.header__button').click(function(evt) {
    evt.preventDefault;
    evt.stopPropagation();
    $('.sidebar').toggleClass('sidebar--open');
  });
  
  $('body').click(function(){
    $('.sidebar').removeClass('sidebar--open');
  });
}
