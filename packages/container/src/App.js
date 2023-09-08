import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

export default () => {
    // small change for a push...
    return (
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
    );
};