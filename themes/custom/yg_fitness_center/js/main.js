(function ($) {

 Drupal.behaviors.exampleModule = {
   attach: function (context, settings) {

  'use strict'; 
        function main() {
        (function () {
           'use strict';
            $('a.page-scroll').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 50
                    }, 900);
                    return false;
                  }
                }
              });

              $("#block-mainnavigation-2 ul li:first-child a").addClass("page-scroll");
              $("#block-mainnavigation-2 ul li:first-child a").attr("href", "#home");
              $("#block-mainnavigation-2 ul").addClass("nav navbar-nav navbar-right");
              $('body').scrollspy({
                  target: '.navbar-default',
                  offset: 80
              });

              $(".menu li:first-child a").addClass("page-scroll");
              $(".menu li:first-child a").attr("href","#page-top");        
              $(".menu").addClass("navbar-right");            
                      $('body').scrollspy({ 
              target: '.navbar-default',
              offset: 80
              }); 
              }());
        }
        main();
           $(window).scroll(function() {
    if ($("body").offset().top > 50) {
        $(".navbar-collapse").addClass("in");
    } else {
        $(".navbar-collapse").removeClass("in");    
    }
  $("#menu .nav li:first-child a").attr("href", "#home");
  $('.young-skins-panel').unbind('click').bind('click', function (e) {
      $(this).toggleClass("active");
  });
});
}}})(jQuery, Drupal);