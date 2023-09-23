class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <a href="#mainContent" tabindex="0" class="skip-content"
        >Skip To Content</a>
      <nav class="nav">
        <div class="logo">
          <img src="./images/resto-radar-icon.svg" alt="ikon resto radar" />
          <h1><a href="/">Radar Resto</a></h1>
        </div>
        <button class="menu-button" id="menu" title="Toogle Menu" aria-label="Toogle Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <style>
                svg {
                  fill: #075174;
                }
              </style>
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        <ul id="drawer" class="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="#">Favorite</a></li>
          <li><a href="https://www.linkedin.com/in/mohamadripalperdiansyah/">About Us</a></li>
        </ul>
      </nav>
    `
  }
}

customElements.define('app-bar', AppBar)
