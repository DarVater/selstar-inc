import {ADMIN_ROUTE,LENDING_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import Admin from "../pages/Admin/Admin";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import Landing from "../pages/Landing/Landing";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: LOGIN_ROUTE,
        Component: AdminLogin
    },
    {
        path: LENDING_ROUTE,
        Component: Landing
    }
]

export const publicRoutes = [
    {
        path: LENDING_ROUTE,
        Component: Landing
    },
    {
        path: LOGIN_ROUTE,
        Component: AdminLogin
    },
    {
        path: ADMIN_ROUTE,
        Component: AdminLogin
    },

]
