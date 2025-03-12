$(function () {
    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 2000,
            disableOnInteracton: false,
        },

        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',

        }
    })

    const MAINEVENTSLIDE = new Swiper('.main_event_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,

        breakpoints: {
            541: {
                slidesPerView: 4,
            }
        },

        navigation: {
            nextEl: '.main_event .arrows .next',
            prevEl: '.main_event .arrows .prev',

        }
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $('.familySite>a').on('click', function (e) {
        e.preventDefault();
        $('.familySite ul').slideToggle()
    })

});

$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')

    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideToggle();
        }

    });

    $(window).on('resize', function () {
        let w = $(window).width();

        if (w > 768) {
            $('.header .gnb').removeClass('on');
            $('.header .gnb>ul>li ul').removeAttr('style')
        }
    })
})
