import React from 'react';
import Sidebar from './components/sidebar';
import DashboardCards from './DashboardCard';
import OverviewBar from './components/OverviewBar';
import Navbar from './components/navbar';

export const HomePage = () => {
    return (
        <div className="flex h-screen overflow-hidden font-inter bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0">
          <Navbar />
          <main className=" flex p-6">
          <OverviewBar />
            <DashboardCards />
          </main>
        </div>
      </div>
    );
};
