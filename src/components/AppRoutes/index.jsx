// import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HashRouter, Routes, Route } from "react-router";

// Layouts
import DefaultLayout from "../../layouts/DefaultLayout";

// Pages
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import PerformanceDemo from "../../pages/PerformanceDemo";
import ModalDemo from "../../pages/ModalDemo";
import ScrollDemo from "../../pages/ScrollDemo";
import FocusDemo from "../../pages/FocusDemo";
import HOCDemo from "../../pages/HOCDemo";
import RenderPropsDemo from "../../pages/RenderPropsDemo";
import CustomHooksDemo from "../../pages/CustomHooksDemo";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/ModalDemo" element={<ModalDemo />} />
                    <Route path="/ScrollDemo" element={<ScrollDemo />} />
                    <Route
                        path="/PerformanceDemo"
                        element={<PerformanceDemo />}
                    />
                    <Route path="/FocusDemo" element={<FocusDemo />} />
                    <Route path="/HOCDemo" element={<HOCDemo />} />
                    <Route
                        path="/RenderPropsDemo"
                        element={<RenderPropsDemo />}
                    />
                    <Route
                        path="/CustomHooksDemo"
                        element={<CustomHooksDemo />}
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
