const observer = new MutationObserver(() => {
    const navbar = document.querySelector("nav");
    const ul = document.getElementById('ul-sticky')
    const img = document.getElementById('logo');
    if (navbar) {
      observer.disconnect(); // Detener la observación una vez encontrado el nav
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("bg-white", "shadow-md", 'text'); // Cambia el fondo y agrega sombra
          ul.classList.add('text-[#08a6eb]')
          img.src = 'https://bytescreativos.net/img/contenido/Logo%20color.svg'
        } else {
          navbar.classList.remove("bg-white", "shadow-md");
          ul.classList.remove('text-[#08a6eb]')
          img.src= 'https://bytescreativos.net/img/contenido/logobytes.png'
        }
      });
    }
  });
  
  // Observa el `<body>` para detectar cambios en el DOM
  observer.observe(document.body, { childList: true, subtree: true });