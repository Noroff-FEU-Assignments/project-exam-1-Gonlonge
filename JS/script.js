const url = "https://blogofnorway.site/blogofnorway/wp-json/wp/v2/posts";
const blogResults = document.querySelector(".blog-results");

async function getProducts(url) {
  const response = await fetch(url);
  const getResults = await response.json();
  console.log(getResults);

  getResults.forEach((result) => {
    blogResults.innerHTML += `<div>${result.content.rendered}</div>`;
  });
}

getProducts(url);

// }

// const loading = document.querySelector(".loader");
// loading.classList.remove("loading-indicator");
// } catch (error) {
// console.log(error);
// container.innerHTML = "Error when its calling to the API";
// }
// }
// fetchMovies();
// */

/*
async function fetchMovies() {
  const container = document.querySelector(".results");

  try {
    const response = await fetch("https://the-one-api.dev/v2/movie", {
      method: "get",
      headers: new Headers({
        Authorization: "Bearer cx4oxkxUmuKp-12KrpOF",
      }),
    });

    if (response.status !== 200) {
      container.innerHTML = "API error";
      return;
    }

    const results = await response.json();
    const movies = results.docs;

    if (!movies) {
      container.innerHTML = "Unexpected response from API";
      return;
    }

    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];

      container.innerHTML += `<div class="space">
                                <a href="details.html?id=${movie._id}">
                                  <div>Name: ${movie.name}</div>
                                  <div>Length: ${movie.runtimeInMinutes}minutes</div>
                                </a>
                              </div>`;
    }

    const loading = document.querySelector(".loader");
    loading.classList.remove("loading-indicator");
  } catch (error) {
    console.log(error);
    container.innerHTML = "Error when its calling to the API";
  }
}
fetchMovies();
*/
