const btnhamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header");
const body = document.getElementsByTagName("body");

btnhamburger.addEventListener('click', () => {
  console.log('Open Hamburger');

  if (header.classList.contains('open')) {
    header.classList.remove('open'); // Close Hamburger
    body.classList.add('lock_scroll');
  }
  else {
    header.classList.add('open'); // Open Hamburger
    body.classList.remove('lock_scroll');
  }
});


// Script for product number count

const plus = document.querySelector(".plus");
const number = document.querySelector(".number");
const minus = document.querySelector(".minus");

let a = 0;

plus.addEventListener('click', () => {
  console.log('Add Product');

  a++;
  number.innerText = a;
});

minus.addEventListener('click', () => {
  console.log('Remove Product');
  if(a > 0){

    a--;
    number.innerText = a;
  }
  
});


// Script for Main image slider
const imageSlider = ["../images/image-product-2.jpg", "../images/image-product-3.jpg", "../images/image-product-4.jpg", "../images/image-product-1.jpg"];

const bg = document.querySelector('.main_image_mobile');
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentImage = 0;

next.addEventListener('click', () => {
  console.log('Next Image');
  
  currentImage ++;
  bg.style.background = imageSlider[currentImage];
});

prev.addEventListener('click', () => {
  console.log('Previous Image');

  currentImage --;
  bg.style.background = imageSlider[currentImage];
});

