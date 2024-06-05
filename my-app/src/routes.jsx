import Auth from "./pages/Auth"
import Cart from "./pages/cart/Cart"
import Category from "./pages/category/Category"
import ChangePassword from "./pages/changePassword/ChangePassword"
import Login from "./pages/login/Login"
import Orders from "./pages/order/Orders"
import OrderDecoration from "./pages/orderDecoration/OrderDecoration"
import ProductPage from "./pages/productPage/ProductPage"
import Profile from "./pages/profile/Profile"
import RecoveryPassword from "./pages/recoveryPassword/RecoveryPassword"
import Shop from "./pages/Shop"
import { CART_ROUTE, CATEGORY_ROUTE, CHANGE_PASSWORD_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, ORDER_FORM_ROUTE, ORDER_ROUTE, RECOVERY_PASSWORD_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/const"


export const authRoutes = [
    {
        path: CART_ROUTE,
        Component: Cart
    },
    {
        path: ORDER_ROUTE,
        Component: Orders
    },
    {
        path: LOGIN_ROUTE,
        Component: Profile
    },
    {
        path: CHANGE_PASSWORD_ROUTE,
        Component: ChangePassword
    },   
    {
        path: ORDER_FORM_ROUTE,
        Component: OrderDecoration
    }, 
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: CATEGORY_ROUTE + '/:productId',
        Component: ProductPage
    },
    {
        path: CATEGORY_ROUTE,
        Component: Category
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: RECOVERY_PASSWORD_ROUTE,
        Component: RecoveryPassword
    },     
]