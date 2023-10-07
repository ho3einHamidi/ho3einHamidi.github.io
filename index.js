const navbar = document.querySelector(".header");
const landing = document.querySelector(".landing");
const sideNewsWrapper = document.querySelector(".side-news-wrapper");

window.addEventListener("scroll", () => {
  if (Math.floor(window.scrollY) + 97 < landing.scrollHeight) {
    navbar.classList.remove("scrollup");
  } else {
    navbar.classList.add("scrollup");
  }
});

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts.slice(0, 3);
};
const postImages = [
  "./assets/image/rainbow-1.jpg",
  "./assets/image/rainbow-2.jpg",
  "./assets/image/rainbow-3.jpg",
  "d",
];
const createPost = (post, image) => {
  console.log(post);
  const sideNewsWrapper = document.querySelector(".side-news-wrapper");
  const news = document.createElement("div");
  news.classList.add("side-news");
  news.setAttribute("id", post.id);
  const newsImage = document.createElement("img");
  newsImage.setAttribute("src", image);
  const newsDescriptionSection = document.createElement("div");
  newsDescriptionSection.classList.add("caption");
  const newsTitle = document.createElement("p");
  newsTitle.classList.add("title");
  newsTitle.innerHTML = post.title;
  const newsDescription = document.createElement("p");
  newsDescription.classList.add("description");
  newsDescription.innerHTML = post.body;

  newsDescriptionSection.appendChild(newsDescription);
  newsDescriptionSection.appendChild(newsTitle);
  news.appendChild(newsImage);

  news.appendChild(newsDescriptionSection);
  sideNewsWrapper.appendChild(news);
};
window.addEventListener("load", () => {
  getPosts().then((data) => {
    data.map((post, index) => {
      return createPost(post, postImages[index]);
    });
  });
});
sideNewsWrapper.addEventListener("click", (event) => {
  if (
    event.target.className === "description" ||
    event.target.tagName === "IMG"
  ) {
    const parent = event.target.closest(".side-news");
    const id = parent.id;
   window.location.href = `/pages/single-page.html?id=${id}`

  }else if(event.target.className === "side-news"){ 
    const id = event.target.id
    window.location.href = `/pages/single-page.html?id=${id}`
  }
});
document
  .getElementById("scroll")
  .addEventListener("click", console.log("done!"));
