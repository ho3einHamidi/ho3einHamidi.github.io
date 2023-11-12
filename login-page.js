const loginButton = document.querySelector(".login");
const userName = document.querySelector("#user-name")
const password = document.querySelector("#password")

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
        throw new Error("HTTP status " + response.status)
    })
    .then(data => {
        console.log(data)
        const {token} = data
        console.log(token)
        localStorage.setItem("token", token)
        window.location.href = "/"
    })
    
}

loginButton.addEventListener("click",() =>{
    console.log("-----------------------")
    checkLogin()
})


