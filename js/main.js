(function($) {

  var breakpoints = new Map();
  breakpoints.set('sm', 576);
  breakpoints.set('md', 768);
  breakpoints.set('lg', 992);
  breakpoints.set('xl', 1200);
  breakpoints.set('xxl', 1400);

  const NAMES_PADDING_LEFT = 20;
  const NAMES_PADDING_RIGHT = 30;

  function setPageLayout() {
    if ($(window).width() < breakpoints.get('sm')) {
      // One column.
      $('.names').css('height', 'auto');
      $('.chunk').css('width', '100%');
    } else if ($(window).width() < breakpoints.get('md')) {
      // Two columns.
      $('.names').css('height', $(window).width()*2.4);
      $('.chunk').css('width', '50%');
    } else if ($(window).width() < breakpoints.get('xl')) {
      // Three columns
      $('.names').css('height', $(window).width()*1.05);
      $('.chunk').css('width', '33%');
    } else if ($(window).width() < breakpoints.get('xxl')) {
      // Four columns (variable width).
      $('.names').css('height', $(window).width()*0.627);
      $('.chunk').css('width', '25%');
    } else {
      // Four columns (fixed width).
      $('.names').css('height', breakpoints.get('xxl')*0.627);
      $('.chunk').css('width', breakpoints.get('xxl')*0.242);

      var extraPadding = ($(window).width() -  breakpoints.get('xxl') - NAMES_PADDING_LEFT - NAMES_PADDING_RIGHT) / 2;
      $('.names').css('padding-left', NAMES_PADDING_LEFT + extraPadding);
      $('.names').css('padding-right', NAMES_PADDING_RIGHT + extraPadding);
    }

    // Remove margins on smaller screens.
    if ($(window).width() <= breakpoints.get('xxl')) {
      $('.names').css('padding-left', NAMES_PADDING_LEFT);
      $('.names').css('padding-right', NAMES_PADDING_RIGHT);
    }

    // Put the scroll button exactly in the middle of the screen.
    $('.scroll-button').css('left', $(window).width()/2 - $('.scroll-button').width()/2);
  }

  function removeScrollButton() {
    $('.scroll-button').fadeOut(300, function() { $('.scroll-button').remove(); })
  }

  $(function() {

    setPageLayout();
    $('.scroll-button').css('display', 'block');

    $(window).resize(function() {
      setPageLayout();
    });

    $('.scroll-button').click(function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);

      removeScrollButton()
    });

    $(window).scroll(function () {
      // Remove the scroll button if the names section is now at least 1/4 of the viewport.
      if ($('.names').offset().top < ($(window).scrollTop() + ($(window).height() * 3 / 4))) {
        removeScrollButton();
      }
      // Remove the scroll button if the user scrolls to the bottom of the page.
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        removeScrollButton();
      }
    });

  });

})(jQuery);
