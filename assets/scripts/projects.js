// object storing specific project details, all videos assumed to be .mp4's
const githubLink = "https://github.com/saagarshah99/";
const githubPagesLink = "https://saagarshah99.github.io/";
const projects = [
    {
        video: "rename_files", title: "Rename Files",
        description: `
            A basic <b>C#</b> program that takes a given directory and renames a group 
            of files that are similar to one another in a convenient way. The user can 
            even change the file extension if they wish.
        `,
        github: 
        {
            id: "btnRenameGit", 
            text: "GitHub", 
            link: githubLink + "Rename-Files"
        },
        site: {id: "", text: "", link: ""},
    },
];

// receive button object containing specific attributes and generate button if there's an id
const generateButton = ({ id, text }) => {
    if(!id) return "";
    
    return `<input type="button" value="${text}" id="${id}" />`;
}

// receive button object and add event listener if there is an id
const buttonClick = ({ id, link }) => {
    if(id) {
        document.querySelector("#"+id).addEventListener("click", (event) => {
            linkNewTab(link);
        });
    }
}

// looping through projects to output them to slideshow container
projects.forEach(({ video, title, description, github, site }) => {
    const container = document.querySelectorAll(".slideshow-container")[0];

    container.innerHTML = `
        <div class="project-slides fade">
            <video controls>
                <source src="./assets/videos/project_demos/${video}.mp4" type="video/mp4">
            </video>
            <div class="text">
                <div class="flexbox project-slides__caption-bar">
                    <a class="prev fas fa-chevron-circle-left"></a>
                    ${title}
                    <a class="next fas fa-chevron-circle-right"></a>
                </div>
                <p class="project-slides__description">${description}</p>
                <p class="project-slides__links">
                    ${generateButton(github)}
                </p>
            </div>
        </div>
    `;

    buttonClick(github);
    buttonClick(site);
});