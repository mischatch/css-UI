
document.addEventListener('DOMContentLoaded', () => {

  $('.cross-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('cross-btn_active');
  });


  $('.arrow-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('arrow-btn_active');
  });

  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
  });

});
