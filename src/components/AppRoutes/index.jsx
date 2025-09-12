// import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HashRouter, Routes, Route } from "react-router";

// Pages
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";

// Layouts
import DefaultLayout from "../../layouts/DefaultLayout";
import ModalDemo from "../../pages/ModalDemo";
import ScrollDemo from "../../pages/ScrollDemo";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/ModalDemo" element={<ModalDemo />} />
                    <Route path="/ScrollDemo" element={<ScrollDemo />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
