let navBar = document.querySelector(".hamburger");
let menuBtn = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");
let menuItem = document.querySelector(".menu-item");
let mn2 = document.querySelector(".mn2");
let mn3 = document.querySelector(".mn3");
let mn4 = document.querySelector(".mn4");



 toggle = () => {
        menuBtn.style.right = "0";
        navBar.style.display = "none";
        closeBtn.style.display = "block";         
};

close = () => {
    if (window.matchMedia("(max-width: 766px)").matches) {
        menuBtn.style.right = "-100vw";
        navBar.style.display = "block";
        closeBtn.style.display = "none"; 
    } else {
        navBar.style.display = "none"
        closeBtn.style.display = "none";
        menuBtn.style.right = "0vw"; 
    }
    
};

navBar.addEventListener ("click", toggle);
menuItem.addEventListener ("click", close);
mn2.addEventListener ("click", close);
mn3.addEventListener ("click", close);
mn4.addEventListener ("click", close);
closeBtn.addEventListener ("click", close);



// closee = () => {
//     menuItem.forEach ( () => {
//         menuBtn.style.right = "-100vw";
//     navBar.style.display = "block";
//     closeBtn.style.display = "none";
//     })

// };
// menuItem.addEventListener ("click", closee);



