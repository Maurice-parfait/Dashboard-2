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


