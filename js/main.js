$(document).ready(() => {
    const pages = ["Home", "Contacts", "Projects", "Resume"];

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
    }
    if(pages == "Resume"){
        var typed = new Typed('#soon', {
            strings: ['Coming Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Soon ! :v'],
            typeSpeed: 30,
            showCursor: true,
            onLastStringBackspaced: (self) => {return "A"},
        });
    }
    if(pages == "Projects"){
        var typed = new Typed('#soon', {
            strings: ['Coming Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Soon ! :v'],
            typeSpeed: 30,
            showCursor: true,
            onLastStringBackspaced: (self) => {return "A"},
        });
    }
}