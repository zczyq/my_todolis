import Login from "@/pages/login";
import Home from "@/pages/home/index";
import Register from "@/pages/register/index";
import SearchShop from "@/pages/searchShop";
const routes = [
    {
        path:'home',
        element:<Home/>
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/searchShop',
        element:<SearchShop/>
    },
    {
        path:'/',
        element:<Home/>
    },
]
export default routes