import React from 'react';
import Sidebar from './components/sidebar';
import DashboardCards from './DashboardCard';
import OverviewBar from './components/OverviewBar';
import Navbar from './components/navbar';

export const HomePage = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className=" flex p-6">
          <OverviewBar />
            <DashboardCards />
          </main>
        </div>
      </div>
    );
};
