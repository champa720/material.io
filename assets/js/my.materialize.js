/*global $, jQuery*/
(function ($) {
  'use strict';
  $(function () {

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
    // Collapsible
    $('.collapsible').collapsible({
      accordion : true
    });
    // Dialogs
    // Dropdown
    // Media
    // Models
    $('.modal-trigger').leanModal();
    // Parallax
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
    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: false
    });
    // Tabs
    // Transitions
    // Waves

  }); // end of document ready
}(jQuery)); // end of jQuery name space