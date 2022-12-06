const handBurgerMenu = document.querySelector(".handBurgerMenu");
const nav = document.querySelector("nav");

handBurgerMenu.addEventListener("click", () => {
    nav.classList.toggle("menu-show");
});
