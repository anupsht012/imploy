import React from "react";

export default function OverviewBar() {
  return (
    <div className="flex px-6 pt-4 gap-6">
      {/* Vertical Menu */}
      <div className="flex flex-col space-y-4 text-sm text-gray-600 min-w-[150px]">
        <button className="text-black font-medium  pl-2">Overview</button>
        <button className="hover:text-black pl-2">Templates</button>
        <button className="hover:text-black pl-2">Documents</button>
        <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800">
          Sign
        </button>
      </div>

      
    </div>
  );
}
