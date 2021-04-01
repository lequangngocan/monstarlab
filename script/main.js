// toggle menu
const toggleMenu = () => {
    const menu = document.querySelector('.menu-mobile');

    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
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
    const scrollToTop = window.setInterval(function() {
        const pos = window.pageYOffset;

        if(pos > 0) {
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
    if(typeof slideIndex === 'undefined' || slideIndex === null) {
        slideIndex = 0;
    }
    const sliders = document.querySelector(`.${parent}`).children[0];
    if (slideIndex >= sliders.childElementCount) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = sliders.childElementCount -1;
    }

    // check autoplay
    sliders.classList.remove('autoplay');
    if(autoplay != false) {
        sliders.classList.add('autoplay');
    } else {
        sliders.classList.remove('autoplay');
    }

    // dotted
    const dots = document.querySelectorAll(`.${parent} .dot`);
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[slideIndex].classList.add('active');

    // navigative
    if(sliders.previousSibling.nextSibling.nextElementSibling.className == 'owl-nav') {
        const prev = document.querySelector(`.${parent} .button-prev`);
        const next = document.querySelector(`.${parent} .button-next`);
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
    const sliders = document.querySelectorAll('.slider');
    const listAuto = [];

    if (curSlide >= sliders.childElementCount) {
        curSlide = 0;
    }
    curSlide++;
    
    for(let i = 0; i < sliders.length; i++) {
        if(sliders[i].classList.contains('autoplay')) {
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