import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function Main () {

    const [displayPopUp, setDisplayPopUp] = useState(false)

    return (
        <>
        <Header displayPopUp={displayPopUp}/>
        <Outlet context={{displayPopUp, setDisplayPopUp}}/>
        <Footer displayPopUp={displayPopUp}/>
        </>
    )
}