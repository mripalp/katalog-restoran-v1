class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
      <p>
        &copy; 2023 RadarResto | Made with
        <span>Mohamad Ripal Perdiansyah</span>
      </p>
    </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
