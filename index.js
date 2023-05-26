burger=document.querySelector(".burger");
navbar=document.querySelector(".navbar");
navlist=document.querySelector(".nav-list");
rightnav=document.querySelector(".rightnav");

burger.addEventListener("click",()=>{
    rightnav.classList.toggle("visibiality");
    navlist.classList.toggle("visibiality");
    navbar.classList.toggle("h-nav");
    
})