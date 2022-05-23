/* hamburger menu */

function toggleHamburgerMenu() {
  var hamburgerMenu = document.getElementById("myBurgerMenu");
  console.log(hamburgerMenu.className);
  console.log(hamburgerMenu.className.includes("BurgerMenu"));
  if (hamburgerMenu.className.includes("responsive")) {
    hamburgerMenu.className = "BurgerMenu";
  } else {
    hamburgerMenu.className = "BurgerMenu responsive";
  }
}
