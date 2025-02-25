class Component extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const name = this.getAttribute("name");
    fetch(`./components/${name}`)
      .then(response => response.text())
      .then(html => {
        this.innerHTML = html;
      })
      .catch(error => console.error("Error al cargar el navbar:", error));
  }
}

customElements.define("load-component", Component); //Debe tener un guion (-) en el nombre del componente
