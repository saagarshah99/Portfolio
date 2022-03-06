const jobTitle = "Junior DevOps Engineer";
const portfolioTitle = "Development Portfolio";

//output current year in footer
document.getElementById("output-year").innerHTML = new Date().getFullYear();
        
//scroll/navigate to absolute top or bottom of page
const goToPageTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    typeWriter("#job-title", jobTitle);
}
const goToPageBottom = () => {
    location.href = "#portfolio-section";
    typeWriter("#development-portfolio", portfolioTitle);
}

//show top scroll button when user scrolls down at least 20px from top of document
const scrollFunction = () => {
    const btnScrollToTop = document.getElementById("btnScrollToTop");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        btnScrollToTop.style.display = "block";
    } 
    else {btnScrollToTop.style.display = "none";}
}
window.onscroll = () => scrollFunction();

//open given link in new tab
const linkNewTab = (url) => window.open(url, '_blank').focus();

//takes a selector and piece of text and slowly outputs each character (typing effect)
const typeWriter = (selector, txt, currentChar) => {
    const selectedText = document.querySelector(selector);
    
    if(!currentChar) {
        currentChar = 0;
        selectedText.innerHTML = "";
    }
    
    if (currentChar < txt.length) {
        selectedText.innerHTML += txt.charAt(currentChar);
        currentChar++;
        setTimeout(typeWriter, 100, selector, txt, currentChar);
    }
    else selectedText.innerHTML += "<span class='blink-text'> |</a>";
}

//created array to invoke typewriter for multiple headings upon page load
const linkHeadingArr = [
    ["#job-title", jobTitle], 
    ["#development-portfolio", portfolioTitle]
];
linkHeadingArr.forEach(link => typeWriter(link[0], link[1]));