const Home = {

  async render() {
    return `
      <section>
          <div class="hero">
              <img src="../images/heros/hero-image_2-min.jpg" alt="Hero Images 2">
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
  async afterRender() {
    const data = require('../../data/DATA.json');
    const url = 'https://restaurant-api.dicoding.dev/';
    fetch(url + 'list', { method: 'GET', headers: { 'X-Auth-Token': '12345' } }).then((response) => {
      console.log(response);
      return response.json();
    }).catch((err) => {
      console.error(err);
    })
    const menuRestoList = document.querySelector('.menu_resto__list');
    const notFound = document.getElementById('notfound');
    if (data.restaurants.length === 0) {
      const element = document.createElement('div');
      element.innerHTML += `
          <div class="not-found">
              <p>Restaurant Not Found...</p>
          </div>
          `;
      notFound.appendChild(element);
    } else {
      data.restaurants.forEach((item) => {
        menuRestoList.innerHTML += `
              <div class="menu_resto__card" id="${item.id}">
                          <div class="menu_resto_list__image" tabIndex="0">
                              <img src="${item.pictureId}" alt="image ${item.name}">
                          </div>
                          <div class="menu_resto_list__city" tabIndex="0">
                              Kota, ${item.city}
                          </div>
                          <div class="menu_resto_list__content">
                              <p tabIndex="0">Rating: ${item.rating}</p>
                              <a  href="/#/detail/${item.id}" tabIndex="0">${item.name}</a>
                              <p tabIndex="0">${`${item.description.slice(0, 105)} ...`}</p>
                          </div>
              </div>
              `;
      });
    }
  },
};

export default Home;
