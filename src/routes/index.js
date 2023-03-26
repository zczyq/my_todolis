import Login from "@/pages/login";
import Home from "@/pages/home/index";
import Register from "@/pages/register/index";
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
        path:'/',
        element:<Home/>
    },
]
export default routes