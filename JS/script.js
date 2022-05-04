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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
