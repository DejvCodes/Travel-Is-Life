// --------------------------- Open And Close Menu ---------------------------
// Proměnné
const navMenu = document.getElementById('nav-menu');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

// Open Menu - Validace
if (openBtn) {
    openBtn.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

// Close Menu - Validace
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// ------------------------- Remove Menu After Click -------------------------
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach((link) => {
    link.addEventListener('click', linkAction);
});

// -------------------------------- Blur Header --------------------------------
const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);

// ------------------------------ Show Scroll Btn ------------------------------
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 50 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// ------------------------- Scroll Section Active Link-------------------------
const section = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

// ------------------------- Scrollreveal Animation ---------------------------
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '3000',
    delay: 400,
    // reset: true // Animation repeat
})

sr.reveal('.home-data, .explore-data, .explore-user, .footer-container');
sr.reveal('.home-card', {delay:600, distance:'100px',interval: 100});
sr.reveal('.about-data, .join-image', {origin:'right'});
sr.reveal('.about-imagem, .join-data', {origin:'left'});
sr.reveal('.popular-card', {interval:200});

// ----------------------------- Join Button ------------------------------
const joinBtn = document.querySelector('.join-btn');
joinBtn.addEventListener('click', (e) => {
    e.preventDefault();
});