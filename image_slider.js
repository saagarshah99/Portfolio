generateImages();
var slideIndex = 0; //default slide number
showSlides(slideIndex);

//call function to navigate either to either previous or next slide
function plusSlides(n) 
{
    showSlides(slideIndex += n);
}

//take current slide number as input and call function to replace with new one
function currentSlide(n) 
{
    showSlides(slideIndex = n);
}

//take the current slide selection and update it
function showSlides(n) 
{
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}

    for (var i=0; i<slides.length; i++) 
    {
        slides[i].style.display = "none";
    }

    for (var x=0; x<dots.length; x++) 
    {
        dots[x].className = dots[x].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
}

//generating output for image slides (w/ embedded youtube links) and thumbnails
function generateImages()
{
  // [File name, youtube ID]
  var fileObject = [
    ["profile_picture.jpg", "ABfQuZqq8wg"],
    ["1.jpg", "TLV4_xaYynY"],
    ["2.jpg", "UfmkgQRmmeE"]
  ]; 
  
  var slideOutput = "";
  var captionOutput = "";
  var captions = [];
    for(var i=0; i<Object.keys(fileObject).length; i++)
    {
        var altText = fileObject[i][1]; //TODO: this text will go below the image (e.g. profile description and links)

        // TODO: put alt text in this image
        slideOutput += "<div class='mySlides'>" + 
        "<a href='#'><img src=\"images/"+fileObject[i][0]+"\"></a>" +
        "</div>";
        
        // TODO: use id to only output the caption for the current image
        /* TODO: hard code the images and captions and hide the ones that 
        aren't currently selected if it doesn't work*/
        // captionOutput += altText;

        captionOutput += "<div id='caption"+i+"'>"+fileObject[i][1]+"</div>";
    }


    // slideOutput = "<div class='mySlides'>" + 
    // "<a href='#'><img src=\"images/"+fileObject[slideIndex][0]+"\"></a>" +
    // "</div>";

    // captionOutput = fileObject[slideIndex][1];

    
    document.getElementById("slideImageOutput").innerHTML = slideOutput;
    // document.getElementById("caption").innerHTML = document.getElementById("caption"+slideIndex+1).innerHTML;
    document.getElementById("caption").innerHTML = captionOutput;
}