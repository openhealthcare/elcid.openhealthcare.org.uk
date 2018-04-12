//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").removeClass("top-nav-fat").addClass("top-nav-slim");
  } else {
    $(".navbar-fixed-top").addClass("top-nav-fat").removeClass("top-nav-slim");
  }
});


jQuery(document).ready(function($) {
  $("[data-toggle='tooltip']").tooltip();
  $("[data-toggle='popover']").popover();

  // Smooth scrolling navigation
  $('#main-navigation .navbar-nav a, #main-navigation .navbar-brand, .app-description-text a.btn-ghost').on('click', function(e) {
    e.preventDefault();

    var link = $(this);

    $('html, body').stop().animate({
      scrollTop: $(link.attr('href')).offset().top
    }, 800, 'easeInOutExpo');

    if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
  });

  // Video background
  $(".player").mb_YTPlayer();

  $("#scroll-to-portfolio").on("click", function(e) {
    e.preventDefault();
    var link = $(this);

    $('html, body').stop().animate({
      scrollTop: $(link.attr('href')).offset().top
    }, 800, 'easeInOutExpo');
  });
});

$(window).load(function(){
  var $container = $('#filterable-list');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

  $('#filterable-nav a').click(function(){
    $('#filterable-nav .active').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });

  $('#filterable-list').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: 1
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });
});


function get_in_touch(event){

};
