$(function() {
  $('.hamburger-button').on('click', function(e) {
    $('.navbar-lists').toggleClass('display');
    $('.nav-container').toggleClass('expand');
    e.preventDefault();
  });
});
