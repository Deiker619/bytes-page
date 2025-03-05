class Component extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const name = this.getAttribute("name");
      const modifiyHeader = this.hasAttribute('modifiyHeader');
      fetch(`src/components/${name}`)
          .then((response) => response.text())
          .then((html) => {
              this.innerHTML = html;
              if(modifiyHeader) this._modifyHeader();
              
          })
          .catch((error) => console.error("Error al cargar el navbar:", error));
  }

  _modifyHeader() {
      const background_header = this.getAttribute("background_header");
      const title_header = this.getAttribute("title_header");
      const h1 = this.querySelector("h1");

      if (h1 && title_header) {
          h1.textContent = title_header;
      }

      const img = document.getElementById("background_header");
      if (img && background_header) {
        img.style.backgroundImage =background_header;
      }

      
  }
}

customElements.define("load-component", Component);