import API_ENDPOINT from '../../globals/api-endpoint';
import { createLikeButtonTemplate, createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import UrlParser from '../../routes/url-parser';
import Config from '../../globals/config';

const Detail = {

  async render() {
    return `
          <div class="breadcrumb"><p>Detail Page</p></div>
          <div class="detail-content"></div>
          <div id="likeButtonContainer"></div>
          `;
  },
  async fetchRestoDetail(id) {
    const detailResto = await fetch(API_ENDPOINT.detail(id));
    const data = detailResto.json();
    return data;
  },

  async postData(id, name, reviews) {
    const data = await fetch(`${Config.URL}review`, { method: 'POST', headers: { 'Content-Type': Config['Content-Type'], 'X-Auth-Token': Config.KEY }, body: JSON.stringify({ id, name, review: reviews }) });
    return data;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await this.fetchRestoDetail(url.id);
    const menuRestoList = document.querySelector('.detail-content');

    menuRestoList.innerHTML = createRestoDetailTemplate(restaurant);

    const category = document.querySelector('.category');
    const drink = document.querySelector('.drink');
    const food = document.querySelector('.food');
    const review = document.querySelector('.review');
    const divCategory = document.createElement('div');
    const divDrink = document.createElement('div');
    const divFood = document.createElement('div');
    const divReview = document.createElement('div');
    restaurant.categories.forEach((item) => {
      divCategory.innerHTML += `
        ${item.name}
      `;
    });
    restaurant.menus.drinks.forEach((item) => {
      divDrink.innerHTML += `
        <ul><li>${item.name}</li></ul>
      `;
    });
    restaurant.menus.foods.forEach((item) => {
      divFood.innerHTML += `
      <ul><li>${item.name}</li></ul>
      `;
    });
    restaurant.customerReviews.forEach((item) => {
      divReview.innerHTML += `
        <div class="card">
        <div class="user">
        <div>${item.name}</div>
        <div>${item.date}</div>
        </div>
        <div class="content">
        <div>${item.review}</div>
        </div>
        </div>
      `;
    });

    category.appendChild(divCategory);
    drink.appendChild(divDrink);
    food.appendChild(divFood);
    review.appendChild(divReview);

    const likeButtonContainer = document.getElementById('likeButtonContainer');
    likeButtonContainer.innerHTML += createLikeButtonTemplate();
    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        address: restaurant.address,
        rating: restaurant.rating,
        description: restaurant.description,
        menus: {
          drinks: restaurant.menus.drinks,
          foods: restaurant.menus.foods,
        },
        categories: restaurant.categories,
        customerReviews: restaurant.customerReviews,
        pictureId: restaurant.pictureId,
      },
    });

    const newReview = document.getElementById('newReview');
    newReview.addEventListener('click', async (event) => {
      event.preventDefault();
      const { id } = url;
      const name = prompt('Please enter your name:', 'Enter your name');
      const reviews = prompt('What is your review?', 'Enter your review');
      const data = await this.postData(id, name, reviews);
      if (data.status === 200) {
        this.afterRender();
        alert('Berhasil menambahkan review restaurant');
      }
    });
  },
};

export default Detail;
