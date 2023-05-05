'use strict';
document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('nav').classList.toggle("open")
})

document.querySelector('.close-btn').addEventListener('click', () =>{
    document.querySelector('nav').classList.toggle("open")
})



var mySwiper = new Swiper ('.swiper-container', {
    speed: 400,
    spaceBetween: 50,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: true,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: true,
    autoplayStopOnLast: false
});