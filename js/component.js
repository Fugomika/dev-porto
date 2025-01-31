var projects
fetch('https://fugomika.github.io/dev-files/json/projects.json')
    .then(response => response.json())
    .then(data => {
        projects = data;
    });

var carousel = $('#carousel-components').clone();