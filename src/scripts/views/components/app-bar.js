class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#mainContent" tabindex="0" class="skip-content"
        >Skip To Content</a>
      <nav class="nav" id="nav">
        <div class="logo">
          <img src="./assets/images/resto-radar-icon.svg" alt="ikon resto radar" />
          <h1><a href="#">Radar Resto</a></h1>
        </div>
        <button class="menu-button" id="menu" title="Toogle Menu" aria-label="Toogle Menu">
            <i class="fa fa-bars"></i>
          </button>
        <ul id="drawer" class="nav-list">
          <li><a href="#" id="home">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://www.linkedin.com/in/mohamadripalperdiansyah/" title="Link ke about us" target="_blank" rel="noreferrer">About Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
