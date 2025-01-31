$(document).ready(() => {
    new WOW().init();
    const pages = ["Home" , "Blogs", "Projects", "Resume", "Contacts"];

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