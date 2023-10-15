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
  const response = await fetch("./index.json");
  const posts = await response.json();
  console.log(posts)

  return posts.data;
};

const createPost = (post) => {
  console.log(post);
  const sideNewsWrapper = document.querySelector(".side-news-wrapper");
  const news = document.createElement("div");
  news.classList.add("side-news");
  news.setAttribute("id", post.id);
  const newsImage = document.createElement("img");
  newsImage.setAttribute("src", post.image);
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
    data.map((post) => {
      return createPost(post);
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
