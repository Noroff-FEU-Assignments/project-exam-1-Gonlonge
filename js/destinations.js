const url = "https://blogofnorway.site/blogofnorway/wp-json/wp/v2/posts";
const blogResults = document.querySelector(".blog-results");

async function getProducts(url) {
  const response = await fetch(url);
  const getResults = await response.json();
  console.log(getResults);

  getResults.forEach((result) => {
    blogResults.innerHTML += `<a href="specific-blog-post.html?id=${result.id}">
                              <div>${result.content.rendered}</div>`;
  });
}

getProducts(url);
