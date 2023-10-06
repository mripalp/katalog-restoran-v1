import Swal from 'sweetalert2/dist/sweetalert2.all.min';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
        <h2><span class="title-content">Explore Restaurant</span></h2>
        <div class="resto-list" id="resto-list">
        </div>
    </section>
    `;
  },

  async afterRender() {
    try {
      const RestoList = await RestaurantDbSource.listRestaurant();
      const RestoListContainer = document.querySelector('#resto-list');
      RestoList.forEach((restaurant) => {
        RestoListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
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
      }
    }
  },
};

export default Home;
