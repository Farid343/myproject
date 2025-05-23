import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Catalogs from "../pages/catalogs/Catalogs";
import Contact from "../pages/contact/Contact";
import Dashboard from "../components/dashboard/Dashboard";
import Basket from "../pages/basket/Basket";
import NotFound from "../pages/notfound/NotFound";
import Layout from "../components/layout/Layout";
import Wish from "../pages/wishlist/Wish";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            { path:'/', element: <Home/> },
            { path:'/shop', element: <Shop/>},
            { path:'/catalogs', element:<Catalogs/> },
            { path:'/contact', element:<Contact/>},
            { path:'/dashboard',element:<Dashboard/>},
            { path:'/basket', element: <Basket/>},
            { path:'/wish', element:<Wish/>}
        ]
    },
    {
        path:'*', element: <NotFound/>
    }

])


export default router