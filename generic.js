//output current year in footer
document.getElementById("output-year").innerHTML = new Date().getFullYear();
        
//scroll/navigate to absolute top or bottom of page
function goToPageTop() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    typeWriter("#software-developer", "Software Developer");
}
function goToPageBottom()
{
    window.scrollTo(0,document.body.scrollHeight);
    typeWriter("#development-portfolio", "Development Portfolio");
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

//takes a selector and piece of text and slowly outputs each character (typing effect)
const typeWriter = (selector, txt, i) =>
{
    const selectedText = document.querySelector(selector);
    
    if(i === undefined) i = 0;
    if(i === 0) selectedText.innerHTML = "";
    if (i < txt.length) 
    {
        selectedText.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 100, selector, txt, i);
    }
    else selectedText.innerHTML += "<span class='blink-text'> |</a>";
}
typeWriter("#software-developer", "Software Developer");
typeWriter("#development-portfolio", "Development Portfolio");