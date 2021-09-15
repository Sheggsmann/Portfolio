const portfolioItems = document.querySelectorAll('.portfolio-item');
let portfolioItemIndex = 0;


document.addEventListener('click', (e) => {
    if (e.target.closest('.portfolio-item')) {
        let currentItem = e.target.closest('.portfolio-item');
        portfolioItemIndex = [...portfolioItems].indexOf(currentItem);
        console.log(portfolioItemIndex);
        togglePopup();
        toggleBodyScrolling();
    }
})


function loadPortfolioDetails(portfolioItem) {
    document.querySelector('.pp-left').innerHTML = '';
}

function togglePopup() {
    document.querySelector('.pp-popup').classList.toggle('open');
}

function toggleBodyScrolling() {
    document.body.classList.toggle('hide-scroll');
}

// Close Portfolio Popup
document.querySelector('.close-pp-btn').addEventListener('click', () => {
    togglePopup();
    toggleBodyScrolling();
    console.log('Clicked');
})

// Handle Next and Prev buttons
document.querySelector('.prev-pp-btn').addEventListener('click', () => loadNextPrevItem('prev'))
document.querySelector('.next-pp-btn').addEventListener('click', () => loadNextPrevItem('next'))

// Load Next and Prev Items
function loadNextPrevItem(direction) {
    console.log(direction);
}