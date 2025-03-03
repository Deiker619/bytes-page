let currentIndex = 0;
const carousel = document.getElementById("carousel");
const items = document.querySelectorAll("#carousel > div");
const totalItems = items.length;
const visibleItems = 3; // Siempre mostrar 3 elementos
const itemWidth = items[0].offsetWidth; // Ancho de un elemento
let autoSlideInterval;

// Actualiza la posición del carrusel
function updateCarousel() {
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Avanzar en el carrusel
function nextSlide() {
  if (currentIndex < totalItems - visibleItems) {
    currentIndex++;
  } else {
    // Reinicia al inicio SIN espacios en blanco
    currentIndex = 0;
    carousel.style.transition = "none"; // Desactiva la animación para reinicio instantáneo
    carousel.style.transform = `translateX(0)`;

    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      updateCarousel();
    }, 50); // Pequeño delay para evitar parpadeo
  }
  updateCarousel();
}

// Retroceder en el carrusel
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    // Ir al final sin espacios en blanco
    currentIndex = totalItems - visibleItems;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      updateCarousel();
    }, 50);
  }
  updateCarousel();
}

// Auto Slide cada 3 segundos
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

// Detener Auto Slide
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

/* // Iniciar Auto Slide al cargar
startAutoSlide(); */

// Detener auto-slide al interactuar con botones
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("mouseenter", stopAutoSlide);
  btn.addEventListener("mouseleave", startAutoSlide);
});
