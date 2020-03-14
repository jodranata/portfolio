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

  const myName = document.getElementById('my-fullname');

  const typewriter = new Typewriter(myName, {
    loop: true,
    delay: 80,
    deleteSpeed: 60
  });

  typewriter
    .typeString('di Pranata')
    .pauseFor(3700)
    .deleteChars(8)
    .pauseFor(3250)
    .deleteAll(200)
    .pauseFor(3850)
    .start();

  $('.intro-target').vTicker({
    speed: 1200,
    pause: 4500,
    animation: 'fade',
    mousePause: false,
    showItems: 1,
    direction: 'down'
  });
});
