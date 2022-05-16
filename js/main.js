jQuery(document).ready(function ($) {


    $(window).bind('resizeEnd', function () {
        $('.header_area,.singlebgslider').css('height', $(window).height());
    });

    $(window).resize(function () {

        if (this.resizeTo) clearTimeout(this.resizeTo);
        setTimeout(function () {
            $(this).trigger('resizeEnd');
        });

    }).trigger('resize')

    $("#sticker").sticky({
        topSpacing: 0,
        zIndex: 5555
    });
    
    
    $('.navbar').meanmenu();
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.single_calculate').click(function () {
        $(this).addClass("addcolor").siblings('div.single_calculate').removeClass('addcolor');
    });   
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    $('.testimonil-wrapper').slick({
        autoplay: true,
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

});