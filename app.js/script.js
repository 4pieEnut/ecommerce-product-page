const btnhamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header");

btnhamburger.addEventListener('click', () => {
  console.log('Open Hamburger');

  if (header.classList.contains('open')) {
    header.classList.remove('open'); // Close Hamburger
  }
  else {
    header.classList.add('open'); // Open Hamburger
  }
});


// Script for product number count

const plus = document.querySelector(".plus");
const number = document.querySelector(".number");
const minus = document.querySelector(".minus");
const price = document.querySelector(".price")

let a = 0;

plus.addEventListener('click', () => {
  console.log('Add Product');

  a++;
  number.innerText = a;
});

minus.addEventListener('click', () => {
  console.log('Remove Product');
  if(a > 1){

    a--;
    number.innerText = a;
  }
  
});


// Change Thumbnail Image to Main Image

const main = document.getElementById("main");
const thumbnail = document.getElementsByClassName("thumbnail");

thumbnail[0].addEventListener('click', () => {
  console.log('Make Thumbnail Main Image');

  main.src = thumbnail[0].src;
});

thumbnail[1].addEventListener('click', () => {
  console.log('Make Thumbnail Main Image');

  main.src = thumbnail[1].src;
});

thumbnail[2].addEventListener('click', () => {
  console.log('Make Thumbnail Main Image');

  main.src = thumbnail[2].src;
});

thumbnail[3].addEventListener('click', () => {
  console.log('Make Thumbnail Main Image');

  main.src = thumbnail[3].src;
});


// Script for Main image slider
const imageSlider = ["../images/image-product-1.jpg", "../images/image-product-2.jpg", "../images/image-product-3.jpg", "../images/image-product-4.jpg"];

const bg = document.querySelector('.main_image_mobile');
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentImage = 0;

next.addEventListener('click', () => {
  console.log('Next Image');
  
  currentImage ++;
  bg.src = imageSlider[currentImage].src;
});

prev.addEventListener('click', () => {
  console.log('Previous Image');

  currentImage --;
  bg.src = imageSlider[currentImage].src;
});

// cart content  display script

const cart = document.querySelector("#cart");
const content = document.querySelector(".main_cart");

cart.addEventListener('click', () => {
  console.log('Open Cart');

  if(content.classList.contains('open_cart')){
    content.classList.remove('open_cart');
  }
  else {
    content.classList.add('open_cart');
  }
});
