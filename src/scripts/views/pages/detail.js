import API_ENDPOINT from '../../globals/api-endpoint';

const Detail = {

  async render() {
    return `
          <div class="breadcrumb">
          <p>
              Detail Page
          </p>
          </div>
          <div class="detail-content"><div>
          `;
  },
  async fetchRestoDetail() {
    const id = window.location.hash.split('/');
    const detailResto = await fetch(API_ENDPOINT.detail(id[id.length - 1]));
    const data = detailResto.json();
    return data;
  },

  async afterRender() {
    const { restaurant } = await this.fetchRestoDetail();
    console.log(restaurant, 'data');
    const menuRestoList = document.querySelector('.detail-content');
    menuRestoList.innerHTML += `
    <div class="image-restaurant">
    <p>${restaurant.name}</p>
    <span>${restaurant.address}</span> 
    <div>
    <div class="rating">Rating: ${restaurant.rating}</div>
    <img src='https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}' alt="${restaurant.name}" width="100%"/>
    </div>
    </div>

    <div class="menus">
    <div class="category">
      <p>Kategori Menu: </p>
    </div>

    <div class="menus-resto">
    <div class="food">
    <p>Menu Makan: </p>
    </div>
    
    <div class="drink">
      <p>Menu Minuman: </p>
    </div>
    </div>
    </div>

    <div class="review">
      <p>Customer Reviews:</p>
    </div>

    `;
    const category = document.querySelector('.category');
    const drink = document.querySelector('.drink');
    const food = document.querySelector('.food');
    const review = document.querySelector('.review');
    // eslint-disable-next-line no-multi-assign
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
  },
};

export default Detail;
