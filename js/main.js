jQuery(document).ready(function($) {
  var sheet_src = '16RdTSvelmqy6LB-IZwjSuT1K10fQ-rFW3cNv_m6pKnw';
  var url = 'https://spreadsheets.google.com/feeds/list/' + sheet_src + '/1/public/values?alt=json';

  $.getJSON(url, function(data) {
    input = data.feed.entry;
    input.forEach(function(input_data, i) {
      var name = input_data['gsx$name']['$t'],
          pay = input_data['gsx$pay']['$t'];
      pay = (pay == 'y' ? 'paid' : '');

      html = '<div class="four wide column ' + pay + '">' + name + '</div>';
      $('#student .ui.grid').append(html);
    });
  });

  $('#main').fullpage({
    sectionsColor: ['#222222', '#393E46', '#303841', '#3A4750', '#222831', '#393E46']
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
