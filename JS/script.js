/* hamburger menu */

function toggleHamburgerMenu() {
  var hamburgerMenu = document.getElementById("myBurgerMenu");
  if (hamburgerMenu.className.includes("responsive")) {
    hamburgerMenu.className = "BurgerMenu";
  } else {
    hamburgerMenu.className = "BurgerMenu responsive";
  }
}
