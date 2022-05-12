const detailResults = document.querySelector(".detail-results");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const detailR = document.querySelector(".detail-r");

console.log(id);

const url = "https://blogofnorway.site/blogofnorway/wp-json/wp/v2/posts/" + id;

console.log(url);

async function getProduct(url) {
  const response = await fetch(url);
  const getResult = await response.json();
  console.log(getResult);

  detailResults.innerHTML = `<div class="wp-post-img">
  <img src= "${getResult.featured_image_src.medium}">
  <h3 div class="wp-post-img">${getResult.title.rendered}</h3>
  <p>${getResult.content.rendered}</p>
  </div>`;

  detailR.innerHTML = `<div>
<img src= "${getResult.featured_image_src.medium}">
</div>`;
}
getProduct(url);

/* */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
