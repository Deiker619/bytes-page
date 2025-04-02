const observer = new MutationObserver(() => {
    const navbar = document.querySelector("nav");
    const ul = document.getElementById('ul-sticky')
    const img = document.getElementById('logo');
    const span = document.querySelectorAll('li > a > span')
    const button = document.getElementById('button-responsive')
    const closeMenu = document.getElementById('close-menu')
    const menu = document.getElementById('menu-responsive')
    if (navbar) {
      observer.disconnect();  // Detener la observación una vez encontrado el nav
      menu.classList.add('hidden')
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("bg-white", "shadow-md"); // Cambia el fondo y agrega sombra
          ul.style.color='#0397d6ea'
          span.forEach(element => {
            element.style.backgroundColor = '#0397d6ea'
          });
       
          img.src = 'src/img/contenido/Logo%20color.svg'
        } else {
          navbar.classList.remove("bg-white", "shadow-md");
          ul.style.color='white'
          img.src= 'src/img/contenido/logobytes.png'
          span.forEach(element => {
            element.style.backgroundColor = 'white'
          });
        }
      });

      closeMenu.addEventListener('click', () => {
        menu.classList.remove('navButton', 'animate')
        menu.classList.add('navUp', 'animate')
      })
      
      button.addEventListener('click', () => {
        menu.classList.remove('hidden')
        if (menu.classList.contains('navUp')) {
          menu.classList.remove('navUp')
          menu.classList.add('navButton', 'animate',)
        } else {
          menu.classList.remove('navButton', 'animate')
          menu.classList.add('navUp', 'animate')
        }
        console.log(menu)
      })
    }
  });
  
  // Observa el `<body>` para detectar cambios en el DOM
  observer.observe(document.body, { childList: true, subtree: true });