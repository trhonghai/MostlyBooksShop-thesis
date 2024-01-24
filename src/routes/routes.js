import config from "../config";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageProducts from "../pages/Admin/ManageProducts";
import ManageCategories from "../pages/Admin/ManageCategories";
import AdminLayout from "../layout/AdminLayout/AdminLayout";
import Home from "~/pages/Home";
import Login from "~/pages/Login/Login";
import DefaultLayout from "~/layout/DefaultLayout";
import Register from "~/pages/Register";

const privateRoutes = [
  { path: config.routes.users, component: ManageUsers, layout: AdminLayout },
  {
    path: config.routes.categories,
    component: ManageCategories,
    layout: AdminLayout,
  },
  {
    path: config.routes.products,
    component: ManageProducts,
    layout: AdminLayout,
  },
];

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
  { path: config.routes.login, component: Login, layout: DefaultLayout },
  { path: config.routes.register, component: Register, layout: DefaultLayout },
];

export { privateRoutes, publicRoutes };
