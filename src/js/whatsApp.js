const ws = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      // Verifica si el componente está cargado
      let wsButton = document.getElementById("wsButton");
      if (wsButton) {
        // Detener el observador después de detectar el componente
        observer.disconnect();
       // console.log("Componente WhatsApp detectado. Enviando mensaje...");
        wsButton = document.getElementById("wsButton");

        wsButton.addEventListener("click", function () {
          console.log("enviar ws");
          telefono = "+584120183670";
          mensaje = "hola";
          let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
            mensaje
          )}`;
          // Abrir WhatsApp en otra pestaña
          window.open(url, "_blank");
        });
      }
    }
  }
});

// Observar el contenedor donde se carga el componente
ws.observe(document.body, { childList: true, subtree: true });
