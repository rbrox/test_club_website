// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
// Function to check if an element is in the viewport from the side
function isInViewportFromSide(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let animationShown = false; // Flag to track if animation has been shown

// Function to check if element is in viewport from side
function isInViewportFromSide(element) {
    const rect = element.getBoundingClientRect();
    const viewWidth = window.innerWidth || document.documentElement.clientWidth;
    return (
        rect.left >= 0 &&
        rect.left <= viewWidth // Check if element is within viewport width
    );
}

// Function to check if an element is in the viewport from the side
function isInViewportFromSide(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.right >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event for side animation
function handleScrollForSide() {
    const gridContainer = document.querySelector('.grid-container');
    if (isInViewportFromSide(gridContainer)) {
        gridContainer.classList.add('show');
    }
}

// Attach scroll event listener for side animation
window.addEventListener('scroll', handleScrollForSide);
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
