/*global $, jQuery*/
(function ($) {
  'use strict';
  $(function () {

  /* CSS */
    // Pulse
    $("#landing").toggleClass("scale-out").toggleClass("scale-in");
    // Transitions

  /*  Components */
    // Badges
    // Buttons
    // Breadcrumbs
    // Cards
    // Chips
    // Collections
    // Footer
    // Forms
    // Icons
    // Navbar
    // Pagination
    // Preloader

  /* JavaScript */
    // Carousel
    // Collapsible
    $('.collapsible').collapsible({
      accordion: true
    });
    // Dialogs
    // Dropdown
    // $('.dropdown-button').dropdown({
    //   constrain_width: false
    // });
    // Feature Discovery
    // Media
    // Models
    $('.modal').modal();
    // Parallax
    // $('.parallax').parallax();
    // Pushpin
    //var wrap = $(".page aside").offset().top;
    //var hdr = $('.page header').height();

    //$(window).on('scroll', function () {
    //  if ($(window).scrollTop() + 64 >= hdr) {
    //    $('.page .pin-wrapper').addClass('pinned');
    //  } else {
    //    $('.page .pin-wrapper').removeClass('pinned');
    //  }
    //});
    // Scrollfire
    // Scrollspy
    // Sidenav
    // $('.button-collapse').sideNav({
    //   menuWidth: 300,
    //   edge: 'left',
    //   closeOnClick: false
    // });
    $('#sidenav_questions').sideNav({
       menuWidth: 450,
       edge: 'right',
       closeOnClick: false
    });
    // Tabs
    // Transitions
    // Waves

  }); // end of document ready
}(jQuery)); // end of jQuery name space
