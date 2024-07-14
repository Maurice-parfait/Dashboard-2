const dashboard = document.getElementById("dashboard");
const menuderoulant = document.getElementById("menuderoulant");

dashboard.addEventListener('click', () => {
    if (menuderoulant.style.display === "block") {
        menuderoulant.style.display = "none";
    } else {
        menuderoulant.style.display = "block";
    }
});

const association = document.getElementById("Association");
const menuassociation = document.getElementById("menuassociation");

association.addEventListener('click', () => {
    if (menuassociation.style.display === "block") {
        menuassociation.style.display = "none";
    } else {
        menuassociation.style.display = "block";
    }
});

// pour afficher le menu 

const iconbtn = document.getElementById("iconbtn");
const menu = document.getElementById("menu");
const iconmenu = document.getElementById("iconmenu");
const menuclose = document.getElementById("menuclose");

iconbtn.addEventListener("click", function(){
    menu.style.display = "block";
    iconmenu.style.display = "none";
    menuclose.style.display = "block";
});

menuclose.addEventListener("click", function(){
    menu.style.display = "none";
    iconmenu.style.display = "block";
    menuclose.style.display = "none";
});




