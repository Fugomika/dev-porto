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

    new NodeCursor({
        cursor : true, 
        node : true, 
        cursor_velocity : 1, 
        node_velocity : 0.15, 
        native_cursor : 'none', 
        element_to_hover : '.nodeHover', 
        cursor_class_hover : 'disable', 
        node_class_hover : 'expand', 
        hide_mode : true, 
        hide_timing : 2000, 
    });
    $('a, button').addClass('hover__btn nodeHover');
});

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
}