const skills = [
    {icon: "html5-plain-wordmark", title: "HTML5"},
    {icon: "css3-plain-wordmark", title: "CSS3"},
    {icon: "bootstrap-plain-wordmark", title: "Bootstrap"},
    {icon: "javascript-plain", title: "JavaScript"},
    {icon: "nodejs-plain-wordmark", title: "NodeJS"},
    {icon: "react-original-wordmark", title: "React"},
    {icon: "jquery-plain-wordmark", title: "jQuery"},
    {icon: "jest-plain", title: "Jest"},
    {icon: "java-plain-wordmark", title: "Java"},
    {icon: "python-plain", title: "Python"},
    {icon: "csharp-plain-wordmark", title: "C#"},
    {icon: "mysql-plain-wordmark", title: "SQL"},
    {icon: "linux-plain", title: "Linux"},
    {icon: "git-plain-wordmark", title: "Git"},
    {icon: "github-original-wordmark", title: "GitHub"},
];

// looping through array of objects to output skills icons
skills.forEach(({ icon, title }) => {
    const skillsId = document.querySelector("#skills");
    
    skillsId.innerHTML += "<i class='devicon-"+icon+" colored' title='"+title+"'></i>";
})