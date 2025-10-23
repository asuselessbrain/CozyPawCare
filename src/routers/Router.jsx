import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "../layouts/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: "/registration",
                Component: Registration
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <MyProfile />
                </PrivateRoute>
            }
        ]
    }
])

export default router;