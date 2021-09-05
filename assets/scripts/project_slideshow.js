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



//looping through different links to listen to a click, opening in new tab
const projectLinks = [
    ["JugglingGit", "Juggleology", "GitHub"],
    ["JugglingWeb", "https://saagarshah.pythonanywhere.com/Juggleology/", "Other"],
    
    ["CalculatorGit", "JS-Calculator", "GitHub"],
    ["CalculatorWeb", "JS-Calculator", "GitHub-Site"],
    
    ["PizzaGit", "Java-Pizza-Program", "GitHub"],
    
    ["SpaceshipsGit", "Spaceships", "GitHub"],
    ["SpaceshipsWeb", "Spaceships", "GitHub-Site"],
    
    ["RenameGit", "Rename-Files", "GitHub"]
];
projectLinks.forEach(link => {
    document.querySelector("#btn"+link[0]).addEventListener("click", event => {
        if(link[2] === "GitHub") linkNewTab("https://github.com/saagarshah99/"+link[1]);
        
        if(link[2] === "GitHub-Site") linkNewTab("https://saagarshah99.github.io/"+link[1]);
        
        else linkNewTab(link[1]);
    })
})