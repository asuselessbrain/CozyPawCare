import { use } from "react";
import { AuthContext } from "../proviider/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {

    const { user } = use(AuthContext)
    const location = useLocation()

    if (user) {
        return children
    }
    return <Navigate to="/login" state={location.pathname} replace />;
};

export default PrivateRoute;