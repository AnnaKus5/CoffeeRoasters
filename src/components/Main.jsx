import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function Main() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}