import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="name-resto">${restaurant.name}</h2>
<div class="card-img-detail">
    <img crossorigin="anonymous" src=${CONFIG.BASE_IMAGE_URL + restaurant.pictureId} alt=${restaurant.name} />
</div>
<div class="city-rating">
    <div class="city">
        <p><span><i class="fa-solid fa-location-dot"></i></span>  ${restaurant.city}</p>
    </div>
    <div class="rating">
        <p><span><i class="fa-solid fa-star"></i></span> ${restaurant.rating}</p>
    </div>
</div>
<div class="overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
</div>
<div class="menu">
    <h3>Information & Menu</h3>
    <h2><i class="fa-solid fa-wine-glass"></i> Drinks</h2>
    <div class="list">
        ${restaurant.menus.drinks.map((drink) => `
        <div class="drink">
            <p>${drink.name}</p>
        </div>
        `).join('')}
    </div>
    <h2><span><i class="fa-solid fa-utensils"></i></span> Foods</h2>
    <div class="list">
        ${restaurant.menus.foods.map((food) => `
        <div class="food">
            <p>${food.name}</p>
        </div>
        `).join('')}
    </div>
    <div class="review">
        <h2><span><i class="fa-solid fa-pen"></i></span> Review</h2>
        ${restaurant.customerReviews.map((review) => `
        <div tabindex="0" class="review-item">
            <p class="name-review">${review.name}</p>
            <i>
                <p class="date-review">${review.date}</p>
            </i>
            <div class="body-review">${review.review}</div>
        </div>
        `).join('')}
    </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="resto-item" tabindex="0">
    <div class="card">
        <div class="card-img">
            <img crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
        </div>
        <div class="body">
            <h3 class="title">
                <a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a>
            </h3>
            <div class="rating">
                <p><span><i class="fa-solid fa-star"></i></span>  ${restaurant.rating}</p>
                <h4 class="text-city"><span><i class="fa-solid fa-location-dot"></i></span> ${restaurant.city}</h4>
                <div></div>
            </div>
            <p class="description">${restaurant.description}</p>
        </div>
    </div>
</div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="like this restaurant" id="favorite-button" class="favorite-button">
  <i class="fa-regular fa-heart"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="favorite-button" class="favorite-button">
  <i class="fa-solid fa-heart"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
