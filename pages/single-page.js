const url = new URL(window.location);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id");
const mainPage = document.querySelector(".main-page");
const headLineDsc = document.querySelector(".headline-dsc")
const graphic = document.querySelector(".graphic")
console.log(id);

const getPost =  () => {
    fetch(
    `../index.json`
  ).then(response =>response.json()).then(posts =>{
    console.log(posts);
    const post = posts.data.find((item) =>{
        console.log(item.id)
        return item.id == id
     }) 
     console.log(post);
     createPost(post) 

  })
}


const createPost = (post) => {
  // console.log(post.image);
//   const news = document.createElement("div");
//   const newsTitle = document.createElement("p");
//   newsTitle.innerHTML = post.title;
//   const newsDsc = document.createElement("p");
//   newsDsc.innerHTML = post.body;
//   news.appendChild(newsDsc);
//   news.appendChild(newsTitle);
//   mainPage.appendChild(news);
    const dsc = document.createElement("p")
    dsc.innerHTML = post.body
    headLineDsc.appendChild(dsc)
    const image = document.createElement("img")
    const postImage = `/assets/image/${post.image}`
    image.setAttribute("src",postImage)
    graphic.appendChild(image)
};
window.addEventListener("load", () => {
    getPost()
});
