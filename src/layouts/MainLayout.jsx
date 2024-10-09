import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../pages/global/Sidebar';
import Topbar from '../pages/global/Topbar';

const MainLayout = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="flex h-screen">
      {isSidebar && <SideBar />}

      <div className="flex flex-col flex-1">
        <Topbar />

        <div className="flex-1 bg-gray-100 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
