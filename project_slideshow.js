
// Next/previous controls (receive positive or negative value)
function plusSlides(n) 
{
    showSlides(slideIndex += n);
}

//set default project slide value and choose which image to output depending on which index it receives
var slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) 
{
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (var i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
  
  slides[slideIndex-1].style.display = "block";
}