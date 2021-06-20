const Home = {

  async render() {
    return `
        <div id="restaurant" class="menu_resto">
            <h2 class="menu_resto__title">Explore Restaurant</h2>
            <div id="list" class="menu_resto__list"></div>
            <div id="notfound"></div>
        </div>
        `;
  },
  async afterRender() {
    const data = require('../../data/DATA.json');
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
                              <p tabIndex="0">${item.name}</p>
                              <p tabIndex="0">${`${item.description.slice(0, 105)} ...`}</p>
                          </div>
              </div>
              `;
      });
    }
  },
};

export default Home;
