import Cart from "./pages/Cart"
import Category from "./pages/category/Category"
import Orders from "./pages/Orders"
import ProductPage from "./pages/productPage/ProductPage"
import Shop from "./pages/Shop"
import { CART_ROUTE, CATEGORY_ROUTE, DEVICE_ROUTE, ORDER_ROUTE, SHOP_ROUTE } from "./utils/const"


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
        path: CATEGORY_ROUTE + '/:itemId',
        Component: ProductPage
    },
    {
        path: CATEGORY_ROUTE,
        Component: Category
    },
]