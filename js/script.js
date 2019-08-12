if (window.innerWidth < 1022) {
  $('.header__button').click(function(evt) {
    evt.preventDefault;
    evt.stopPropagation();
    $('.menu').toggleClass('menu--open');
  });
  
  $('body').click(function(){
    $('.menu').removeClass('menu--open');
  });
}
