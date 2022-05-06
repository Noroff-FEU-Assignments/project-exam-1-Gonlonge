const baseUrl = "https://blogofnorway.site/blogofnorway/wp-json/wp/v2/posts";
const blogResults = document.querySelector(".blog-results");
const viewMorePost = document.querySelector(".view-more-post");

async function getProducts(url) {
  const response = await fetch(url);
  const getResults = await response.json();
  console.log(getResults);

  getResults.forEach(function (result) {
    blogResults.innerHTML += ` <div>
                               <a href="specific-blog-post.html?id=${result.id}">
                               <h2>${result.title.rendered}</h2>
                               <img src= "${result.featured_image_src.medium}">
                               </div>`;
  });
}

getProducts(baseUrl);

viewMorePost.onchange = function (event) {
  const newUrl = baseUrl + `?per_page=${event.target.value}`;
  blogResults.innerHTML = "";
  getProducts(newUrl);
};
