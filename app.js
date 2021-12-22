
const mobileMenu = document.querySelector('[data-js="mobile-menu"]');
const socialMedia = document.querySelectorAll('[data-social-media]');
const socialMediaLinks = document.querySelectorAll('[data-social-media-links]');

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
    const setColor = position >= 100 ? '#23232e' : '' ;

    nav.style.backgroundColor = setColor;
}


// Event Listeners
mobileMenu.addEventListener('click', toggleMenuIcon);
document.addEventListener('scroll', changeBackground)

socialMedia.forEach((media, index) => {
    media.addEventListener('mouseenter', () => {  
        socialMediaLinks[index].classList.add('active');
    });

    media.addEventListener('mouseleave', () => {
        socialMediaLinks[index].classList.remove('active');
    });
});