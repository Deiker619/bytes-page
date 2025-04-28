const form_cotizacion = document.querySelector("#form_cotizacion");
const checkEnterprise = document.querySelector("#check_enterprise");
form_cotizacion.addEventListener("submit", function (event) {
  event.preventDefault();
  //console.log(form_cotizacion);

  let formInputs = {
    name: document.querySelector("#name").value.trim(),
    phone: document.querySelector("#phone").value.trim(),
    email: document.querySelector("#email").value.trim(),
    type_program: document.querySelector("#type_program").value.trim(),
    interest_area: document.querySelector("#area").value.trim(),
    //duration: document.querySelector("#duration").value.trim(),
    date_estimated: document.querySelector("#date_estimated").value.trim(),
    message: document.querySelector("#message").value.trim(),
  };
  console.log(formInputs);
  if (checkEnterprise.checked) {
    setObjectEnterprise(formInputs); //Setea el objeto de empresa
    console.log('enviando formulario empresa');
  } else {
    console.log('Enviando formulario general');
  }
});

checkEnterprise.addEventListener("change", function () {
  const enterprise_inputs = document.querySelectorAll(
    "[data-type='enterprise']"
  );
  const individual_inputs = document.querySelectorAll(
    "[data-type='individual']"
  );
  if (checkEnterprise.checked) {
    //console.log(enterprise_inputs.length, enterprise_inputs);

    enterprise_inputs.forEach((input) => {
      //Setea la propiedad requerida a los inputs de empresa
      input.classList.add("show");
      input.classList.remove("hidden");
      setInputPropertys(input);
      //console.log(input.classList);
    });

    individual_inputs.forEach((input) => {
      //Remueve la propiedad requerida a los inputs de individual
      input.classList.remove("show");
      input.classList.add("hidden");
      removeInputPropertys(input);
      // console.log(input.classList);
    });
  } else {
    enterprise_inputs.forEach((input) => {
      input.classList.remove("show");
      input.classList.add("hidden");
      removeInputPropertys(input);
      //console.log(input.classList);
    });

    individual_inputs.forEach((input) => {
      input.classList.add("show");
      input.classList.remove("hidden");
      setInputPropertys(input);
      //console.log(input.classList);
    });
  }
});

function setInputPropertys(input) {
  if (input.tagName === "INPUT") {
    input.setAttribute("required", "required");
  }
}
function removeInputPropertys(input) {
  if (input.tagName === "INPUT") {
    input.removeAttribute("required");
    // console.log("removido required", input);
  }
}
function setObjectEnterprise(formInputsGeneral = null) {
  let formInputsEnterprise = {
    name_enterprise: document.querySelector("#name_enterprise").value.trim(),
    number_persons_enterprise: document
      .querySelector("#number_persons_enterprise")
      .value.trim(),
    position_enterprise: document
      .querySelector("#position_enterprise")
      .value.trim(),
  };

  const inputsGenerals = excludeProps(formInputsGeneral, ["name"]);
  console.log({ ...inputsGenerals, ...formInputsEnterprise });
}
function excludeProps(obj, propsToExclude) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !propsToExclude.includes(key))
  );
}

let visible = false;
function toggleBox() {
  const box = document.getElementById("box");
  const modal_cotizacion = document.querySelector("#modal_cotizacion");
  visible = !visible;
  //console.log(visible);

  if (visible) {
    box.classList.remove("hidden");
    setTimeout(() => {
      box.classList.add("opacity-100");
      modal_cotizacion.classList.add("navButton", "animate");
     // console.log("abierto");
    }, 0); // retraso para activar transición
  } else {
    modal_cotizacion.classList.remove("navButton");
    modal_cotizacion.classList.add("navUp");
    box.classList.remove("opacity-100");
    setTimeout(() => {
      box.classList.add("hidden");
     // console.log("cerrado");
    }, 500); // espera a que termine la transición
  }
}
