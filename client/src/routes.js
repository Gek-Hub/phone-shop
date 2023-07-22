import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";

export const publicRoutes = [
  {
    id: 1,
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    id: 2,
    path: DEVICE_ROUTE,
    Component: DevicePage,
  },
  {
    id: 3,
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    id: 4,
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
export const authRoutes = [
  {
    id: 1,
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    id: 2,
    path: BASKET_ROUTE,
    Component: Basket,
  },
];
