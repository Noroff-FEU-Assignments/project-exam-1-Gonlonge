const detailResults = document.querySelector(".detail-results");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const detailR = document.querySelector(".detail-r");

const url = "https://blogofnorway.site/blogofnorway/wp-json/wp/v2/posts/" + id;

async function getBlogPosts(url) {
  const response = await fetch(url);
  const getResult = await response.json();

  detailResults.innerHTML = `<div class="wp-post-img">
  <p>${getResult.content.rendered}</p>
  </div>`;

  detailR.innerHTML = `<img src="${getResult.featured_image_src.medium}" class="modal-img">`;

  const images = document.querySelectorAll("img");
  let imgSrc;

  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      imgSrc = e.target.src;
      modal.style.display = "block";
      let modalImage = document.getElementsByClassName("modal-img")[0];
      modalImage.src = e.target.src;
    });
  });
}

getBlogPosts(url);

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
