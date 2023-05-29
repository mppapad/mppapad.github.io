const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// Hamburger menu toggle scrpit:
toggleButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active')
})

// Theme switch script:
var icon = document.getElementById("themeIcon");
icon.onclick = function() {
    document.body.classList.toggle("white-theme");
    if( document.body.classList.contains("white-theme")) {
        themeIcon.src = "images/moon.png";
        logosvg.src = "images/MppapadLogo-dark.svg";
    }
    else {
        themeIcon.src = "images/sun.png";
        logosvg.src = "images/MppapadLogo-Light.svg";
    }
}
