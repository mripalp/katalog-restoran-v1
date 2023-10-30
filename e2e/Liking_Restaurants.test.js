const assert = require('assert');
// eslint-disable-next-line no-unused-vars
const { async } = require('regenerator-runtime');

Feature('(Un)Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Favorite Resto kosong. Tambahkan sekarang!', '.resto-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Favorite Resto kosong. Tambahkan sekarang!', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto-title a');

  const firstResto = locate('.resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestoTitle = await I.grabTextFrom('.resto-title a');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unliking one resto', async ({ I }) => {
  I.see('Favorite Resto kosong. Tambahkan sekarang!', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto-title a');

  const firstResto = locate('.resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item a');
  const firstLikedResto = locate('.resto-title a').first();
  const firstLikedRestoTitle = await I.grabTextFrom(firstLikedResto);

  assert.strictEqual(firstRestoTitle, firstLikedRestoTitle);

  I.click(firstLikedResto);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.see('Favorite Resto kosong. Tambahkan sekarang!', '.resto-item__not__found');
});
