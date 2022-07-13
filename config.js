//--------MENU TOGGLE -------------//

const iconToggle = document.querySelector('.icon-toggle');
const menuToggle = document.querySelector('.menu-toggle nav');
console.log(iconToggle);
console.log(menuToggle);

let menuVisible = false;

iconToggle.addEventListener('click', () => {
    menuVisible = !menuVisible;
    menuVisible ? menuToggle.classList.add("is-visible") : menuToggle.classList.remove("is-visible");
});