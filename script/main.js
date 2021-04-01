// toggle menu
function toggleMenu() {
    var menu = document.querySelectorAll('.menu-mobile');
    var active = menu[0].getAttribute('class').split(' ');
    for(var i = 0; i < active.length; i++) {
        if(active[i] == 'active') {
            menu[0].classList.remove("active");
        } else {
            menu[0].className += ' active';
        }
    }
}

// back to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(window.scrollY > 200) {
        document.querySelectorAll('.backTop')[0].style.display = 'flex';
    } else {
        document.querySelectorAll('.backTop')[0].style.display = 'none';
    }
}

function animateToTop(e) {
    e.preventDefault();
    var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;

        if(pos > 0 && pageYOffset >= 10) {
            window.scrollTo(0, pos - 20);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 9);
}

//slide
var i;
var slideDelay = 3000;
var curSlide = 0;

showSlide(0, 'slideshow');
showSlide(0, 'footer-projects');

function showSlide(n, parent) {

    var sliders = document.querySelectorAll('.'+parent)[0].children[0];
    var dots = document.querySelectorAll('.'+parent+' .dot');
    var prev = document.querySelectorAll('.button-prev')[0];
    var next = document.querySelectorAll('.button-next')[0];

    if (n >= sliders.childElementCount) {
        n = 0;
    } else if (n < 0) {
        n = sliders.childElementCount -1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[n].className += ' active';

    prev.onclick = function() {
        showSlide(n-1, 'slideshow');
    };

    next.onclick = function() {
        showSlide(n+1, 'slideshow');
    };

    // Actual slide
    sliders.firstElementChild.style.setProperty("margin-left", "-" + n + "00.2%");

    curSlide = n;
}

window.setInterval(()=>{
    var sliders = document.querySelectorAll('.slider');
    curSlide++;

    if (curSlide >= sliders.childElementCount) {
        curSlide = 0;
    }

    showSlide(curSlide, 'slideshow');
}, slideDelay);