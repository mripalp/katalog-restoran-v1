import Swal from 'sweetalert2/dist/sweetalert2.all.min';
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
            <div id="resto-item-detail" class="resto-item-detail"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#resto-item-detail');
      const likeButtonContainer = document.querySelector('#likeButtonContainer');

      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      FavoriteButtonInitiator.init({
        likeButtonContainer,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
        },
      });
    } catch (error) {
      Swal.fire({
        title: 'Data halaman belum tersedia',
        text: 'Silahkan reload halaman!',
        icon: 'error',
        confirmButtonText: 'Reload',
      }).then((result) => {
        if (result.isConfirmed) {
          if (!navigator.onLine) {
            Swal.fire({
              title: 'Koneksi Terputus',
              text: 'Silahkan hubungkan dengan internet',
              icon: 'warning',
              confirmButtonText: 'Reload',
            }).then((resultConnection) => {
              if (resultConnection.isConfirmed) {
                location.reload();
              }
            });
          } else {
            location.reload();
          }
        }
      });
    }
  },
};

export default Detail;
