// Next/previous controls (receive positive or negative value)
const plusSlides = (n) => showSlides(slideIndex += n);

//set default project slide value and choose which image to output depending on which index it receives
let slideIndex = 1;
const showSlides = (n) =>
{
    const slides = document.getElementsByClassName("mySlides");
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

/*const projectSlidesObject = [
    ["jca_incubation.png", "JCA | London Fashion Academy Incubation Portal", 
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "As part of my internship, I built a web app using HTML, CSS (including Bootstrap), \
    JavaScript (including jQuery) and Django. It allows JCA Incubation members to exclusively \
    communicate, share events and skills with each other, access newsletters and more."],

    ["juggling_web_app.png", "Ecommerce Gaming Website", "https://www.w3schools.com/html/mov_bbb.mp4",
    "For my undergraduate final year project, using HTML, CSS (including \
    Bootstrap), JavaScript (including jQuery) and Django, I built a social network \
    and portal for jugglers that integrates many tools for managing one’s juggling \
    experience. Users can organise juggling tricks and set goals, visually learn \
    tricks using a graphical simulation, communicate with others and host events."],

    ["computer_crazy.png", "Juggling Web App", "https://www.w3schools.com/html/mov_bbb.mp4",
    "Using HTML, CSS, JavaScript and PHP, I produced an ecommerce website for an \
    imaginary company that sells videos games and PCs. It contains a catalogue of \
    available games and PCs with reviews, a registration form for monthly newsletters, \
    contact form for customer enquiries."],

    ["pizza.png", "Pizza Takeaway Management System", "https://www.w3schools.com/html/mov_bbb.mp4", 
    "Using Java, I produced a takeaway management system where staff can take \
    relevant contact details and then the enter the order. It displays an order \
    summary with the option to print the receipt."]
];*/