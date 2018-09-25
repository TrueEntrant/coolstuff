$(window).on('mousewheel', function( ) {
  if(!$('.dots-small').hasClass('animate-small-dots')) {
    $('.dots-small').addClass('animate-small-dots');
    setTimeout( function () {
      $('.dots-small').removeClass('animate-small-dots');
    }, 1000);
  }
  if(!$('.dots-big').hasClass('animate-big-dots')) {
    $('.dots-big').addClass('animate-big-dots');
    setTimeout( function () {
      $('.dots-big').removeClass('animate-big-dots');
    }, 1000);
  }
  if(!$('.lines-big').hasClass('animate-big-lines')) {
    $('.lines-big').addClass('animate-big-lines');
    setTimeout( function () {
      $('.lines-big').removeClass('animate-big-lines');
    }, 1000);
  }
  if(!$('.lines-small').hasClass('animate-small-lines')) {
    $('.lines-small').addClass('animate-small-lines');
    setTimeout( function () {
      $('.lines-small').removeClass('animate-small-lines');
    }, 1000);
  }
});

