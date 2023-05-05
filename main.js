'use strict';
document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('nav').classList.toggle("open")
})

document.querySelector('.close-btn').addEventListener('click', () =>{
    document.querySelector('nav').classList.toggle("open")
})



var mySwiper = new Swiper ('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: 5000,
    autoplayStopOnLast: false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});