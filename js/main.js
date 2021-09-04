const pageLoader = document.querySelector('.page-loader');
setTimeout(() => {
    pageLoader.classList.add('hide');
}, 4000);


$(document).ready(function() {


    const textWrappers = document.querySelectorAll('.ml12');
    textWrappers.forEach(textWrapper => {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    })
    // var textWrapper = document.querySelector('.ml12');
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
      }).add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
      });

    // Toggle Navigation    
    const navToggler = document.querySelector('.nav-toggler');
    navToggler.addEventListener('click', () => {
        document.querySelector('.navbar-inner').classList.toggle('show');
    })
    // Toggle Navigation

    const scrollBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 200) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    })



    // Testimonial Carousel
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    })

})


