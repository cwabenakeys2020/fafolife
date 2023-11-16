let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const nav = document.querySelector("#nav");
const totalSlides = slides.length;

function showSlide(index) {
  const newPosition = -index * 100 + "%";
  document.querySelector(".slider-container").style.transform =
    "translateX(" + newPosition + ")";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Automatically advance to the next slide every 3 seconds
setInterval(nextSlide, 3000);

// document.onscroll = function () {
//  nav.style.position = "sticky";
//  nav.style.top = "10";
//  nav.style.left = "0";
//  nav.style.right = "0";
 
// }