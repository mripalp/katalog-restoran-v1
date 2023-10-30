import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createFavoriteButtonInitiatorWithResto = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoriteButtonInitiatorWithResto };
