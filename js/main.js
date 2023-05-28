(function($) {

  var breakpoints = new Map();
  breakpoints.set('sm', 576);
  breakpoints.set('md', 768);
  breakpoints.set('lg', 992);
  breakpoints.set('xl', 1200);
  breakpoints.set('xxl', 1400);

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
    } else {
      // Four columns.
      $('.names').css('height', $(window).width()*0.627);
      $('.chunk').css('width', '25%');
    }

    $('.scroll-button').css('left', $(window).width()/2 - $('.scroll-button').width()/2);
  }

  function removeScrollButton() {
    $('.scroll-button').fadeOut(300, function() { $('.scroll-button').remove(); })
  }

  $(function() {

    setPageLayout();

    $(window).resize(function() {
      setPageLayout();
    });

    $('.scroll-button').click(function() {
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
