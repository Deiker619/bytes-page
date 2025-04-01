const formObserver = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      const formSubscription = document.getElementById("formSuscripcion");
      //console.log(formSubscription);
      if (formSubscription) {
        formObserver.disconnect(); // Deja de observar una vez que se encuentra
        onFormAvailable(formSubscription); // Llama al callback con el formulario encontrado
      }
    }
  }
});

// Esta es la función que se ejecuta cuando el formulario está disponible
function onFormAvailable(form) {
  console.log("El formulario ya está disponible:", form);

  // Ahora puedes trabajar con `form` sin necesidad de estar dentro del condicional
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#emailSubscripcion");

    //console.log(email.value);

    formData = {
      email: email.value,
    };

    if (!email.value) {
      return Toast.fire({
        icon: "error",
        title: "Debe colocar un email valido",
      });
    }
    sendSuscripcion(formData);
  });

  async function sendSuscripcion(formData) {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };
     // console.log(options);
      const url =
        "https://bytespagenewsletter-production.up.railway.app/api/v1/newsletters/";

      const response = await fetch(url, options);

      if (response.status === 409) {
        return Toast.fire({
          icon: "info",
          title: `El correo ${formData.email} ya se encuentra registrado`,
        });
      }
      if (response.status === 400) {
        return Toast.fire({
          icon: "info",
          title: `El correo no es valido`,
        });
      }
      if (!response.ok) {
        return Toast.fire({
          icon: "error",
          title: "Se produjo un error en la petición",
        });
      }

      //const data = await response.json();
      return Toast.fire({
            icon: "success",
            title: `${formData.email} Se ha registrado exitosamente`
          });
    } catch (error) {
      console.log("Ocurrio un error ");
    }
  }
}
const Toast = Swal.mixin({
  toast: true,
  position: "bottom-start",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

// Observa cambios en el `body` y sus descendientes
formObserver.observe(document.body, { childList: true, subtree: true });
