// slide
function showSlide(n) {
    var items = document.querySelectorAll('.item');
    var dots = document.querySelectorAll('.dot');
    var prev = document.querySelectorAll('.button-prev')[0];
    var next = document.querySelectorAll('.button-next')[0];

    if(n >= 0 && n < items.length) {

        for(var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        items[n].style.display = 'block';

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        dots[n].className += ' active';

        prev.onclick = function() {
            showSlide(n-1);
        };

        next.onclick = function() {
            showSlide(n+1);
        };
    }
    
}
showSlide(0);

var slideIndex = 0;
autoSlide();

function autoSlide() {
    
    var items = document.querySelectorAll('.item');
    var dots = document.querySelectorAll('.dot');
    
    for(var i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    slideIndex++;
    if(slideIndex >= items.length) {
        slideIndex = 0;
    }
    items[slideIndex].style.display = 'block';

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[slideIndex].className += ' active';

    setTimeout(autoSlide, 2000);
}

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

// carousel 
function carousel(n) {
    var items = document.querySelectorAll('.carousel');
    var dotted = document.querySelectorAll('.dotted');

    if(n >= 0 && n < items.length) {

        for(var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        items[n].style.display = 'block';

        for (i = 0; i < dotted.length; i++) {
            dotted[i].className = dotted[i].className.replace(' active', '');
        }
        dotted[n].className += ' active';
    }
}
carousel(0);

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
