import Swal from 'sweetalert2/dist/sweetalert2.all.min';
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();

      const nav = document.getElementById('nav');
      const scrollOffset = 10;
      const skipContent = document.querySelector('.skip-content');
      const mainContent = document.querySelector('main');
      skipContent.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.scrollIntoView({ behavior: 'smooth' });
        skipContent.blur();
      });
      window.addEventListener('scroll', () => {
        if (window.scrollY > scrollOffset) {
          nav.classList.add('nav-colored');
        } else {
          nav.classList.remove('nav-colored');
        }
      });
    } catch (error) {
      Swal.fire({
        title: 'Data halaman belum tersedia',
        text: 'Silahkan reload halaman!',
        icon: 'error',
        confirmButtonText: 'Reload',
      }).then((result) => {
        if (result.isConfirmed) {
          if (!navigator.onLine) {
            Swal.fire({
              title: 'Koneksi Terputus',
              text: 'Silahkan hubungkan dengan internet',
              icon: 'warning',
              confirmButtonText: 'Reload',
            }).then((resultConnection) => {
              if (resultConnection.isConfirmed) {
                location.reload();
              }
            });
          } else {
            location.reload();
          }
        }
      });
    }
  }
}

export default App;
