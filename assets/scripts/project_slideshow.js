/***************************PROJECT SLIDESHOW NAVIGATION******************************/

// Next/previous controls (receive positive or negative value)
const plusSlides = (n) => showSlides(slideIndex += n);

//set default project slide value and choose which image to output depending on which index it receives
let slideIndex = 1;
const showSlides = (n) => {
    const slides = document.getElementsByClassName("project-slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}
showSlides(slideIndex);

// adding event listeners for navigating through slides
const navIcon = ".fa-chevron-circle-";
const btnPreviousSlide = document.querySelectorAll(navIcon+"left");
btnPreviousSlide.forEach(button => button.addEventListener("click", e => plusSlides(-1)));

const btnNextSlide = document.querySelectorAll(navIcon+"right");
btnNextSlide.forEach(button => button.addEventListener("click", e => plusSlides(1)));