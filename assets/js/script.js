// Swiper Settings
const swiper = new Swiper(".swiper", {
    allowTouchMove: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    effect: "slide",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
});

// Navbar Toggle
$(document).ready(() => {
    $(".navbar-toggle").click(() => {
        $(".navbar-toggle").toggleClass("active");
        $(".navbar-nav").slideToggle(300);
    });
});
