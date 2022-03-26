window.addEventListener("scroll", changeNavBar);

function changeNavBar(){
    let header = document.querySelector("header");
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('header-scroll-active', windowPosition);
}