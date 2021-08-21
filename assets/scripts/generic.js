//output current year in footer
document.getElementById("output-year").innerHTML = new Date().getFullYear();
        
//scroll/navigate to absolute top or bottom of page
const goToPageTop = () =>
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    typeWriter("#software-developer", "Software Developer");
}
const goToPageBottom = () =>
{
    // window.scrollTo(0,document.body.scrollHeight);
    location.href = "#portfolio-section";
    typeWriter("#development-portfolio", "Development Portfolio");
}

//show top scroll button when user scrolls down at least 20px from top of document
const scrollFunction = () =>
{
    const btnScrollToTop = document.getElementById("btnScrollToTop");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        btnScrollToTop.style.display = "block";
    } 
    else {btnScrollToTop.style.display = "none";}
}
window.onscroll = () => scrollFunction();

//output alert message which specified colour depending on type at top of page
const outputAlert = (message, alertColour) =>
{
    const alertDiv = document.getElementById("output-alert");
    alertDiv.innerHTML = message;
    alertDiv.style.color = alertColour;
    alertDiv.style.fontWeight = "Bold";

    goToPageTop();
}

//open given link in new tab
const linkNewTab = (url) => window.open(url, '_blank').focus();

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

//created array to invoke typewriter for multiple headings upon page load
const linkHeadingArr = [["#software-developer", "Software Developer"], 
["#development-portfolio", "Development Portfolio"]];
for (let i = 0; i < Object.keys(linkHeadingArr).length; i++) 
{
    typeWriter(linkHeadingArr[i][0], linkHeadingArr[i][1]);    
}

//output success message if CV is successfully download
// const btnCV = document.querySelector("#cv-link");
// btnCV.addEventListener("click", e => outputAlert('CV Successfully Downloaded', 'Green'));

//looping through different links to listen to a click, opening in new tab
const projectLinks = [
    ["#btnJugglingGit", "Juggleology", "GitHub"],
    ["#btnJugglingWeb", "https://saagarshah.pythonanywhere.com/Juggleology/", ""],
    ["#btnCalculatorGit", "JS-Calculator", "GitHub"],
    ["#btnCalculatorWeb", "calculator.html", ""]
];
projectLinks.forEach(link => 
{
    document.querySelector(link[0]).addEventListener("click", e => 
    {
        let url = link[1];
        if(link[2] === "GitHub") url = "https://github.com/saagarshah99/"+url;
        
        linkNewTab(url);
    })
})