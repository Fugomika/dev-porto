
function script(pages){
    // Home script
    if(pages == "Home"){
        new Typed('#typed', {
            strings: ['esigner', 'eveloper'],
            typeSpeed: 100,
            backSpeed: 40,
            smartBackspace: false,
            loop: true,
            showCursor: true,
        });
        $('#since').html(new Date().getFullYear() - 2020);
        $('#index-resume').on('click', function () {
            $('#content').load(`pages/Resume.html`, function(){
                script("Resume");
            });
        })
        $('#index-projects').on('click', function () {
            $('#content').load(`pages/Projects.html`, function(){
                script("Resume");
            });
        })
        $('a').addClass('hover__btn nodeHover');
    }

    // Resume script
    if(pages == "Resume"){
        $('.badge-class').addClass('d-flex align-items-center bg-light rounded-4 p-3 h-100 shadow animate__animated animate__backInUp wow');
    }

    // Projects script
    if(pages == "Projects"){
        $('img').attr("onerror", "this.onerror=null; this.src='./assets/projects/noimage.jpg'");
    }

    // Contacts script
    if(pages == "Contacts"){
        new Typed('#typed', {
            strings: ['Co-op with me?', "Let's work together!", "Interested making one of these?", "Catch up!", "Any ideas?"],
            fadeOut: true,
            loop: true,
            typeSpeed: 30,
            backDelay: 2000,
            shuffle: true
        });
        $("#my-form").on("submit", function( event ) {
            var form = document.getElementById("my-form");
            
            async function handleSubmit(event) {
            event.preventDefault();
            var status = document.getElementById("my-form-status");
            var data = new FormData(event.target);
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                status.innerHTML = "Thanks for your submission, i'll reply ASAP!";
                form.reset()
                } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
                }
            }).catch(error => {
                status.innerHTML = "Oops! There was a problem submitting your form"
            });
            }
            form.addEventListener("submit", handleSubmit);
        });
        $('button, input, textarea').addClass('hover__btn nodeHover');
    }

    // Blogs script
    if(pages == "Blogs"){
        const googleScriptURL = 'https://script.google.com/macros/s/AKfycbyxLvknE4Q7_kWbxtYJjelrcbGG3KbWueQi_FCSUxAkwBn3JqRuYUubGIj-8Q2XuOa6XQ/exec';

        async function fetchFileList() {
            try {
                const response = await fetch(`${googleScriptURL}`);
                const data = await response.json();

                const fileListContainer = document.getElementById('file-list');
                fileListContainer.innerHTML = '';

                data.forEach(file => {
                    const fileWrapper = document.createElement('div');
        
                    const fileLink = document.createElement('a');
                    fileLink.href = 'javascript:void(0)';
                    fileLink.classList.add('text-gradient');
                    fileLink.classList.add('h4');
                    fileLink.classList.add('list-unstyled');
                    file.name = file.name.replace('.md', '');
                    fileLink.textContent = file.name;
                    fileLink.onclick = () => fetchFileContent(file);
                    
                    fileWrapper.appendChild(fileLink);
                    fileWrapper.appendChild(document.createElement('br'));
                    fileWrapper.appendChild(document.createElement('hr'));
                    
                    fileListContainer.appendChild(fileWrapper);
                });
            } catch (error) {
                console.error('Error fetching file list:', error);
            }
        }

        // Fetch the content of a file and display it as HTML
        async function fetchFileContent(file) {
            try {
                $('#ArticleTitle').hide();
                $('#file-list').hide();
                const response = await fetch(`${googleScriptURL}?fileId=${file.id}`);
                const data = await response.text();

                const fileContentContainer = document.getElementById('file-content');
                fileContentContainer.innerHTML = marked.parse(data); // Using `marked` to parse markdown to HTML

                $('#ArticleTitle').show().find('span').text(file.name);
            } catch (error) {
                console.error('Error fetching file content:', error);
            }
        }

        // Initialize by fetching the file list
        fetchFileList();

    }
    
    // Projects script
    if(pages == "Projects"){
        const projectsContainer = document.getElementById('projects-container');
        projects.forEach((project, id) => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('col');

            var image = '';
            var indicators = '';
            var inner = '';
            if(project.images){
                project.images.forEach((data, index) => {
                    
                    var imgLink = `https://fugomika.github.io/dev-files/img/${data.file}`;
                    var capt = '';
                    if(data.link || data.title || data.description){
                        capt = `<div class="carousel-caption text-white">`;
                        if(data.link){
                            capt += `<a href="${data.link}" target="_blank" class="text-white">`;
                        }
                        if(data.title){
                            capt += `<h6 class="bg-dark bg-gradient bg-opacity-75 py-1 rounded-2">${data.title}`;
                        }
                        if(data.link){
                            capt += `<i class="ms-2 bi bi-box-arrow-up-right"></i></h6></a>`;
                        }
                        if(data.description){
                            capt += `<small class="bg-dark bg-gradient bg-opacity-75 p-1 rounded-2">${data.description}</small>`;
                        }
                        capt += `</div>`;
                    }

                    inner += `<div class="carousel-item ${index == 0 ? 'active' : ''}"><a target="_blank" href="${imgLink}"><img src="${imgLink}" class="d-block w-100" alt="..."></a>${capt}</div>`;
                    indicators += `<button type="button" data-bs-target="#Carousel${id}" data-bs-slide-to="${index}" class="${index == 0 ? 'active' : ''}" aria-current="true" aria-label="Slide ${index + 1}"></button>`;
                });
                var carousel = $('#carousel-components').clone();
                carousel.attr('id', `Carousel${id}`);
                carousel.find('.carousel-control-prev').attr('data-bs-target', `#Carousel${id}`);
                carousel.find('.carousel-control-next').attr('data-bs-target', `#Carousel${id}`);

                carousel.find('.carousel-indicators').html(indicators);
                carousel.find('.carousel-inner').html(inner);
                image = carousel.get(0).outerHTML;
            }

            var title = project.title ? `<h5 class='card-title'>${project.title}</h5>` : '';
            var description = project.description ? `<p class='card-text'>${project.description}</p>` : '';
            var date = project.date ? `<p class='text-muted'>${project.date}</p>` : '';
            var skills = project.skills ? `<div class="card-footer">${project.skills.map(tech => `<span class='badge bg-primary'>${tech}</span> `).join('')}</div>` : ''
            projectCard.innerHTML = `
                <div class="card shadow border-0 rounded-4 mb-5 animate__animated animate__backInUp wow h-100">
                    ${image}
                    <div class="card-body">
                        ${title}
                        ${description}
                        ${date}
                    </div>
                    ${skills}
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

}