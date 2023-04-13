//declaring varables
const close = document.getElementById("close-btn");
const menu = document.getElementById("menu-btn");
const navList = document.getElementById("links");
const mainThumbnail = document.querySelector(".main-thumbnail");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart-wrp");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const amount = document.querySelector(".amount");
let counter = 0;
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const thumbMob = document.querySelector(".thumb-mob");
let currentImg = 1;
const mainThumbnailLightBox = document.querySelector(
  ".lightbox-container .main-thumbnail"
);
const images = document.querySelectorAll(".preview img");

//functions
function toggleMenu(){
  navList.classList.toggle("open-this-menu");
  menu.classList.toggle('openmenu');
  
}

function openLightBox() {
  lightbox.classList.remove("invisible");
}

//light function
function closeLightBox() {
    lightbox.classList.add("invisible");
}


//cart function 

function toggleCart() {
    cart.classList.toggle("invisible");
}

//plus minus handling
function incrementment() {
    counter++;
    amount.innerHTML = counter;
    e.preventDefault()
  }
  function decrement() {
    counter--;
    amount.innerHTML = counter;
    e.preventDefault()
}


//slider function
function nextImage() {
    if (currentImg == 4) {
      currentImg = 1;
    } else {
      currentImg++;
    }
    thumbMob.src = `./images/image-product-${currentImg}.jpg`;
  }
  function prevImage() {
    if (currentImg == 1) {
      currentImg = 4;
    } else {
      currentImg--;
    }
    thumbMob.src = `./images/image-product-${currentImg}.jpg`;
  }

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const lastImg = document.querySelectorAll(".selected");
      if (lastImg) {
        lastImg[0].classList.remove("selected");
      }
      image.classList.add("selected");
      const selectedImg = document.querySelector(".selected");
      switch (selectedImg.getAttribute("src")) {
        case "images/image-product-1-thumbnail.jpg":
          mainThumbnail.src = "images/image-product-1.jpg";
          mainThumbnailLightBox.src = "images/image-product-1.jpg";
          break;
        case "images/image-product-2-thumbnail.jpg":
          mainThumbnail.src = "images/image-product-2.jpg";
          mainThumbnailLightBox.src = "images/image-product-2.jpg";
          break;
        case "images/image-product-3-thumbnail.jpg":
          mainThumbnail.src = "images/image-product-3.jpg";
          mainThumbnailLightBox.src = "images/image-product-3.jpg";
          break;
        case "images/image-product-4-thumbnail.jpg":
          mainThumbnail.src = "images/image-product-4.jpg";
          mainThumbnailLightBox.src = "images/image-product-4.jpg";
          break;
      }
    });
  });

  
menu.addEventListener("click", toggleMenu);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
closeLightboxBtn.addEventListener("click", closeLightBox);
mainThumbnail.addEventListener("click", openLightBox);
plusBtn.addEventListener("click", incrementment);
minusBtn.addEventListener("click", decrement);
cartBtn.addEventListener("click", toggleCart);

