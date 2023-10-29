const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return the resto that has been added', async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });

    expect(await favoriteResto.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteResto.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteResto.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a resto from being added if it does not have the correct property', async () => {
    favoriteResto.putRestaurant({ aProperty: 'property' });

    expect(await favoriteResto.getAllRestaurant()).toEqual([]);
  });

  it('can return all of the resto that have been added', async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });

    expect(await favoriteResto.getAllRestaurant()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite resto', async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });
    favoriteResto.putRestaurant({ id: 3 });

    await favoriteResto.deleteRestaurant(1);

    expect(await favoriteResto.getAllRestaurant()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a resto even though the resto has not been added', async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });
    favoriteResto.putRestaurant({ id: 3 });

    await favoriteResto.deleteRestaurant(4);

    expect(await favoriteResto.getAllRestaurant()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it('should be able to search for restaurants', async () => {
    favoriteResto.putRestaurant({ id: 1, title: 'resto a' });
    favoriteResto.putRestaurant({ id: 2, title: 'resto b' });
    favoriteResto.putRestaurant({ id: 3, title: 'resto abc' });
    favoriteResto.putRestaurant({ id: 4, title: 'ini mah resto abcd' });

    expect(await favoriteResto.searchRestaurant('resto a')).toEqual([
      { id: 1, title: 'resto a' },
      { id: 3, title: 'resto abc' },
      { id: 4, title: 'ini mah resto abcd' },
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestoModel };
