new Swiper('.main-slider__container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

new Swiper('.reviews-slider', {
    autoHeight: true,
    slidesPerView: 2,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is <= 900px
        900: {
            slidesPerView: 1,
        }
    }
});

const openMenuButton = document.querySelector(".nav-open-button");
const closeMenuButton = document.querySelector(".nav-close-button");
let navElement = document.querySelector(".nav");

openMenuButton.addEventListener('click', () => {
    navElement.classList.toggle('nav-is-open');
});

closeMenuButton.addEventListener('click', () => {
    navElement.classList.toggle('nav-is-open');
});