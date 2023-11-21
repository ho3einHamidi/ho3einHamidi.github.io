const userName = document.querySelector("#name")
const email = document.querySelector("#email")
const signUp = document.querySelector(".sign-up")
const password = document.querySelector("#password")
const error = document.querySelector(".error")
function checkSignup(){
    fetch(`https://reqres.in/api/register`,{
        method: "post",
        body: JSON.stringify({
            "email": email.value,
            "password": password.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    .then(res => {
        console.log(res.status)
        if(res.status == 200){
            const userData = {
                name: userName.value,
                email: email.value
            }
            localStorage.setItem("userData",JSON.stringify(userData))
            window.location.href = "/pages/login-page.html"
        }
        
    })
    .then(data => {
        localStorage.setItem("userData",userData)
        window.location.href = "/pages/login-page.html"
    })
    .catch((error) =>{
        throw new Error(error)
    })
}

function nullingCheck(){
    if(userName.value == "" || password.value == "" || email.value == ""){
        console.log(userName.value,"------------")
    }else{
        error.classList.remove("--hide")
    }
}


signUp.addEventListener("click",()=>{
    checkSignup()
    nullingCheck()
})