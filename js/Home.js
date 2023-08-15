var typed = new Typed('#element', {
    strings: ['esigner', 'eveloper'],
    typeSpeed: 100,
    backSpeed: 40,
    smartBackspace: false,
    loop: true,
    showCursor: true,
    onLastStringBackspaced: (self) => {return "A"},
});
