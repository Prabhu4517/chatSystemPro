import Auth from "pages/auth/index";
import Dashboard from "pages/dashboard/index";
import Redirect from "components/redirect";
import Login from "pages/auth/login";
import Register from "pages/auth/register";
import Home from "pages/dashboard/home";
import { auth_path, dashboard_path, login, register } from "./appUrls";

export const appComponents = [
    {
        index: true,
        path: `${auth_path}/*`,
        element: <Auth />,
    },
    {
        index: false,
        path: `${dashboard_path}/*`,
        element: <Dashboard />,
    },
    {
        index: false,
        path: "/*",
        element: <Redirect />,
    }
];

export const authComponents = [
    {
        index: true,
        path: login,
        element: <Login />,
    },
    {
        index: false,
        path: register,
        element: <Register />,
    },
    {
        index: false,
        path: "/*",
        element: <Redirect />,
    }
];

export const dashboardComponents = [
    {
        index: true,
        path: "/",
        element: <Home />,
    },
    {
        index: false,
        path: "/*",
        element: <Redirect />,
    }
];
