// object storing specific project details, all videos/images assumed to be .mp4's/.png's
const projects = [
    {
        title: "Linux Server (Sandbox Environment)",
        skills: ["Linux", "SSH", "UFW", "Bash", "Jenkins", "Django"],
        video: "linux_server_sandbox",
        description: `
            This project involved the setup of a local Linux server (running Linux Mint) on a repurposed laptop, focusing on network accessibility and automated deployment. SSH and firewall configurations were implemented for secure local network access, and Jenkins was installed to automate such tasks as deploying a Django web application using basic bash scripts. Future enhancements include enabling HTTPS via Apache, transitioning from bash to Ansible and Groovy for deployment automation, containerising applications with Docker and configuring router port forwarding to enable external access.
        `,
        github: {
            id: "btnLinuxServerSandbox", 
            text: "GitHub", 
            link: "Linux-Server-Sandbox",
        },
    },

    {
        title: "GCP Associate Cloud Engineer Certification",
        skills: ["VPC", "GKE", "Cloud Storage", "Compute Engine", "Cloud SQL", "Terraform", "IAM"],
        image: "gcp_associate_cloud_engineer",
        description: `
            I have successfully earned the Google Cloud Associate Cloud Engineer certification, demonstrating proficiency in cloud infrastructure management on Google Cloud Platform. My <b title="Cloud Skills Boost Public Profile"><a href="https://www.cloudskillsboost.google/public_profiles/2395d103-96b7-4b5e-b71c-e219deef581e" target="_blank">Cloud Skills Boost Public Profile</a></b> showcases the specific skill badges achieved.
        `,
    },

    {
        title: "_nology Client Project",
        skills: ["HTML", "Bootstrap", "SCSS", "JavaScript", "React", "Spring Boot", "MYSQL"],
        video: "client_project",
        description: `
            Alongside 5 other colleagues on my _nology bootcamp and with the guidance of some of 
            the coaches, I implemented a platform that allows coaches to keep track of different
            students and the progress they have made with projects assigned to them during the bootcamp.

            The frontend and backend API are 2 separate applications designed to communicate 
            with each other to perform various data manipulation tasks (backend API is connected to 
            a MYSQL database).

            Upon successful completion of this project, _nology expressed interest in continuing to develop this platform to eventually use it for real. 
        `,
        github: {
            id: "btnClientProjectGit", 
            text: "GitHub", 
            link: "_charlie",
        },
    },

    {
        title: "Juggling Web App",
        skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Django", "PythonAnywhere"],
        image: "juggling_web_app",
        description: `
        Fueled by a personal interest of mine, for my undergraduate final year project at university, I built a social network and portal that integrates multiple tools for jugglers. Users can organise juggling tricks and set goals, visually learn tricks using a graphical simulation, communicate with others and host events.
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
            As part of my internship with JCA | London Fashion Academy, I built a platform using Django that enabled JCA Incubation members to communicate exclusively, share events and skills, access newsletters, and foster a collaborative community.
        `,
    },
    
    {
        title: "Spaceships Game",
        skills: ["HTML", "CSS", "SCSS", "JavaScript"],
        image: "spaceships",
        description: `
            Here is a basic spaceship game where the objective is to move the spaceship around to keep destroying all planets and stars on the screen. It accepts both keyboard input and mouse clicking/tapping. 
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
        title: "OOP Game",
        skills: ["Java"],
        video: "oop_quiz",
        description: `
            Here is a basic multiple choice quiz with a graphical user interface where
            the user selects the number of questions they would like and that many questions
            are fetched from an API.
        `,
        github: {id: "btnOOPGameGit", text: "GitHub", link: "OOP-Quiz"},
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
        title: "Ticket Tracking System",
        image: "ticket_tracker",
        skills: ["HTML", "CSS", "SCSS", "Vanilla JS", "React", "JSON"],
        description: `
            This is a web app that allows you to track the number of project tickets different 
            employees within a company have completed. You can also increase or decrease the 
            number for each employee if the situation changes. This was a paired programming 
            task completed alongside one of my colleagues on the _nology bootcamp.
        `,
        github: {id: "btnTicketGit", text: "GitHub", link: "ticket-tracker"},
        site: {id: "btnTicketWeb", text: "View Web App", link: "ticket-tracker"}
    },

    {
        video: "pizza", 
        title: "Pizza Takeaway Management System",
        skills: ["Java"],
        description: `
            I produced a pizza takeaway management system where staff can take
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
            of files contained within it that are similar to one another in a convenient way. The user can 
            even change the file extension if they wish.
        `,
        github: {id: "btnRenameGit", text: "GitHub", link: "Rename-Files"},
    },
];

export { projects };