const detailResults = document.querySelector(".detail-Results");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://blogofnorway.site/blogofnorway/wp-json/wp/v2/posts/" + id;

console.log(url);

async function getProduct(url) {
  const response = await fetch(url);
  const getResult = await response.json();
  console.log(getResult);

  detailResults.innerHTML = `<div>
  <h3>${getResult.title.rendered}</h3>
  </div>`;
}
getProduct(url);
