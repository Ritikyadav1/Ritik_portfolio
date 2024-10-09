/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
         sections.forEach(sec=> {
            let top = window.scrollY;
            let height = sec.offsetHeight;
            let offsetTop = sec.offsetTop - 150;
            let id = sec.getAttribute('id');


            if(top >= offsetTop && top < offsetTop + height){
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
         });

    /*==================== sticky navbar ====================*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');

};


/*==================== scroll reveal ====================*/

ScrollReveal({
     //reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .skills, .certificate-box, .more', { origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img, .port1, .design1 ', { origin: 'left'});
    ScrollReveal().reveal('.home-content p, .about-content, .port2, .design2', { origin: 'right'});
    ScrollReveal().reveal('.contact .Manage', { origin: 'center'});


/*==================== typed js ====================*/

const typed = new Typed('.multiple-text',{
    strings: ["Web Developer", "Data analyst", "AI/ML Engineer","Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });