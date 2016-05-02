jQuery(document).ready(function($) {
  $('#main').fullpage({
    sectionsColor: ['#0A0A0A', '#393E46', '#303841', '#3A4750', '#222831']
  });

  setTimeout(function() {
    $('#loader-wrapper').fadeOut(500);
    autoScrolling();
  }, 3000);

  $(window).resize(function(){
    autoScrolling();
  });

  function autoScrolling() {
    var $window_width = $(window).width();
    if($window_width < 767){
      $('#main').fullpage.setAutoScrolling(false);
    } else {
      $('#main').fullpage.setAutoScrolling(true);
    }
  }

  $('.logo_img').dimmer({
    on: 'hover'
  });

  $('.schedule_detail').click(function() {
    var which_detail = $(this).attr('value');
    $('#schedule_detai_' + which_detail).modal('show');
  });
  $('.ui.modal .close').click(function() {
    var which_detail = $(this).attr('value');
    $('#schedule_detai_' + which_detail).modal('hide');
  });
});
