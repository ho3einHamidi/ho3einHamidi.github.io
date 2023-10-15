const url = new URL(window.location);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id");
const mainPage = document.querySelector(".main-page");
const headLineDsc = document.querySelector(".headline-dsc")
console.log(id);

const getPost =  () => {
    fetch(
    `../index.json`
  ).then(response =>{
     return response.json();
     
  }).then(posts =>{
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
//   console.log(post);
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
};
window.addEventListener("load", () => {
    getPost()
});
