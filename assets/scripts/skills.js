// NOT USING CURRENTLY AS THERE ARE SVG ICONS WHICH LOOK MORE MODERN

// from https://devicon.dev/ - see stylesheet in index.html
const skillIcons = [
    ["react-original-wordmark", "React"],
    ["spring-plain-wordmark", "Spring Boot"],
    ["googlecloud-plain-wordmark", "Google Cloud Platform"],
    ["django-plain-wordmark", "Django"],
    ["csharp-plain-wordmark", "C#"],
    ["kubernetes-plain-wordmark", "Kubernetes"],
    ["linux-plain", "Linux"],
    ["git-plain-wordmark", "Git"],
    ["docker-plain-wordmark", "Docker"],
    ["jenkins-plain", "Jenkins"],
    ["redhat-plain-wordmark", "RedHat"],
    ["vsphere-plain-wordmark", "RedHat"],
];

// looping through array of objects to output skills icons, title used for tooltips
skillIcons.forEach((skill) => {
    document.querySelector("#skills").innerHTML += `
        <i class="devicon-${skill[0]} colored" title="${skill[1]}"></i>
    `;
});