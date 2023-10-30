class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./assets/images/hero-image/hero-image_2-small.jpg">
        <img src='./assets/images/hero-image/hero-image_2-large.jpg' 
             alt="Banyak makanan diatas meja">
      </picture>
        <div class="hero-title">
          <img src="./assets/images/resto-radar.svg" alt="logo resto radar" />
        </div>
      </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
