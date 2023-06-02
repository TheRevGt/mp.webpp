import React from "react";
import Navbar from "../Navbar"
import { Outlet } from "react-router-dom";
const Layout = ({ title }) => {
    return (
       <div className="w-screen h-screen">
        <Navbar title="Fiscalias"/>
        <Outlet/>
       </div> 
    );
}
export default Layout;