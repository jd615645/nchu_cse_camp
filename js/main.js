jQuery(document).ready(function($) {
  $('#main').fullpage({
    sectionsColor: ['#0A0A0A', '#393E46', '#303841', '#3A4750', '#222831']
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

  autoScrolling();
});