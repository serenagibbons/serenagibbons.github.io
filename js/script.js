// hide navbar on scroll down, display navbar on scroll up
var initialPosition = window.pageYOffset;
window.onscroll = function() {
    // if window width > 800, hide/display navbar on scroll
    if (window.outerWidth > 800) {
        var currentPosition = window.pageYOffset;
        if (initialPosition > currentPosition) {
            document.getElementById("navbar").style.top = "0";
        }
        else {
            document.getElementById("navbar").style.top = "-70px";
        }
    initialPosition = currentPosition;
    }
}

// mobile navbar
function mobileNavBar() {
    var x = document.getElementById("nav-links");
    if (x.style.left == "0px") {
        x.style.left = "-100vw";
    }
    else {
        x.style.left = "0";
    }
}

function menuLinkClick() {
    var x = document.getElementById("nav-links");
    if (x.style.left == "0px") {
        x.style.left = "-100vw";
    }
}