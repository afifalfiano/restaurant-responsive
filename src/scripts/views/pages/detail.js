import API_ENDPOINT from '../../globals/api-endpoint';

const Detail = {

  async render() {
    return `
          <div style="padding: 10em;">
          <h1>
              Detail Page
              <div class="detail-content"><div>
          </h1>
          </div>
          `;
  },
  async fetchRestoDetail() {
    const id = window.location.hash.split('/');
    const detailResto = await fetch(API_ENDPOINT.detail(id[id.length - 1]));
    const data = detailResto.json();
    return data;
  },

  async afterRender() {
    const {restaurant} = await this.fetchRestoDetail();
    console.log(restaurant, 'data');
    const menuRestoList = document.querySelector('.detail-content');
    menuRestoList.innerHTML += `
    <div>
    <img src=${restaurant.pictureId}/>
    </div>
    <div>
      <p>Alamat: ${restaurant.address}</p>
    </div>
    <div class="category">
      <p>Kategori Menu: </p>
    </div>
    <div class="food">
    <p>Menu Makan: </p>
    </div>
    <div class="drink">
      <p>Menu Minuman: </p>
    </div>
    <div>
      <p>Rating: ${restaurant.rating}</p>
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
        ${item.name}
      `;
    });
    restaurant.menus.foods.forEach((item) => {
      divFood.innerHTML += `
        ${item.name}
      `;
    });
    restaurant.customerReviews.forEach((item) => {
      divReview.innerHTML += `
        ${item.name} - ${item.date}
        Review: ${item.review}
      `;
    });


    category.appendChild(divCategory);
    drink.appendChild(divDrink);
    food.appendChild(divFood);
    review.appendChild(divReview);

  },
};

export default Detail;
