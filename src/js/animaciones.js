function initHeaderAnimations() {
  const titleHeader = document.getElementById("title_header");
  const textHeader = document.getElementById("text_header");
  const subtitle_header = document.getElementById("subtitle_header");
  const conoce_mas = document.getElementById("conoce_mas");

  // Verificar si los elementos existen
  if (titleHeader && textHeader && subtitle_header) {
    // Animación para el h1
    setTimeout(() => {
      titleHeader.classList.add("animate");
    }, 500);
    setTimeout(() => {
      subtitle_header.classList.add("animate");
    }, 1000);

    // Animación para el p
    setTimeout(() => {
      textHeader.classList.add("animate");
    }, 1500);

    // Animación para el conoce_mas
    setTimeout(() => {
      conoce_mas.classList.add("animate", "slideUp");
    }, 2000); // Inicia después de 1000ms (500ms después del h1)
  } else {
    console.log("Elementos no encontrados");
  }
}

// Observador para detectar cuándo el componente se ha cargado
const headerAnimate = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      // Verificar si el header está en el DOM
      const titleHeader = document.getElementById("title_header");
      const textHeader = document.getElementById("text_header");

      if (titleHeader && textHeader) {
        initHeaderAnimations();
        headerAnimate.disconnect(); // Dejar de observar después de iniciar las animaciones
      }
    }
  }
});

// Observar el contenedor donde se carga el componente
headerAnimate.observe(document.body, { childList: true, subtree: true });

// Crear el observer

const elementInViewport = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // El elemento está en el viewport
      console.log("Elemento en el viewport:", entry.target.classList);

      if (entry.target.classList.contains("section")) {
        entry.target.classList.add("slideUpSection", "animate"); 
      }

      if(entry.target.classList.contains('slideleft')){
        entry.target.classList.add("slideLeft", "animate"); 
      }
      if(entry.target.classList.contains('slideright')){
        console.log('slideright')
        entry.target.classList.add("slideRight", "animate"); 
      }

      if(entry.target.classList.contains('slideupdiv')){
        entry.target.classList.add("slideUpDiv", "animate"); 
      }
      if(entry.target.classList.contains('rightToLeftCard')){
        const items = document.querySelectorAll("#rightToLeftCard > div");
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('rightToLeftCard', 'animate'); // Aplica las clases necesarias
          }, index * 300); // 500ms (0.5s) de retraso entre cada uno
        });
      }
    }
  });
}
);

// Seleccionar las secciones con la clase Section
const sections = document.getElementsByClassName("section");

if (sections) {
  // Convertir HTMLCollection a Array y observar cada sección
  Array.from(sections).forEach((section) => {
    elementInViewport.observe(section);
  });
}

// Selecciona la img con la clase slideLeft
const img = document.getElementsByClassName("slideleft");

if (img) {
  // Convertir HTMLCollection a Array y observar cada sección
  //console.log(img)
  Array.from(img).forEach((img) => {
    elementInViewport.observe(img);
  });
}
// Selecciona el elemento con la clase slideright
const  slideright= document.getElementsByClassName("slideright");

if (slideright) {
  // Convertir HTMLCollection a Array y observar cada sección
  //console.log(img)
  Array.from(slideright).forEach((slideright) => {
    elementInViewport.observe(slideright);
  });
}
// Selecciona el div con la clase slideupdiv
const div = document.getElementsByClassName("slideupdiv");

if (div) {
  // Convertir HTMLCollection a Array y observar cada sección
  //console.log(div)
  Array.from(div).forEach((div) => {
    elementInViewport.observe(div);
  });
}
// Selecciona el div con la clase slideupdiv
const rightToLeftCard = document.getElementsByClassName("rightToLeftCard");

if (rightToLeftCard) {
  // Convertir HTMLCollection a Array y observar cada sección
  console.log(rightToLeftCard)
  //
  Array.from(rightToLeftCard).forEach((rightToLeftCard) => {
    elementInViewport.observe(rightToLeftCard);
  });
}
