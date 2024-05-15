import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import ProductPage from "./pages/ProductPage"
import Shop from "./pages/Shop"
import { CART_ROUTE, DEVICE_ROUTE, ORDER_ROUTE, SHOP_ROUTE } from "./utils/const"


export const authRoutes = [
    {
        path: CART_ROUTE,
        Component: Cart
    },
    {
        path: ORDER_ROUTE,
        Component: Orders
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: ProductPage
    },
]