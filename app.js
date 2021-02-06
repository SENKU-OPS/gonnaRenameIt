const toggleNavListButton = document.querySelector(".header__toggle-nav-list-button");
const navList = document.querySelector(".header__nav-list");
const toggleNavListBar1 = document.querySelector(".header__toggle-nav-list-bar1");
const toggleNavListBar2 = document.querySelector(".header__toggle-nav-list-bar2");
const toggleNavListBar3 = document.querySelector(".header__toggle-nav-list-bar3");
const heroImg = document.querySelector(".hero__img");



toggleNavListButton.addEventListener("click", () => {
    navList.classList.toggle("header__show-nav-list");
    toggleNavListBar1.classList.toggle("header__bar1-nav-list-visible");
    toggleNavListBar2.classList.toggle("header__bar2-nav-list-visible");
    toggleNavListBar3.classList.toggle("header__bar3-nav-list-visible");

});
heroImg.addEventListener("mouseenter", () => {
    heroImg.style.transform = "translateY(-15px)";
    setTimeout(() => {
        heroImg.style.transform = "translateY(0)";
    }, 400)
});