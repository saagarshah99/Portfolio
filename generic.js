//output current year in footer
document.getElementById("output-year").innerHTML = new Date().getFullYear();
        
//scroll/navigate to absolute top or bottom of page
function goToPageTop() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function goToPageBottom()
{
    window.scrollTo(0,document.body.scrollHeight);
}

//show top scroll button when user scrolls down at least 20px from top of document
window.onscroll = function() {scrollFunction()};
function scrollFunction() 
{
    var btnScrollToTop = document.getElementById("btnScrollToTop");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        btnScrollToTop.style.display = "block";
    } 
    else {btnScrollToTop.style.display = "none";}
}

//output alert message which specified colour depending on type at top of page
function outputAlert(message, alertColour)
{
    var alertDiv = document.getElementById("output-alert");
    alertDiv.innerHTML = message;
    alertDiv.style.color = alertColour;
    alertDiv.style.fontWeight = "Bold";

    goToPageTop();
}





let currentChar = 0;
const typingSpeed = 50;
const typewriter = (selector, text) =>
{
    // const text = selector.replace("#", "")
    
    if (currentChar < text.length) 
    {
        document.querySelector(selector).innerHTML += text.charAt(currentChar);
        currentChar++;
        setTimeout(typewriter, typingSpeed);
    }

    //currentChar = 0;
}


//typewriter("#software-developer", "Software Developer");