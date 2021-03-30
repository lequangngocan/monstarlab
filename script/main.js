// slide
function showSlide(n) {
    var items = document.getElementsByClassName('item');
    var dots = document.getElementsByClassName('dot');
    var prev = document.getElementById('nav-prev');
    var next = document.getElementById('nav-next');

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

// toggle menu
function toggleMenu() {
    var menu = document.getElementById('menu-mobile');
    var active = menu.getAttribute('class').split(' ');
    for(var i = 0; i < active.length; i++) {
        if(active[i] == 'active') {
            document.getElementById('menu-mobile').classList.remove("active");
        } else {
            document.getElementById('menu-mobile').className += ' active';
        }
    }
}

// carousel 
function carousel(n) {
    var items = document.getElementsByClassName('carousel');
    var dotted = document.getElementsByClassName('dotted');

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
        document.getElementsByClassName('backTop')[0].style.display = 'flex';
    } else {
        document.getElementsByClassName('backTop')[0].style.display = 'none';
    }
}
function backTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}