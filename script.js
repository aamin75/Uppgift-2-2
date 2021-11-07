// Variables
const menuDiv = document.getElementById("navbar__div");
const menuOpen = document.getElementById("menu_img");
const menuClose = document.getElementById("close_img");

//selectors
/*document.querySelector(".menu_img").addEventListener("click", openMenu);
document.querySelector(".close_img").addEventListener("click", closeMenu);*/

// Open menu function
function openMenu() {
    menuDiv.classList.add("showMenu");

};

// Close menu function
function closeMenu() {
    menuDiv.classList = "navbar__div";
};