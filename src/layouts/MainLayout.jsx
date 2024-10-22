import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../pages/global/Sidebar";
import Topbar from "../pages/global/Topbar";

const MainLayout = () => {
  return (
    <div className="flex max-h-full">
     {/* {<SideBar />} */} 

      <div className="flex flex-col flex-1">
        <Topbar />

        <div className="flex-1  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
