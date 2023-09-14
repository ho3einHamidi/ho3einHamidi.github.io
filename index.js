const navbar = document.querySelector(".header");
const landing = document.querySelector(".landing");

window.addEventListener("scroll", () => {
  if (Math.floor(window.scrollY) + 97 < landing.scrollHeight) {
    navbar.classList.remove("scrollup");
  } else {
    navbar.classList.add("scrollup");
  }
});
