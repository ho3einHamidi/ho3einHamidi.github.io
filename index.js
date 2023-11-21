const navbar = document.querySelector(".header");
const landing = document.querySelector(".landing");
const sideNewsWrapper = document.querySelector(".side-news-wrapper");
const login = document.querySelector(".login");
const signup = document.querySelector(".sign-up")
const loginSignupWrapper = document.querySelector(".right-side")
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

  return posts.data;
};

const createPost = (post) => {
  const sideNewsWrapper = document.querySelector(".side-news-wrapper");
  const news = document.createElement("div");
  news.classList.add("side-news");
  news.setAttribute("id", post.id);
  const newsImage = document.createElement("img");
  const postsImage = `./assets/image/${post.image}`
  newsImage.setAttribute("src", postsImage);
  const newsDescriptionSection = document.createElement("div");
  newsDescriptionSection.classList.add("caption");
  const newsTitle = document.createElement("p");
  newsTitle.classList.add("title");
  newsTitle.innerHTML = post.title;
  const newsDescription = document.createElement("p");
  newsDescription.classList.add("descriptions");
  newsDescription.innerHTML = post.body;

  newsDescriptionSection.appendChild(newsTitle);
  newsDescriptionSection.appendChild(newsDescription);
  news.appendChild(newsImage);

  news.appendChild(newsDescriptionSection);
  sideNewsWrapper.appendChild(news);
};
const checkAuthentication = () =>{
  const token = localStorage.getItem("token")
  if(!token){
    loginSignupWrapper.classList.remove("--hide")
  }
}


window.addEventListener("load", () => {
  checkAuthentication()
  getPosts().then((data) => {
    data.map((post) => {
      return createPost(post);
    });
  });
});
sideNewsWrapper.addEventListener("click", (event) => {
  if (
    event.target.className === "descriptions" ||
    event.target.tagName === "IMG" || event.target.className === "title"
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
  // .addEventListener("click", console.log("done!"));



  login.addEventListener("click", () =>{
    window.location.href = `/pages/login-page.html`
  })

  signup.addEventListener("click", () =>{
    window.location.href = `/pages/signup-page.html`
  })