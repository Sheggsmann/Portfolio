$(document).ready(function() {

    
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


