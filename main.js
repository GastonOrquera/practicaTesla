var hamburger = document.querySelector('.hamburger');

var nav = document.querySelector('nav');

var navLinks = document.querySelectorAll('nav a');

var conteinerI = document.querySelector('.conteinerI');

hamburger.addEventListener('click', function () {

    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    conteinerI.classList.toggle('active');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            conteinerI.classList.remove('active');
        });
    });

});