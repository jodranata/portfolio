$(function() {
  $('.hamburger-button').on('click', function(e) {
    $('.navbar-lists').toggleClass('display');
    $('.nav-container').toggleClass('expand');
    e.preventDefault();
  });
  function collapseNav() {
    $('.navbar-lists').removeClass('display');
    $('.nav-container').removeClass('expand');
  }

  $(document).on('click', function(e) {
    const isExpand = $('.nav-container').hasClass('expand');
    const isFocus = $(e.target).parents('.nav-container').length === 1;
    if (isExpand && !isFocus) collapseNav();
  });
});
