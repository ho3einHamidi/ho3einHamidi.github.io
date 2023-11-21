const loginButton = document.querySelector(".login");
const userName = document.querySelector("#user-name")
const password = document.querySelector("#password")
const error1 = document.querySelector(".error-1")
const error2 = document.querySelector(".error-2")
function setToLocalStorage()  {
    localStorage.setItem("token",token)
}

function checkLogin(){
    fetch(`https://reqres.in/api/login`,{
        method: "post",
        body: JSON.stringify({
            "email": userName.value,
            "password": password.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    .then(res => {
        console.log(res.status)
        if(res.status == 200){
            return res.json()
        }
    })
    .then(data => {
        if(data){
            console.log(data)
            const {token} = data
            console.log(token)
            localStorage.setItem("token", token)
            window.location.href = "/"
        }else{

        checkFeild()
        }
    })
        .catch((error) =>{
            throw new Error(error) 
        })
}

function checkFeild(){
    // if(userName == "" || password == ""){
    //     error1.classList.remove("--hide")
    //     error2.classList.remove("--hide")
    //     error1.innerText = "where is your user name"
    // }
        error1.classList.remove("--hide")
        error2.classList.remove("--hide")
        userName.style.border = "1px solid red";
        password.style.border = "1px solid red";
}
function correctUserNameAndPass(){
        error1.classList.add("--hide")
        error2.classList.add("--hide")
        userName.style.border = "none";
        password.style.border = "none";
}

loginButton.addEventListener("click",() =>{
    checkLogin()
})


