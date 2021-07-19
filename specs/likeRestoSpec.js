import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import RestoDatabase from '../src/scripts/utils/resto-idb';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 's1knt6za9kkfw1e867',
      },
    });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 's1knt6za9kkfw1e867',
      },
    });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 's1knt6za9kkfw1e867',
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await RestoDatabase.getResto('s1knt6za9kkfw1e867');

    expect(resto).toEqual({ id: 's1knt6za9kkfw1e867' });

    RestoDatabase.deleteResto('s1knt6za9kkfw1e867');
  });

  it('should not add a resto again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 's1knt6za9kkfw1e867',
      },
    });

    await RestoDatabase.putResto({ id: 's1knt6za9kkfw1e867' });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await RestoDatabase.getAllResto()).toEqual([{ id: 's1knt6za9kkfw1e867' }]);

    RestoDatabase.deleteResto('s1knt6za9kkfw1e867');
  });

  // menggunakan metode xit, bukan it
  xit('should not add a resto when it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {},
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await RestoDatabase.getAllResto()).toEqual([]);
  });
});
