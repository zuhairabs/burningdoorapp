import BookmarkPage from "../pages/bookmark.jsx";
import HomePage from "../pages/home.jsx";
import SearchPage from "../pages/search.jsx";
import AboutPage from "../pages/about.jsx";
import PopularPage from "../pages/popular.jsx";
import CategoriesPage from "../pages/categories.jsx";
import CategoryPage from "../pages/singlecategory.jsx";
import SettingsPage from "../pages/settings.jsx";
import AboutMorePage from "../pages/aboutmore.jsx";
import SingleBlogPage from "../pages/singleblog.jsx";
import BlogDetailsPage from "../pages/blogdetails.jsx";
import KitabPage from "../pages/kitab.jsx";
import KitabSinglePage from "../pages/kitabsingle.jsx";

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
    path: "/about-more",
    component: AboutMorePage,
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
    path: "/blog/:id",
    component: SingleBlogPage,
  },
  {
    path: "/blog/details/:id",
    component: BlogDetailsPage,
  },
  {
    path: "/kitab",
    component: KitabPage,
  },
  {
    path: "/kitab/:id",
    component: KitabSinglePage,
  },
  {
    path: "/settings",
    component: SettingsPage,
  },
];

export default routes;
