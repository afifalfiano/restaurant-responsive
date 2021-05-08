import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const dataDummy = require('../DATA.json');

// Home Page
function renderData(data = dataDummy) {
    let menuRestoList = document.querySelector('.menu_resto__list');
    let notFound = document.getElementById('notfound');
    console.log(data, 'dat');
    if (data.restaurants.length == 0) {
        let element = document.createElement('div');
        element.innerHTML += `
        <div class="not-found">
            <p>Restaurant Not Found...</p>
        </div>
        `;
        notFound.appendChild(element);
    } else {
        data.restaurants.forEach(item => {
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
                            <p tabIndex="0">${item.description.slice(0, 105) + ' ...'}</p>
                        </div>
            </div>
            `;
        });
    }
}

function onClickRestaurant() {
    let restaurant = document.getElementById('click_restaurant');
    restaurant.addEventListener('click', function () {
        let restaurantTop = document.getElementById('restaurant').offsetTop;
        let restaurantLeft = document.getElementById('restaurant').offsetLeft;
        console.log(restaurantTop);
        window.location.hash = 'restaurant';
        window.scroll({ behavior: 'smooth', left: 0, top: 600 });
    });
}

function onClickHome() {
    let home = document.getElementById('click_home');
    home.addEventListener('click', function () {
        window.location.hash = 'home';
        window.scroll({ behavior: 'smooth', left: 0, top: 0 });
    });
}

function openClosedHamburger() {
    const hamburgerButtonElement = document.querySelector("#hamburger");
    const drawerElement = document.querySelector("#drawer");
    const sectionElement = document.querySelector("section");

    hamburgerButtonElement.addEventListener("click", event => {
        console.log('gtest');
        drawerElement.classList.toggle("open");
        event.stopPropagation();
    });


    sectionElement.addEventListener("click", event => {
        drawerElement.classList.remove("open");
        event.stopPropagation();
    })
}

renderData(dataDummy);
onClickRestaurant();
onClickHome();
openClosedHamburger();
