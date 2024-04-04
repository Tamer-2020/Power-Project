const menu = document.querySelector("#mobile-menu");
const menuLlinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLlinks.classList.toggle("active");
});