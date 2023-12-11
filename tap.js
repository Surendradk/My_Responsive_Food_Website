let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}


/*swiper code */
var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 loop:true,
});



var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 loop:true,
 breakpoints: {
  0: {
      slidesPerView:1,
  },
  640: {
      slidesPerView: 2,

  },
  768: {
      slidesPerView: 2,
  },
  1024: {
      slidesPerView: 3,
  },

 },
});

