
document.addEventListener('DOMContentLoaded', function () {
    let header = document.getElementById('header');
    let headerHeight = header.offsetHeight;

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > headerHeight) {
            header.classList.add('scroll-header');
        } else if  (scrollTop < headerHeight) {
            header.classList.remove('scroll-header');
        }
    }
});


$('.mob-menu-btn').on('click', function () {
    $(this).toggleClass('active');
    $('header').toggleClass('active');
    $('body').toggleClass('hidden');
    $('.navbar').slideToggle(100);
})

$( document ).ready(function() {
    if ($(window).width() <= 991) {
        $('.menu-hide-link').on('click', function () {
            $('.mob-menu-btn').removeClass('active');
            $('header').removeClass('active');
            $('body').removeClass('hidden');
            $('.navbar').slideUp(100);
        })
    }
});

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 10,
//     slidesPerView: 6,
//     freeMode: true,
//     watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//     spaceBetween: 10,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//         swiper: swiper,
//     },
// });
function createSwipers(mainSelector, thumbsSelector) {
    var thumbsSwiper = null; // Объявляем thumbsSwiper здесь, чтобы он был виден в области видимости обоих слайдеров

    // Создаем thumbs слайдер, если передан соответствующий селектор
    if (thumbsSelector) {
        thumbsSwiper = new Swiper(thumbsSelector, {
            spaceBetween: 10,
            slidesPerView: 6,
            freeMode: true,
        });
    }

    // Создаем основной слайдер
    var mainSwiper = new Swiper(mainSelector, {
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        thumbs: {
            swiper: thumbsSwiper,
        },
    });
}

// Используем функцию для создания слайдеров
createSwipers(".mySwiper2", ".mySwiper");
createSwipers(".mySwiper4", ".mySwiper3");
createSwipers(".mySwiper6", ".mySwiper5");
createSwipers(".mySwiper8", ".mySwiper7");
createSwipers(".mySwiper10", ".mySwiper9");
createSwipers(".mySwiper12", ".mySwiper11");
createSwipers(".mySwiper14", ".mySwiper13");
createSwipers(".mySwiper16", ".mySwiper15");


var swiper = new Swiper(".gallery-slider", {
    spaceBetween: 32,
    slidesPerView: 2,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
        },
        640: {
            slidesPerView: 1.2,
            spaceBetween: 32,
        },
        1024: {
            spaceBetween: 32,
            slidesPerView: 2,
        },
    },
});
function initializeSwiper() {
    var swiper = new Swiper(".brands-slider", {
        slidesPerView: 7,
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 1550,
        },
        // scrollbar: {
        //     el: ".swiper-scrollbar",
        //     hide: true,
        // },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: true,
            },
            640: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 6,
            },
        },
    });
}

if ($(window).width() <= 991) {
    initializeSwiper();
}

$(window).resize(function() {
    if ($(window).width() <= 991) {
        initializeSwiper();
    }
});
function initializeSwiperTeams() {
    var swiper = new Swiper(".teams-slider", {
        slidesPerView: 1.1,
        spaceBetween: 16,
        loop: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });
}

if ($(window).width() <= 480) {
    initializeSwiperTeams();
}

$(window).resize(function() {
    if ($(window).width() <= 480) {
        initializeSwiperTeams();
    }
});

$('.teams-item-cont').on('click' , function (){
    $(this).siblings('.modal-team').addClass('active');
    $('body').addClass('no-hidden-slider');
});
$('.close-btn').on('click' , function (){
    $('.modal-team').removeClass('active');
    $('body').removeClass('no-hidden-slider');
});

jQuery(document).ready(function () {
    $('#scroll-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});

function moveBlock() {
    var screenWidth = window.innerWidth;
    var block = document.getElementById('copyright');

    if (screenWidth < 768) {
        var targetContainer = document.getElementById('footer-mob-copyright');
        targetContainer.appendChild(block);
    } else {
        var originalContainer = document.getElementById('footer-nav__text');
        originalContainer.appendChild(block);
    }
}

window.onload = moveBlock;
window.onresize = moveBlock;

$('.show_more-btn').on('click', function () {
    $('.modal-text-block').toggleClass('active');
    $('.modal-text-block p').toggleClass('active');
    let show = $(this).data("first");
    let hide = $(this).data("second");
    if ($(".modal-text-block").hasClass("active")) {
        $(".show_more-btn span").html(hide);
    } else {
        $(".show_more-btn span").html(show);
    }
});

//TAB FOR SLIDER BLOCK
function removeParam(key) {
    var url = window.location.href;
    var urlParts = url.split('?');
    if (urlParts.length >= 2) {
        var prefix = encodeURIComponent(key) + '=';
        var parts = urlParts[1].split(/[&;]/g);

        // Обратный цикл, чтобы не изменять длину массива во время перебора
        for (var i = parts.length; i-- > 0;) {
            // Удаление параметра, если он найден
            if (parts[i].lastIndexOf(prefix, 0) !== -1) {
                parts.splice(i, 1);
            }
        }

        // Собираем URL-адрес без удаленного параметра
        url = urlParts[0] + (parts.length > 0 ? '?' + parts.join('&') : '');
        // Замена текущего URL-адреса новым без параметра
        window.history.replaceState('', document.title, url);
    }
}

// Проверяем параметр в URL-адресе для показа нужной вкладки
$(document).ready(function () {
    let tabSection = $('.tab-section');
    let tabs = tabSection.find('.b-nav-tab');
    let contents = tabSection.find('.b-tab');

    // Скрыть все вкладки, кроме первой
    tabs.not(':first').addClass('hidden');
    contents.not(':first').addClass('hidden');

    // Обработчик щелчка по вкладке
    tabs.click(function () {
        let index = $(this).index();
        tabs.removeClass('active').eq(index).addClass('active');
        contents.addClass('hidden').eq(index).removeClass('hidden');
    });

    // Проверка параметра в URL для показа нужной вкладки
    let urlParams = new URLSearchParams(window.location.search);
    let targetTab = urlParams.get('tab');
    if (targetTab) {
        let tabIndex = parseInt(targetTab) - 1; // Индекс начинается с 0
        if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex < tabs.length) {
            tabs.removeClass('active').eq(tabIndex).addClass('active');
            contents.addClass('hidden').eq(tabIndex).removeClass('hidden');
            // Удаляем параметр из URL-адреса после перехода на страницу
            removeParam('tab');
        }
    }
});


$(window).on('load', function () {
    $('.preloader').delay(350).fadeOut('slow');
});
