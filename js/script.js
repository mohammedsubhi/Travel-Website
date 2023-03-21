
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let closeForm = document.querySelector('#form-close');
let menuBar = document.querySelector('#menu-bar');
let navBar  = document.querySelector('.navbar');
let videoSlider = document.querySelector('#video-slider')
let vidBtn = document.querySelectorAll('.vid-btn')


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active')
})


loginBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
})

closeForm.addEventListener('click', () =>{
    loginForm.classList.remove('active');
})

menuBar.addEventListener('click', () =>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active')
})

vidBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;

    });
})


var swiper = new Swiper(".review-slider", {
    grabCursor: true,
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    
});

var swiper = new Swiper(".brand-slider", {
    grabCursor: true,
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
    
});


let currentYearEl = document.querySelector('.currentYear');
var currentDate = new Date();
currentYearEl.innerText = currentDate.getFullYear();

