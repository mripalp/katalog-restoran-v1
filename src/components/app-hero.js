class AppHero extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="hero">
        <img src="./images/heros/hero-image_2.jpg" alt="Banyak makanan diatas meja" />
        <div class="hero-title">
          <img src="./images/resto-radar.png" alt="logo resto radar" />
        </div>
      </div>
    `
  }
}

customElements.define('app-hero', AppHero)
