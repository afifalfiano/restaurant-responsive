import Detail from '../views/pages/detail';
import Favorit from '../views/pages/favorit';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorit': Favorit,
};

export default routes;
