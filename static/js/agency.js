// Smooth scrolling via animate()
if (window.location.pathname == "/handstand/") {
  $('meta[name=ogurl]').attr('content', "http://primal-iceland.zkynet.io/handstand");
  $('meta[name=ogtype]').attr('content', "website");
  $('meta[name=ogtitle]').attr('content', "Handstæður title");
  $('meta[name=ogdescription]').attr('content', "handstöður með helga!");
  $('meta[name=ogimage]').attr('content', "http://primal-iceland.zkynet.io/img/handstand/1.png");

}

$(document).ready(function(){
 

  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
      $('.navbar-title').removeClass('display-none');
      $('.navbar-title').addClass('display');

    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
      $('.navbar-title').addClass('display-none');
      $('.navbar-title').removeClass('display');

    }
  });
});

$(document).ready(function(){
  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');

    $('.navbar-title').removeClass('display-none');
    $('.navbar-title').addClass('display');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');

    $('.navbar-title').addClass('display-none');
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
