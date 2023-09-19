const navbar = document.querySelector(".header");
const landing = document.querySelector(".landing");

window.addEventListener("scroll", () => {
  if (Math.floor(window.scrollY) + 97 < landing.scrollHeight) {
    navbar.classList.remove("scrollup");
  } else {
    navbar.classList.add("scrollup");
  }
});

const getPosts = async  () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()
  return posts.slice(0,4);
}
const createPost = (post) => {
  console.log(post);
  const newsWrapper = document.querySelector(".secondry-news")
  const news = document.createElement("div")
  news.classList.add("side-news");
  const newsImage = document.createElement("img")
  newsImage.setAttribute("src","")
  const newsDescriptionSection = document.createElement("div")
  newsDescriptionSection.classList.add("caption");
  const newsTitle = document.createElement("p")
  newsTitle.classList.add("title")
  newsTitle.innerHTML = post.title
  const newsDescription = document.createElement("p")
  newsDescription.classList.add("description")
  newsDescription.innerHTML = post.body

  newsDescriptionSection.appendChild(newsDescription)
  newsDescriptionSection.appendChild(newsTitle)
  news.appendChild(newsImage)

  news.appendChild(newsDescriptionSection)
  newsWrapper.appendChild(news)
}
window.addEventListener("load",() => {
   getPosts().then((data) => {
    data.map((post) => createPost(post))
  })
})