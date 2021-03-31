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
    if(document.body.scrollTop > 200) {
        document.querySelectorAll('.backTop')[0].style.display = 'flex';
    } else {
        document.querySelectorAll('.backTop')[0].style.display = 'none';
    }
}
function backTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// slide
var slideIndex = 0;

function showSlide(n, parent) {
    var items = document.querySelectorAll('.'+parent+' .item');
    var dots = document.querySelectorAll('.'+parent+' .dot');
    var prev = document.querySelectorAll('.button-prev')[0];
    var next = document.querySelectorAll('.button-next')[0];
    
    if(n >= items.length) {
        n = 0;
    } else if (n < 0) {
        n = items.length -1;
    }
    for(var i = 0; i < items.length; i++) {
        items[i].className = items[i].className.replace(' active', '');
    }
    items[n].className += ' active';

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

    slideIndex = n;
}

showSlide(0, 'footer-projects');
carousel();

// autoplay
function carousel() {
    var items = document.querySelectorAll('.slideshow .item');
    if (slideIndex >= items.length) {
        slideIndex = 0
    }
    showSlide(slideIndex, 'slideshow');
    slideIndex++;
    setTimeout(carousel, 3000);
}