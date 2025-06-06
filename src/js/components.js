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
      const height_header = this.getAttribute("height_header");
      const subtitle_header = this.getAttribute("subtitle_header");
      const title_header = this.getAttribute("title_header");
      const text_header = this.getAttribute("text_header");

      
      const h1 = this.querySelector("h1");
      const h2 = this.querySelector("h2");
      const p = this.querySelector('p')

      if (h1 && title_header) {
          h1.textContent = title_header;
          h2.textContent = subtitle_header;
          p.textContent = text_header;
      }

      const img = document.getElementById("background_header");
      if (img && background_header) {
        img.style.backgroundImage =background_header;
      }
      const header = document.getElementById("background_header");
      if (header && height_header) {
        header.style.height =height_header;
      }


      
  }
 
}

customElements.define("load-component", Component);