let navTrigerBtn = document.getElementById('nav_triger_btn');
let nav_menu = document.getElementById('nav_menu');

//Nav Toggle
navTrigerBtn.onclick = () => {
    nav_menu.classList.toggle('active-nav');
}


//TypeWriter effect 
const typed = new Typed('#typed', {
    strings: ['Graphic Designer.', "Motion Graphic Designer."],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 3000,
    loop: true,
    cursorChar: '|',
});


//Testimonail Slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
})