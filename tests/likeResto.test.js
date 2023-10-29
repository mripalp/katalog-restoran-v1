import FavoriteRestoIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithResto({ id: 1 });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const resto = await FavoriteRestoIdb.getRestaurant(1);
    expect(resto).toEqual({ id: 1 });

    await FavoriteRestoIdb.deleteRestaurant(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithResto({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoIdb.putRestaurant({ id: 1 });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    // Tidak ada film yang ganda
    expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    await FavoriteRestoIdb.deleteRestaurant(1);
  });

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithResto({});

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([]);
  });
});
