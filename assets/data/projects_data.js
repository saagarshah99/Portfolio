// object storing specific project details, all videos/images assumed to be .mp4's/.png's
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
        description: `Here is a basic calculator that accepts both mouse and keyboard input.`,
        github: {id: "btnCalculatorGit", text: "GitHub", link: "JS-Calculator"},
        site: {id: "btnCalculatorWeb", text: "View Calculator", link: "JS-Calculator"}
    },
    
    {
        title: "Juggling Web App",
        skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Django"],
        image: "juggling_web_app",
        description: `
        For my undergraduate final year project, I built a social network and portal for 
        jugglers that integrates many tools for managing one’s juggling experience. Users 
        can organise juggling tricks and set goals, visually learn tricks using a graphical 
        simulation, communicate with others and host events.
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
        skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Django"],
        description: `
            As part of my internship, I built a web app that allows JCA Incubation members to 
            exclusively communicate, share events and skills with each other, access newsletters 
            and more.
        `,
    },

    {
        title: "Ticket Tracking System",
        image: "ticket_tracker",
        skills: ["HTML", "CSS", "SCSS", "Vanilla JS", "React", "JSON"],
        description: `
            This is a web app that allows you to track the number of project tickets different 
            employees within a company have completed. You can also increase or decrease the 
            number for each employee if the situation changes. This was a paired programming 
            task completed alongside one of my colleagues on the _nology bootcamp. It was built 
            using .
        `,
        github: {id: "btnTicketGit", text: "GitHub", link: "ticket-tracker"},
        site: {id: "btnTicketWeb", text: "View Web App", link: "ticket-tracker"}
    },

    {
        video: "pizza", 
        title: "Pizza Takeaway Management System",
        skills: ["Java"],
        description: `
            I produced a takeaway management system where staff can take
            relevant contact details and then the enter the order. It displays an order
            summary with the option to print the receipt.
        `,
        github: {id: "btnPizzaGit", text: "GitHub", link: "Java-Pizza-Program"},
    },

    {
        video: "rename_files", 
        title: "Rename Files",
        skills: ["C#"],
        description: `
            A basic program that takes a given directory and renames a group 
            of files that are similar to one another in a convenient way. The user can 
            even change the file extension if they wish.
        `,
        github: {id: "btnRenameGit", text: "GitHub", link: "Rename-Files"},
    },
];

export { projects };