
const header = document.querySelector(".header");


window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);


function checkScroll() {
    let scrollPos = window.scrollY;

    if(scrollPos > 35) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

