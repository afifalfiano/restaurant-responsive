import RestoDatabase from '../../utils/resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {

  async render() {
    return `
      <div class="menu_resto">
      <h2 class="menu_resto__title">Favorit Restaurant</h2>
      <div id="list" class="menu_resto__list"></div>
      </div>
        `;
  },

  async afterRender() {
    const data = await RestoDatabase.getAllResto();
    console.log(data, 'log db');
    const menuRestoList = document.querySelector('.menu_resto__list');
    data.forEach((item) => {
      menuRestoList.innerHTML += createRestoItemTemplate(item);
    });
  },
};

export default Favorite;
