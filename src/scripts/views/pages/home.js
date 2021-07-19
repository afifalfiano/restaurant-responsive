import API_ENDPOINT from '../../globals/api-endpoint';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {

  async render() {
    return `
      <section>
          <div class="hero">
          <picture>
              <source media="(max-width: 600px)" srcset="../images/heros/hero-image_2-min.jpg">
              <img src="../images/heros/hero-image_2-min.jpg" alt="Hero Images 2">
          </picture>
          </div>
          <div class="information">
              <h1 tabindex="0">Choose Best Food Now!</h1>
              <h2 tabindex="0">Make sure you don't miss the special menu on restaurant from hunger apps</h2>
              <button id="click_restaurant">Check it now!</button>
          </div>
      </section>

        <div id="restaurant" class="menu_resto">
            <h2 class="menu_resto__title">Explore Restaurant</h2>
            <div id="list" class="menu_resto__list"></div>
            <div id="notfound"></div>
        </div>
        `;
  },

  async fetchRestaurantData() {
    const response = await fetch(API_ENDPOINT.list);
    const restaurant = response.json();
    return restaurant;
  },

  async afterRender() {
    const data = await this.fetchRestaurantData();
    const menuRestoList = document.querySelector('.menu_resto__list');
    data.restaurants.forEach((item) => {
      menuRestoList.innerHTML += createRestoItemTemplate(item);
    });
  },

};
export default Home;
