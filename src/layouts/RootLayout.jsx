import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <Outlet />
            <h2>Footer</h2>
        </div>
    );
};

export default RootLayout;