$(function() {
  const navButton = document.querySelector('.navbar-lists');
  $('.hamburger-button').on('click', function(e) {
    $('.navbar-lists').toggleClass('display');
    $('.nav-container').toggleClass('expand');
    e.preventDefault();
  });
  function collapseNav() {
    $('.navbar-lists').removeClass('display');
    $('.nav-container').removeClass('expand');
  }
});
