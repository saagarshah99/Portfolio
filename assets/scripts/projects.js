/***********************************PROJECT DATA*************************************/

/*TODO: 
    - add "technologies used" array to array of objects

    - additional projects (take screenshots and record videos for both of these)
        * java OOP game
        * client project
    
    - delete unwanted videos and commented out video names in array of objects
*/

// object storing specific project details, all videos assumed to be .mp4's
const projects = [
    {
        title: "Spaceships Game",
        skills: ["HTML", "CSS", "SCSS", "JavaScript"],
        image: "spaceships",
        description: `
            Here is a basic spaceship game where the objective is to move the spaceship around 
            to keep destroying all planets and stars on the screen. It accepts 
            both keyboard input and mouse clicking/tapping. 
        `,
        github: {id: "btnSpaceshipsGit", text: "GitHub", link: "Spaceships"},
        site: {id: "btnSpaceshipsWeb", text: "Play Game", link: "Spaceships"}
    },
    
    {
        title: "Punk API",
        skills: ["HTML", "CSS", "SCSS", "Vanilla JS", "React", "JSON"],
        image: "punk_api",
        description: `
            This web app fetches data from an API created by Brewdog containing various pieces 
            of information pertaining to some of their beers. It displays information about each 
            individual beer in a card and users can search or filter by certain attributes to 
            find more specifically what they are looking for.
        `,
        github: {id: "btnPunkGit", text: "GitHub", link: "punk-api"},
        site: {id: "btnPunkWeb", text: "View Web App", link: "punk-api"}
    },
    
    {
        title: "Morse Code Translator",
        skills: ["HTML", "CSS", "SCSS", "JavaScript", "Jest"],
        image: "morse_code",
        description: `
            A basic web app that takes some English text as input and returns a morse code translation.
        `,
        github: {id: "btnMorseGit", text: "GitHub", link: "Morse-Code-Translator"},
        site: {id: "btnMorseWeb", text: "View Translator", link: "Morse-Code-Translator"}
    },
    
    {
        title: "Calculator Web App",
        skills: ["HTML", "CSS", "JavaScript"],
        image: "calculator",
        description: `
        Here is a basic calculator that accepts both mouse and keyboard input.
        `,
        github: {id: "btnCalculatorGit", text: "GitHub", link: "JS-Calculator"},
        site: {id: "btnCalculatorWeb", text: "View Calculator", link: "JS-Calculator"}
    },
    
    {
        title: "Juggling Web App",
        skills: ["HTML", "SCSS", "JavaScript"],
        image: "juggling_web_app",
        description: `
            For my undergraduate final year project, using <b>HTML</b>, <b>CSS</b> (including 
            <b>Bootstrap</b>), <b>JavaScript</b> (including <b>jQuery</b>) and <b>Django</b>, I 
            built a social network and portal for jugglers that integrates many tools for 
            managing one’s juggling experience. Users can organise juggling tricks and set 
            goals, visually learn tricks using a graphical simulation, communicate with 
            others and host events.
        `,
        github: {id: "btnJugglingGit", text: "GitHub", link: "Juggleology"},
        site: 
        {
            id: "btnJugglingWeb", text: "Visit Website", 
            link: "https://saagarshah.pythonanywhere.com/Juggleology/"
        }
    },

    {
        video: "jca_incubation", 
        title: "JCA | London Fashion Academy Incubation Portal",
        skills: ["HTML", "SCSS", "JavaScript"],
        description: `
            As part of my internship, I built a web app using <b>HTML</b>, <b>CSS</b> (including 
            <b>Bootstrap</b>), <b>JavaScript</b> (including <b>jQuery</b>) and <b>Django</b>. It 
            allows JCA Incubation members to exclusively communicate, share events and skills with 
            each other, access newsletters and more.
        `,
        github: {id: "", text: "", link: ""},
        site: {id: "", text: "", link: ""}
    },

    {
        title: "Ticket Tracking System",
        image: "ticket_tracker",
        description: `
            This is a web app that allows you to track the number of project tickets different 
            employees within a company have completed. You can also increase or decrease the 
            number for each employee if the situation changes. This was a paired programming 
            task completed alongside one of my colleagues on the _nology bootcamp. It was built 
            using <b>HTML</b>, <b>CSS</b>, <b>SCSS</b>, <b>Vanilla JS</b>, <b>React</b> and 
            <b>JSON</b>.
        `,
        github: {id: "btnTicketGit", text: "GitHub", link: "ticket-tracker"},
        site: {id: "btnTicketWeb", text: "View Web App", link: "ticket-tracker"}
    },

    {
        video: "pizza", 
        title: "Pizza Takeaway Management System",
        skills: ["HTML", "SCSS", "JavaScript"],
        description: `
            Using <b>Java</b>, I produced a takeaway management system where staff can take
            relevant contact details and then the enter the order. It displays an order
            summary with the option to print the receipt.
        `,
        github: {id: "btnPizzaGit", text: "GitHub", link: "Java-Pizza-Program"},
        site: {id: "", text: "", link: ""}
    },

    {
        video: "rename_files", 
        title: "Rename Files",
        skills: ["HTML", "SCSS", "JavaScript"],
        description: `
            A basic <b>C#</b> program that takes a given directory and renames a group 
            of files that are similar to one another in a convenient way. The user can 
            even change the file extension if they wish.
        `,
        github: {id: "btnRenameGit", text: "GitHub", link: "Rename-Files"},
        site: {id: "", text: "", link: ""}
    },
];



/***************************PROJECT DISPLAY******************************/


// receive button object containing specific attributes and generate button if there's an id
const generateButton = ({ id, text }) => {
    return id !== "" ? `<input type="button" value="${text}" id="${id}" />` : "";
}

// receive button object and add event listener if there is an id
const buttonClick = ({ id, text, link }) => {
    if(id !== "") {
        if(text === "GitHub") {
            link = "https://github.com/saagarshah99/" + link;
        }
        else if(id !== "btnJugglingWeb") {
            link = "https://saagarshah99.github.io/" + link;
        }

        document.querySelector("#"+id).addEventListener("click", (e) => {
            linkNewTab(link);
        });
    }
}

// looping through projects to output them to slideshow container
projects.forEach(({ image, video, title, skills, description, github, site }) => {
    document.querySelector(".slideshow-container").innerHTML += `
        <div class="project-slides fade">
            
            ${
                video ? `
                    <video controls>
                        <source src="./assets/videos/project_demos/${video}.mp4" type="video/mp4">
                    </video>
                ` :
                `<img src="./assets/images/projects/${image}.png" />`
            }
            <div class="text">
                <div class="flexbox project-slides__caption-bar">
                    <a class="prev fas fa-chevron-circle-left"></a>
                    ${title}
                    <a class="next fas fa-chevron-circle-right"></a>
                </div>
                <p class="project-slides__description">${description}</p>
                <br />
                <p><b>Technologies used:</b> 
                    ${
                        skills.map((currentSkill, i) => {
                            return i !== skills.length - 1 ? 
                                " " + currentSkill : 
                                " and "+currentSkill.replace(",", "")
                        })
                    }
                </p>

                <p class="project-slides__links">
                    ${generateButton(github)} 
                    ${generateButton(site)} 
                </p>
            </div>
        </div>
    `;
});
projects.forEach(({ github, site }) => {buttonClick(github); buttonClick(site);});