/* hamburger menu */

function myFunction() {
  var hamburgerMenu = document.getElementById("myBurgerMenu");
  if (hamburgerMenu.className === "BurgerMenu") {
    hamburgerMenu.className += " responsive";
  } else {
    hamburgerMenu.className = "BurgerMenu";
  }
}
