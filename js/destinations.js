const baseUrl = "https://blogofnorway.site/blogofnorway/wp-json/wp/v2/posts";
const blogResults = document.querySelector(".blog-results");
const viewMorePost = document.querySelector(".view-more-post");
const searchButton = document.querySelector(".search-button");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    console.log(getResults);

    getResults.forEach(function (result) {
      blogResults.innerHTML += ` <div>
                               <a href="specific-blog-post.html?id=${result.id}">
                               <img src= "${result.featured_image_src.medium}">
                               <h2>${result.title.rendered}</h2>
                               </div>`;
    });
    const loading = document.querySelector(".loader");
    loading.classList.remove("loading-indicator");
  } catch (error) {
    console.log(error);
    blogResults.innerHTML = alert("error", error);
  }
}

getProducts(baseUrl);

viewMorePost.onchange = function (event) {
  const newUrl = baseUrl + `?per_page=${event.target.value}`;
  blogResults.innerHTML = "";
  getProducts(newUrl);
};
searchButton.onclick = function () {
  const searchInput = document.querySelector("#search-input").value;
  const newUrl = baseUrl + `?search=${searchInput}`;
  blogResults.innerHTML = "";
  getProducts(newUrl);
};
