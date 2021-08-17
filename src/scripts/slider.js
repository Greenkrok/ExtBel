$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    slidesToShow: 2,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 960,
        setting: {
          slidesToShow: 1
        }
      }
    ],
    mobileFirst: true
  });
});
