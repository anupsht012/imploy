// components/Topbar.jsx
import React from "react";
import { Search, HelpCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex  px-6 py-4 border-b bg-white">
      <div className="flex w-full justify-between items-center space-x-6 text-gray-600 text-sm">
        <div className="text-lg">esign</div>
        <div className="flex justify-between items-center space-x-4">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
          <Search className="w-4 h-4" />
          <span>Search</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
          <HelpCircle className="w-4 h-4" />
          <span>Help</span>
        </div>
        </div>
       
      </div>
    </header>
  );
}
