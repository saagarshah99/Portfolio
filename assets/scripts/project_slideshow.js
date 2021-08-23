// Next/previous controls (receive positive or negative value)
const plusSlides = (n) => showSlides(slideIndex += n);

//set default project slide value and choose which image to output depending on which index it receives
let slideIndex = 1;
const showSlides = (n) =>
{
    const slides = document.getElementsByClassName("project-slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}
showSlides(slideIndex);

//if previous or next buttons clicked, navigate to appropriate slides
const btnPreviousSlide = document.querySelectorAll(".fa-chevron-circle-left");
btnPreviousSlide.forEach(button => button.addEventListener("click", e => plusSlides(-1)));
const btnNextSlide = document.querySelectorAll(".fa-chevron-circle-right");
btnNextSlide.forEach(button => button.addEventListener("click", e => plusSlides(1)));