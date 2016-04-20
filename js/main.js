jQuery(document).ready(function($) {
  $('#main').fullpage({
    sectionsColor: ['#0A0A0A', '#393E46', '#303841', '#3A4750'],
    'slidesNavigation': false,
  });

  $(window).resize(function(){
      autoScrolling();
  });

  function autoScrolling(){
    var $window_width = $(window).width();
    if($window_width < 767){
        $.fn.fullpage.setAutoScrolling(false);
    } else {
        $.fn.fullpage.setAutoScrolling(true);
    }
  }

  autoScrolling();
});
// '#222831'