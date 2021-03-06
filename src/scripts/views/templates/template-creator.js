const createRestoDetailTemplate = (item) => `
<div class="image-restaurant">
<p>${item.name}</p>
<span>${item.address} - ${item.city}</span> 
<div>
<div class="rating">Rating: ${item.rating}</div>
<picture>
<source media="(max-width: 600px)" data-srcset="https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}">
<img class="lazyload" data-src='https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}' alt="${item.name}" width="100%"/>
</picture>
</div>
</div>

<div class="desc">
<h2>Tentang Restaurant</h2>
<p>${item.description}</p>
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
  <button id="newReview">Tambah Review</button>
</div>
`;

const createRestoItemTemplate = (item) => `
<div class="menu_resto__card" id="${item.id}">
                          <div class="menu_resto_list__image" tabIndex="0">
                          <picture>
                              <source media="(max-width: 600px)" data-srcset="https://restaurant-api.dicoding.dev/images/small/${item.pictureId}">
                              <img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${item.pictureId}" alt="image ${item.name}">
                          </picture>
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

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
