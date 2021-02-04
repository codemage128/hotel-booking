/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

$(function () {
  var input = document.getElementById('period');
  var datepicker = new HotelDatepicker(input, {
    autoClose: false,
    format: "MM-DD-YYYY",
  });
  var inputMobile = document.getElementById('period-mobile');
  var datepickerMobile = new HotelDatepicker(inputMobile, {
    autoClose: false,
    format: "MM-DD-YYYY",
  });

  $('.btn-mobile-book').click(function () {
    $('.mobile-form').show("slow");
  })
  $('.btn-close').click(function () {
    $('.mobile-form').hide("slow");
  })

  input.addEventListener('afterClose', function () {
    var rangeDate = datepicker.getValue();
    var rangeArray = rangeDate.split(' - ');
    var dateStart = new Date(rangeArray[0]);
    var dateEnd = new Date(rangeArray[1]);
    $('#checkInDate').val(dateStart.getTime());
    $('#checkOutDate').val(dateEnd.getTime());
  }, false);
  inputMobile.addEventListener('afterClose', function () {
    var rangeDate = datepickerMobile.getValue();
    var rangeArray = rangeDate.split(' - ');
    var dateStart = new Date(rangeArray[0]);
    var dateEnd = new Date(rangeArray[1]);
    $('#checkInDateMobile').val(dateStart.getTime());
    $('#checkOutDateMobile').val(dateEnd.getTime());
  }, false);
})
