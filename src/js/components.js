class Component extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const name = this.getAttribute("name");
      const modifiyHeader = this.hasAttribute('modifiyHeader');
      const modifiyLinkedinComment = this.hasAttribute('modifiyLinkedinComment');
      fetch(`src/components/${name}`)
          .then((response) => response.text())
          .then((html) => {
              this.innerHTML = html;
              if(modifiyHeader) this._modifyHeader();
              if(modifiyLinkedinComment) this._modifyLinkedinComment();
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
  _modifyLinkedinComment() {
      const profile_image = this.getAttribute("profile_image")??null;
      const name_perfil = this.getAttribute("name_perfil")??null;
      const last_name_perfil = this.getAttribute("last_name_perfil")??null;
      const title_perfil = this.getAttribute("title_perfil")??null;
      const date_perfil = this.getAttribute("date_perfil")??null;
      const comment_perfil = this.getAttribute("comment_perfil")??null;

      console.log(profile_image, name_perfil, title_perfil, date_perfil, comment_perfil);

      const img = document.getElementById("profile_image");
      if (img && profile_image) {
        img.src = profile_image;
      }

      const p = document.getElementById("name_perfil");
      if (p && name_perfil) {
        console.log(name_perfil);
        p.textContent = name_perfil;
      }
      const lastname = document.getElementById("last_name_perfil");
      if (lastname && last_name_perfil) {
        lastname.textContent = last_name_perfil;
      }
      const title = document.getElementById("title_perfil");
      if (title && title_perfil) {
        title.textContent = title_perfil;
      }
      const date = document.getElementById("date_perfil");
      if (date && date_perfil) {
        date.textContent = date_perfil;
      }
      const comment = document.getElementById("comment_perfil");
      if (comment && comment_perfil) {
        comment.textContent = comment_perfil;
      }
     /*  const date = document.getElementById("date_perfil");
      if (date && date_perfil) {
        date.textContent = date_perfil;
      } */
      
  }
}

customElements.define("load-component", Component);