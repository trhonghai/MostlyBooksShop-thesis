import config from "../config";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageProducts from "../pages/Admin/ManageProducts";
import ManageCategories from "../pages/Admin/ManageCategories";
import AdminLayout from "../layout/AdminLayout/AdminLayout";

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

export { privateRoutes };
