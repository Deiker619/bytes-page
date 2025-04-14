import {validateName, validateEmail, validatePhone, validateSubject, validateMessage }from "./utils/funciones.js";
const url = "https://bytespagenewsletter-production.up.railway.app/api/v1/form";
const form = document.querySelector("#contactForm");
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

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const subject = document.querySelector("#subject");
  const telf = document.querySelector("#numberContact");
  const message = document.querySelector("#message");

  let formContact = {
    name: name.value.trim(),
    email: email.value.trim(),
    subject: subject.value.trim(),
    phone: numberContact.value.trim(),
    message: message.value.trim(),
  };

  let formValidate = [];

  const nameValidate = validateName(formContact.name);
  nameValidate.status === true
    ? clearError(name)
    : showError(name, nameValidate.messageError);

  const emailValidate = validateEmail(formContact.email);
  emailValidate.status === true
    ? clearError(email)
    : showError(email, emailValidate.messageError);

  const subjectValidate = validateSubject(formContact.subject);
  subjectValidate.status === true
    ? clearError(subject)
    : showError(subject, subjectValidate.messageError);

  const phoneValidate = validatePhone(formContact.phone, formContact);
  phoneValidate.status === true
    ? clearError(telf)
    : showError(telf, phoneValidate.messageError);

  const messageValidate = validateMessage(formContact.message);
  messageValidate.status === true
    ? clearError(message)
    : showError(message, messageValidate.messageError);

  formValidate.push(
    nameValidate.status,
    emailValidate.status,
    subjectValidate.status,
    phoneValidate.status,
    messageValidate.status
  );

  const isAllValid = formValidate.every((elemen) => elemen == true);
  isAllValid ? sendDataContact(url, formContact) : false;
});

/* function validateName(name) {
  if (/^[A-Za-z\s]+$/.test(name)) {
    return { status: true };
  } else {
    return {
      status: false,
      messageError: "El nombre solo debe contener letras",
    };
  }
}

function validateEmail(email) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: true };
  } else {
    return { status: false, messageError: "El email no es valido" };
  }
}

function validatePhone(phone) {
  console.log(phone)
  const regexWithoutSpaces = /^\+\d{1,3}\d{7,}$/;
  if (regexWithoutSpaces.test(phone)) {
    formContact.phone = formatPhoneNumber(phone); //formatea el telefono
    return { status: true };
  } else {
    return {
      status: false,
      messageError:
        "El teléfono debe tener el formato +12345678912 y sin espacios",
    };
  }
}

function validateSubject(subject) {
  if (subject.length > 1) {
    return { status: true };
  } else {
    return {
      status: false,
      messageError: "El asunto debe tener mas de un carácter ",
    };
  }
}

function validateMessage(message) {
  if (message.length >= 10) {
    return { status: true };
  } else {
    return {
      status: false,
      messageError: "El mensaje debe tener mas de 10 caracteres ",
    };
  }
}

function formatPhoneNumber(number) {
  // Eliminar cualquier carácter no numérico excepto el "+"
  const cleanNumber = number.replace(/[^\d+]/g, "");

  // Verificar si el número comienza con "+"
  if (!cleanNumber.startsWith("+")) {
    return 'Error: El número debe comenzar con "+" seguido del código de país.';
  }

  // Extraer el código de país (1 a 3 dígitos después del "+")
  const match = cleanNumber.match(/^\+(\d{1,3})(\d{3})(\d{3})(\d{4})$/);

  if (!match) {
    return "Error: El número no tiene el formato correcto.";
  }

  // Retornar el número en el formato esperado
  return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
}
 */
function showError(selector, message) {
  const propError = document.querySelector(`#${selector.id}Error`);
  //console.log(propError);
  propError.classList.remove("hidden");
  propError.textContent = message;
}
function clearError(selector) {
  const propError = document.querySelector(`#${selector.id}Error`);
  //console.log(propError)
  propError.classList.add("hidden");
}

async function sendDataContact(url, data = null) {
  //console.log(data, url);
  try {
    const options = data
      ? {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      : {};

    const response = await fetch(url, options);

    if (!response.ok) {
      console.log(response)
      return Toast.fire({
        icon: "error",
        title: "Se produjo un error en la petición",
      });
    }
    

    const result = await response.json();
    //console.log("Respuesta del servidor:", result);
    return Toast.fire({
      icon: "success",
      title: `Gracias ${formContact.name}, se ha enviado tu mensaje`,
    });
  } catch (error) {
    console.error("Se produjo un error:", error.message);
    return { success: false, error: error.message };
  }
}

