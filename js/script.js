let flag = false;
// burger menuu
const burger = document.querySelector(".burger");
const fax = document.querySelector(".fax");
const burgermenu = document.querySelector(".burger-menu");
const main = document.querySelector("main");
const wheel = document.querySelector(".wheel")
const live = document.querySelector(".live")
const sliderr = document.querySelector(".sliderr")
const footer = document.querySelector("footer");
function BurgerMenu() {
    if (flag == false) {
        burgermenu.style.display = "block";
        main.style.display = "none";
        sliderr.style.display = "none"
        live.style.display = "block"
        wheel.style.display = "block"
        fax.style.display = "block";
        footer.style.display = "none";
        burger.style.display = "none";
        flag = true;
    } else {
        burgermenu.style.display = "none";
        fax.style.display = "none";
        sliderr.style.display = "block"
        burger.style.display = "block";
        main.style.display = "block";
        footer.style.display = "block";
        flag = false;
    }
}