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






//looping through different links to listen to a click, opening in new tab
const projectLinks = [
    ["#btnJugglingGit", "Juggleology", "GitHub"],
    ["#btnJugglingWeb", "https://saagarshah.pythonanywhere.com/Juggleology/", "Other"],
    ["#btnCalculatorGit", "JS-Calculator", "GitHub"],
    ["#btnCalculatorWeb", "JS-Calculator", "GitHub-Site"],
    ["#btnPizzaGit", "Java-Pizza-Program", "GitHub"],
    ["#btnSpaceshipsGit", "Spaceships", "GitHub"],
    ["#btnSpaceshipsWeb", "Spaceships", "GitHub-Site"]
];
projectLinks.forEach(link => 
{
    document.querySelector(link[0]).addEventListener("click", e => 
    {
        if(link[2] === "GitHub") linkNewTab("https://github.com/saagarshah99/"+link[1]);
        if(link[2] === "GitHub-Site") linkNewTab("https://saagarshah99.github.io/"+link[1]);
        else linkNewTab(link[1]);
    })
})