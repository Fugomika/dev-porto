$(document).ready(() => {
    new WOW().init();
    const pages = ["Home", "Projects", "Resume", "Contacts"];

    const navbarItems = pages.map(val => `
        <li class="nav-item">
            <a id="${val}" class="nav-link">${val}</a>
        </li>
    `).join('');

    $('#navbar').html(navbarItems);

    $('#navbar').on('click', 'a', function () {
        const val = this.id;
        $('#content').load(`pages/${val}.html`, function () {
            script(val);
        });
    });

    // Load initial page
    $('#Home').click();
});

function script(pages){
    // Home script
    if(pages == "Home"){
        var typed = new Typed('#element', {
            strings: ['esigner', 'eveloper'],
            typeSpeed: 100,
            backSpeed: 40,
            smartBackspace: false,
            loop: true,
            showCursor: true,
            onLastStringBackspaced: (self) => {return "A"},
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
    }

    // Resume script
    if(pages == "Resume"){
        var typed = new Typed('#soon', {
            strings: ['Coming Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Soon ! :v'],
            typeSpeed: 30,
            showCursor: true,
            onLastStringBackspaced: (self) => {return "A"},
        });
    }

    // Projects script
    if(pages == "Projects"){
        var typed = new Typed('#soon', {
            strings: ['Coming Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Soon ! :v'],
            typeSpeed: 30,
            showCursor: true,
            onLastStringBackspaced: (self) => {return "A"},
        });
    }

    // Contacts script
    if(pages == "Contacts"){
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
    }
}