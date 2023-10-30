import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (resto) => {
      await FavoriteRestaurantIdb.deleteRestaurant(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
