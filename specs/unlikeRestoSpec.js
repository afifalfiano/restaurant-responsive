import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import RestoDatabase from '../src/scripts/utils/resto-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Resto', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await RestoDatabase.putResto({ id: 's1knt6za9kkfw1e867' });
  });

  afterEach(async () => {
    await RestoDatabase.deleteResto('s1knt6za9kkfw1e867');
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 's1knt6za9kkfw1e867',
      },
    });

    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 's1knt6za9kkfw1e867',
      },
    });

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 's1knt6za9kkfw1e867',
      },
    });

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await RestoDatabase.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 's1knt6za9kkfw1e867',
      },
    });

    // hapus dulu film dari daftar film yang disukai
    await RestoDatabase.deleteResto('s1knt6za9kkfw1e867');

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await RestoDatabase.getAllResto()).toEqual([]);
  });
});
