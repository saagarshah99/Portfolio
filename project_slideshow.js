
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

//take path of video as input and load it in lightbox (video popup)
function openProjectDemo(newSrc) 
{
    var lightBoxVideo = document.getElementById("project-video-demo");
    lightBoxVideo.src = newSrc;
    
    window.scrollTo(0, 0);
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-fade').style.display = 'block';
    //   lightBoxVideo.play();
}

//exit the lightbox if the exit button/outside fade area is clicked
function closeProjectDemo() 
{
    var lightBoxVideo = document.getElementById("project-video-demo");
    document.getElementById('lightbox').style.display = 'none';
    document.getElementById('lightbox-fade').style.display = 'none';
    lightBoxVideo.pause();
}
window.document.onkeydown = function(e) 
{
    if (!e) {e = event;}
    if (e.keyCode == 27) {closeProjectDemo();} //esc key
}