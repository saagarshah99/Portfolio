// from https://devicon.dev/ - see stylesheet in index.html
const skillIcons = [
    // ["html5-plain-wordmark", "HTML5"],
    // ["css3-plain-wordmark", "CSS3"],
    // ["bootstrap-plain-wordmark", "Bootstrap"],
    // ["javascript-plain", "JavaScript"],
    // ["react-original-wordmark", "React"],
    // ["java-plain-wordmark", "Java"],
    // ["spring-plain-wordmark", "Spring Boot"],
    // ["googlecloud-plain-wordmark", "Google Cloud Platform"],
    // ["python-plain", "Python"],
    // ["django-plain-wordmark", "Django"],
    // ["csharp-plain-wordmark", "C#"],
    // ["mysql-plain-wordmark", "SQL"],
    // ["kubernetes-plain-wordmark", "Kubernetes"],
    // ["linux-plain", "Linux"],
    // ["git-plain-wordmark", "Git"],
    // ["docker-plain-wordmark", "Docker"],
    // ["jenkins-plain", "Jenkins"],
];

// looping through array of objects to output skills icons, title used for tooltips
skillIcons.forEach((skill) => {
    document.querySelector("#skills").innerHTML += `
        <i class="devicon-${skill[0]} colored" title="${skill[1]}"></i>
    `;
});