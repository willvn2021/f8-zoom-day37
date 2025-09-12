import { Outlet } from "react-router";
import Header from "./components/Header";

function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default DefaultLayout;
