import 'regenerator-runtime';
import '../styles/main.scss';
import './views/components/app-bar';
import './views/components/app-hero';
import './views/components/app-footer';
import '../styles/fontawesome-icon';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
