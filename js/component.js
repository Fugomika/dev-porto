var link = "https://fugomika.github.io/dev-files"

var carousel = $('#carousel-components').clone();
var projects
fetch('https://fugomika.github.io/dev-files/json/projects.json')
    .then(response => response.json())
    .then(data => {
        projects = data;
    });
    
var experience = $('#experience-components').clone();
var education = $('#education-components').clone();
var resume
fetch(link+'/json/resume.json')
    .then(response => response.json())
    .then(data => {
        resume = data;
    });

var about
fetch(link+'/json/about.json')
    .then(response => response.json())
    .then(data => {
        about = data;
    });
