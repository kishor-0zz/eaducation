jQuery(function ($) {
  "use strict"
  $(document).ready(function () {

    $(window).scroll(function () {

      if ($(window).scrollTop() > 56) {
        $("#st-menu").addClass('fixed');
      } else {
        $("#st-menu").removeClass('fixed');
      }

    });

    $('#slider').owlCarousel({
      autoplay: false,
      smartSpeed: 400,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      loop: true,
      margin: 0,
      nav: true,
      dots: true,
      navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        }
      }
    });

    $('#photo-gallery').owlCarousel({
      autoplay: false,
      smartSpeed: 400,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        },
        1200: {
          items: 4
        }
      }
    });

    $('#st-videogallery').magnificPopup({
      type: 'iframe',
      delegate: 'a',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      }
    });

    $('#photo-gallery').magnificPopup({
      type: 'image',
      delegate: 'a',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      }
    });


    // Counter section
    var a = 0;
    $(window).scroll(function () {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-digit').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          },

            {
              duration: 2000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        a = 1;
      }
    });

    $('.search-btn').on('click', function () {
      $('.st-search-panel').removeClass('popup-hide');
    });

    $('.btn-popup-close').on('click', function () {
      $('.st-search-panel').addClass('popup-hide');
    });

    $('.cart-btn').on('click', function () {
      $('.st-cart-panel').slideToggle();
    });

    $('.cart-item .cart-item-close').on('click', function () {
      $('.cart-item:hover').remove();
    });



    // Isotop init
    var gridfilter = $('#product-filter-content');
    if (gridfilter.length) {
      $('#product-filter-content').imagesLoaded(function () {
        $('#product-filter-nav').on('click', 'button', function () {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({
            filter: filterValue
          });
        });
        var $grid = $('#product-filter-content').isotope({
          itemSelector: '.product-filter-item',
          percentPosition: true,
          masonry: {
            columnWidth: '.product-filter-item',
          }
        });
      });
    }
    if ($('#product-filter-nav button').length) {
      var projectfiler = $('#product-filter-nav button');
      if (projectfiler.length) {
        $('#product-filter-nav button').on('click', function (event) {
          $(this).siblings('.active').removeClass('active');
          $(this).addClass('active');
          event.preventDefault();
        });
      }
    }


  });
});

