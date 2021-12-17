
const mobileMenu = document.querySelector('[data-js="mobile-menu"]');
const socialMediaLinks = document.querySelector('[data-js="social-media-links"]');

const toggleMenuIcon = () => {
    const navList = document.querySelector('[data-js="nav-list"]');
    const navLinks = document.querySelectorAll('[data-js="nav-list"] li');

    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');
    navLinks.forEach((link, index) => link.classList.toggle(`animation-link-${index}`))

}

const changeBackground = () => {
    const position = window.pageYOffset;
    const nav = document.querySelector('.nav');
    const setColor = position >= 200 ? '#23232e' : '' ;

    nav.style.backgroundColor = setColor;
}

mobileMenu.addEventListener('click', toggleMenuIcon);
document.addEventListener('scroll', changeBackground)

const accordionBtns = document.querySelectorAll('.accordionBtn');

/* accordionBtns.forEach(btn => btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    document.querySelector('.panel').style.display = 'block'
})) */