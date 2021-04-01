// toggle menu
const toggleMenu = () => {
    let menu = document.querySelectorAll('.menu-mobile');
    let active = menu[0].getAttribute('class').split(' ');
    for(let i = 0; i < active.length; i++) {
        if(active[i] == 'active') {
            menu[0].classList.remove("active");
        } else {
            menu[0].className += ' active';
        }
    }
}

// back to top
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
    if(window.scrollY > 200) {
        document.querySelectorAll('.backTop')[0].style.display = 'flex';
    } else {
        document.querySelectorAll('.backTop')[0].style.display = 'none';
    }
}

const animateToTop = () => {
    let scrollToTop = window.setInterval(function() {
        let pos = window.pageYOffset;

        if(pos > 0 && pageYOffset >= 10) {
            window.scrollTo(0, pos - 20);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 9);
}

//slide
const slideDelay = 3000;
let curSlide = 0;

const showSlide = (parent, slideIndex, autoplay) => {
    if(typeof slideIndex == 'undefined' || slideIndex == null) {
        slideIndex = 0;
    }
    let sliders = document.querySelectorAll('.'+parent)[0].children[0];
    
    if (slideIndex >= sliders.childElementCount) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = sliders.childElementCount -1;
    }

    // check autoplay
    sliders.className = sliders.className.replace(' autoplay', '');
    if(autoplay != false) {
        sliders.className += ' autoplay';
    } else {
        sliders.className = sliders.className.replace(' autoplay', '');
    }

    // dotted
    let dots = document.querySelectorAll('.'+parent+' .dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[slideIndex].className += ' active';

    // navigative
    if(sliders.previousSibling.nextSibling.nextElementSibling.className == 'owl-nav') {
        let prev = document.querySelectorAll('.'+parent+' .button-prev')[0];
        let next = document.querySelectorAll('.'+parent+' .button-next')[0];
        prev.onclick = function() {
            showSlide(parent, slideIndex-1, autoplay);
        };
    
        next.onclick = function() {
            showSlide(parent, slideIndex+1, autoplay);
        };
    }

    // actual slide
    sliders.firstElementChild.style.setProperty("margin-left", "-" + slideIndex + "00%");

    curSlide = slideIndex;
}

setInterval(()=>{
    let sliders = document.querySelectorAll('.slider');
    let listAuto = [];
    curSlide++;

    if (curSlide >= sliders.childElementCount) {
        curSlide = 0;
    }
    
    for(let i = 0; i < sliders.length; i++) {
        if(sliders[i].classList[1] == 'autoplay') {
            listAuto.push(sliders[i].parentElement.className);
        }
    }
    
    let j = 0;
    while(j < listAuto.length) {
        showSlide(listAuto[j], curSlide);
        j++;
    }
}, slideDelay);

showSlide('slideshow');
showSlide('footer-projects');