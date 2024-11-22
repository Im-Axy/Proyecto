document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}


let currentIndex = 0;

function changeSlide(direction) {
  const carouselContainer = document.querySelector('.carousel-container');
  const totalItems = document.querySelectorAll('.carousel-item').length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  carouselContainer.style.transform = `translateX(${offset}%)`;
}



const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card) => {
    card.addEventListener('click', () => {

        productCards.forEach(c => c.classList.remove('active'));

        card.classList.add('active');
    });
});



