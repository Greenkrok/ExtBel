$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    waitForAnimate: false,
    mobileFirst: true,
    autoplay:true,
    responsive: [
      {
          breakpoint: 960,
          settings: {
              slidesToShow: 2
          }
      },

      {
          breakpoint: 720,
          settings: {
              slidesToShow: 1
          }
      }
      ]
  });
});
