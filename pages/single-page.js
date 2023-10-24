const url = new URL(window.location);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id");
const mainPage = document.querySelector(".main-page");
const headLineDsc = document.querySelector(".headline-dsc")
const graphic = document.querySelector(".graphic")
const header = document.querySelector(".header")
const headerHeight = header.scrollHeight;
const userComment = document.querySelector(".users-comment")
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

const getComment = () =>{
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  .then(response => response.json())
  .then(comments => {
    comments.map((comment) =>{
      
      createComment(comment)
    })
  })
}

const createComment = (comment) =>{
  const allComments = document.createElement("div")
  allComments.classList.add("all-comments")
  const name = document.createElement("div")
  name.classList.add("name");
  const head = document.createElement("h3")
  head.innerHTML = comment.name;
  name.appendChild(head)
  allComments.appendChild(name);
  const userText = document.createElement("div")
  userText.classList.add("user-text");
  const paragraph = document.createElement("p")
  paragraph.innerHTML = comment.body;
  userText.appendChild(paragraph)
  allComments.append(userText)
  userComment.appendChild(allComments)
}


window.addEventListener("load", () => {
    getPost()
    getComment()
});
