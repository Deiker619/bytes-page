export function validateName(name) {
  if (/^[A-Za-z\s]+$/.test(name)) {
    return { status: true };
  } else {
    return {
      status: false,
      messageError: "El nombre solo debe contener letras",
    };
  }
}

export function validateEmail(email) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: true };
  } else {
    return { status: false, messageError: "El email no es valido" };
  }
}

export function validatePhone(phone, formContact) {
  console.log(phone);
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

export function validateSubject(subject) {
  if (subject.length > 1) {
    return { status: true };
  } else {
    return {
      status: false,
      messageError: "El asunto debe tener mas de un carácter ",
    };
  }
}

export function validateMessage(message) {
  if (message.length >= 10) {
    return { status: true };
  } else {
    return {
      status: false,
      messageError: "El mensaje debe tener mas de 10 caracteres ",
    };
  }
}
export function formatPhoneNumber(number) {
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
