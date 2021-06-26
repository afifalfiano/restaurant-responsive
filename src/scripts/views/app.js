import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this.initialAppShell();
  }

  // eslint-disable-next-line class-methods-use-this
  initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const scroll = () => {
      const restaurant = document.getElementById('click_restaurant');
      restaurant.addEventListener('click', () => {
        window.location.hash = 'restaurant';
        window.scroll({ behavior: 'smooth', left: 0, top: 600 });
      });
    };
    const backHome = () => {
      const home = document.getElementById('click_home');
      home.addEventListener('click', () => {
        window.location.hash = '/home';
        window.scroll({ behavior: 'smooth', left: 0, top: 0 });
      });
    };

    const { hash } = window.location;
    if (hash === '' || hash === '#/home' || hash === '#restaurant') {
      scroll();
    }
    backHome();
  }
}

export default App;
