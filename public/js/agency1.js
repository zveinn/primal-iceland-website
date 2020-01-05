 // Smooth scrolling via animate()

$(document).ready(function(){
 

  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    }
  });
});


// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = 320;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
      $('.navbar-title').removeClass('display-none');
      $('.menu-social-icon').addClass('color-white');
      $('.menu-item').addClass('color-white');
      $('.navbar-title').addClass('display');
      if (window.innerWidth > 767){
        $('.navbar-default').addClass('mdc-elevation--z6');
      }
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
      $('.menu-social-icon').removeClass('color-white');
      $('.menu-item').removeClass('color-white');
      $('.navbar-title').addClass('display-none');
      $('.navbar-title').removeClass('display');
      $('.navbar-default').removeClass('mdc-elevation--z6');
    }
  });
});

$(document).ready(function(){
  var maxOffset = 320;
  if ($(window).scrollTop() >= maxOffset) {
    if (window.innerWidth > 767){
      $('.navbar-default').addClass('mdc-elevation--z6');
    }

    $('.navbar-default').addClass('navbar-shrink');
    $('.navbar-title').removeClass('display-none');
     $('.menu-social-icon').addClass('color-white');
      $('.menu-item').addClass('color-white');
    $('.navbar-title').addClass('display');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
    $('.navbar-default').removeClass('mdc-elevation--z6');
    $('.navbar-title').addClass('display-none');
          $('.menu-social-icon').removeClass('color-white');
      $('.menu-item').removeClass('color-white');
    $('.navbar-title').removeClass('display');


  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
