Feature('Liking Resto');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', (I) => {
  I.seeElement('.menu_resto');
  I.see('Tidak ada daftar favorit restaurant', '.menu_resto__list p');
});

Scenario('liking one movie', (I) => {
  I.see('Tidak ada daftar favorit restaurant', '.menu_resto__list p');

  I.amOnPage('/');

  I.seeElement('.menu_resto_list__content a');
  I.click(locate('.menu_resto_list__content a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.menu_resto__card');
});

Scenario('unliking one movie', (I) => {
  I.see('Tidak ada daftar favorit restaurant', '.menu_resto__list p');

  I.amOnPage('/');

  I.seeElement('.menu_resto_list__content a');
  I.click(locate('.menu_resto_list__content a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.acceptPopup();

  I.amOnPage('/#/favorite');
  I.seeElement('.menu_resto__card');

  I.seeElement('.menu_resto_list__content a');
  I.click(locate('.menu_resto_list__content a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.acceptPopup();

  I.amOnPage('/#/favorite');
  I.see('Tidak ada daftar favorit restaurant', '.menu_resto__list p');
});
