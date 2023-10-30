import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurant() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  async searchRestaurant(query) {
    return (await this.getAllRestaurant()).filter((resto) => {
      const loweredCaseRestoTitle = (resto.title || '-').toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },

};

export default FavoriteRestaurantIdb;
