const carousels = [];

document.querySelectorAll('.carousel-container').forEach((container, index) => {
  const slides = container.querySelector('.slides');
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');
  const totalSlides = container.querySelectorAll('.slide').length;
  let currentIndex = 0;

  const updateSlide = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  });
});