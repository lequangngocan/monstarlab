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
var slideDelay = 3000;
var curSlide = 0;

showSlide(0, 'slideshow', true);
showSlide(0, 'footer-projects', true);

function showSlide(slideIndex, parent, autoplay) {
    var sliders = document.querySelectorAll('.'+parent)[0].children[0];
    if(autoplay == true) {
        sliders.className += ' autoplay';
    }
    var dots = document.querySelectorAll('.'+parent+' .dot');
    var prev = document.querySelectorAll('.button-prev')[0];
    var next = document.querySelectorAll('.button-next')[0];

    if (slideIndex >= sliders.childElementCount) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = sliders.childElementCount -1;
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[slideIndex].className += ' active';

    prev.onclick = function() {
        showSlide(slideIndex-1, 'slideshow');
    };

    next.onclick = function() {
        showSlide(slideIndex+1, 'slideshow');
    };

    // Actual slide
    sliders.firstElementChild.style.setProperty("margin-left", "-" + slideIndex + "00%");

    curSlide = slideIndex;
}

setInterval(()=>{
    var sliders = document.querySelectorAll('.slider');
    var listAuto = new Array();
    curSlide++;

    if (curSlide >= sliders.childElementCount) {
        curSlide = 0;
    }
    
    for(var i = 0; i < sliders.length; i++) {
        if(sliders[i].classList[1] == 'autoplay') {
            listAuto.push(sliders[i].parentElement.className);
        }
    }
    
    var j = 0;
    while(j < listAuto.length) {
        showSlide(curSlide, listAuto[j]);
        j++;
    }
}, slideDelay);