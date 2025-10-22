import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;