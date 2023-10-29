import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-resto-search-presenter';
import FavoriteRestoView from '../src/scripts/views/pages/liked-restaurants/favorite-resto-search-view';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurant = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;

    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    view = new FavoriteRestoView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = {
      getAllRestaurant: jest.fn(),
      searchRestaurant: jest.fn(),
    };

    presenter = new FavoriteRestoSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurant('resto a');

      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('should ask the model to search for liked restaurants', () => {
      searchRestaurant('resto a');

      expect(favoriteRestaurants.searchRestaurant).toHaveBeenCalledWith('resto a');
    });

    it('should show the found restaurants', () => {
      presenter._showFoundResto([{ id: 1 }]);
      expect(document.querySelectorAll('.resto-item').length).toEqual(1);

      presenter._showFoundResto([{ id: 1, name: 'Satu' }, { id: 2, name: 'Dua' }]);
      expect(document.querySelectorAll('.resto-item').length).toEqual(2);
    });

    it('should show the title of the found restaurants', () => {
      presenter._showFoundResto([{ id: 1, name: 'Satu' }]);
      expect(document.querySelectorAll('.resto-title a').item(0).textContent).toEqual('Satu');
    });

    it('should show - for found restaurant without title', () => {
      presenter._showFoundResto([{ id: 1 }]);

      expect(document.querySelectorAll('.resto-title a').item(0).textContent).toEqual('-');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurant(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurant('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurant('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurant('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurant('    ');

      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('resto-list').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);

        done();
      });

      favoriteRestaurants.searchRestaurant.mockImplementation(() => []);

      searchRestaurant('resto a');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('resto-list').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(0);

        done();
      });

      favoriteRestaurants.searchRestaurant.mockImplementation(() => []);

      searchRestaurant('resto a');
    });
  });
});
