import BookmarkPage from "../pages/bookmark.jsx";
import HomePage from "../pages/home.jsx";
import SearchPage from "../pages/search.jsx";
import AboutPage from "../pages/about.jsx";
import PopularPage from "../pages/popular.jsx";
import CategoriesPage from "../pages/categories.jsx";
import CategoryPage from "../pages/singlecategory.jsx";
import SettingsPage from "../pages/settings.jsx";
import AboutMorePage from "../pages/aboutmore.jsx";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "/bookmarks",
    component: BookmarkPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/popular",
    component: PopularPage,
  },
  {
    path: "/categories",
    component: CategoriesPage,
  },
  {
    path: "/category/:id",
    component: CategoryPage,
  },
  {
    path: "/settings",
    component: SettingsPage,
  },
  {
    path: "/about-more",
    component: AboutMorePage,
  },
];

export default routes;
