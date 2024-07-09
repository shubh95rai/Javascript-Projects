const nav = document.querySelector(".nav");
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".link");


window.addEventListener("scroll", () => {
  if (scrollY >= 200) {
    nav.classList.add("lg:bg-white");
    nav.classList.add("lg:shadow-md");
  } else {
    nav.classList.remove("lg:bg-white");
    nav.classList.remove("lg:shadow-md");
  }
});

toggle.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

links.forEach((link)=>{
    link.addEventListener("click",()=>{
        menu.classList.remove("show-menu")
    })
})
