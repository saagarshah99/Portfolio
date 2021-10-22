import { projects } from "../data/projects_data.js";

/***************************PROJECT DISPLAY******************************/

// receive button object containing specific attributes and generate button if there's an id
const generateButton = ({ id, text }) => `<input type="button" value="${text}" id="${id}" />`;

// receive button object and add event listener if there is an id
const buttonClick = ({ id, text, link }) => {
    if(text === "GitHub") {
        if(link !== "https://github.com/nology-tech/_charlie") {
            link = "https://github.com/saagarshah99/" + link;
        }
    }
    else if(id !== "btnJugglingWeb") {
        link = "https://saagarshah99.github.io/" + link;
    }

    document.querySelector("#"+id).addEventListener("click", (e) => linkNewTab(link));
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
                <br /><p>
                    <b>Technologies Used:</b>
                    ${skills.map((currentSkill, i) => (
                        skills.length === 1 || i !== skills.length - 1 ? 
                            " " + currentSkill : 
                            " and "+currentSkill.replace(",", "")
                    ))}
                </p>

                <p class="project-slides__links">
                    ${github ? generateButton(github) : ""}
                    ${site ? generateButton(site) : ""}
                </p>
            </div>
        </div>
    `;
});

//adding event handlers if these buttons exist in array of objects
projects.forEach(({ github, site }) => {
    github && buttonClick(github); 
    site && buttonClick(site);
});