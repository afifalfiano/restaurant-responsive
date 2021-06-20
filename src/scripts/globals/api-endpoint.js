import Config from './config';

const API_ENDPOINT = {
  list: `${Config.URL}list`,
  detail: (id) => `${Config.URL}/detail/${id}`,
  search: (search) => `${Config.URL}/search?q=${search}`,
  review: `${Config.URL}/review`,
};

export default API_ENDPOINT;
