import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
    return (
        <BrowserRouter basename="/nordstarcompany">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route
                    path="/terms-and-conditions"
                    element={<TermsAndConditions />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
