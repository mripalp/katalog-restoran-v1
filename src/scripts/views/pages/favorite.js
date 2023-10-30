import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2><span class="title-content">Your Favorite</span></h2>
      <div id="resto-list" class="resto-list">
      </div>
      <div class="no-favorite-container">
        <p id="no-favorite-message" class="resto-item__not__found"></p>
      </div>
    </div>
  `;
  },

  async afterRender() {
    const noFavoriteMessage = document.querySelector('#no-favorite-message');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#resto-list');

    if (restaurants.length === 0) {
      noFavoriteMessage.textContent = 'Favorite Resto kosong. Tambahkan sekarang!';
    } else {
      noFavoriteMessage.style.display = 'none';

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
