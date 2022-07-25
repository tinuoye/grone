let navBar = document.querySelector(".hamburger");
let menuBtn = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");
let menuItem = document.querySelector(".menu-item");



 toggle = () => {
        menuBtn.style.right = "0";
        navBar.style.display = "none";
        closeBtn.style.display = "block";         
};

close = () => {
     menuBtn.style.right = "-100vw";
    navBar.style.display = "block";
    closeBtn.style.display = "none";
};

navBar.addEventListener ("click", toggle);
menuItem.addEventListener ("click", close);
closeBtn.addEventListener ("click", close);




