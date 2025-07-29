import React from "react";
import { PenLine, ArrowRight, FileText, CloudUpload } from "lucide-react";

export default function DashboardCards() {
  const cards = [
    { title: "Pending signature", value: 12, dotColor: "bg-yellow-400" },
    { title: "Pending your signature", value: 11, dotColor: "bg-yellow-400" },
    { title: "Draft", value: 24, dotColor: "bg-gray-500" },
    { title: "Signed", value: 126, dotColor: "bg-green-500" },
  ];

  return (
    <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white p-5 rounded-lg border shadow-sm flex flex-col"
        >
          <p className="text-base font-semibold mb-1">{card.value}</p>
          <div className="flex items-center text-xs text-gray-600">
            <span className={` w-2 h-2 mr-2 rounded-full ${card.dotColor}`}></span>
            {card.title}
          </div>
        </div>
      ))}

      <div  className="col-span-full md:col-span-2 bg-white border-2  border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
        <CloudUpload className=" mb-4" size={30} />
        <p className="text-sm text-gray-600 mb-4">Drop documents to get signed here</p>
        <button className="bg-black text-white px-4 py-2 rounded text-sm">Upload</button>
      </div>

      <div className="group bg-white relative flex flex-col justify-between border rounded-xl shadow-sm p-5  hover:shadow-md transition">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        
        <div>
          <PenLine className="text-gray-700 mb-4" />
          <h2 className="text-lg mb-1">Sign an agreement</h2>
          <p className="text-sm text-gray-500">Upload a file you need to sign.</p>
        </div>
        <button className="self-end mt-4 bg-black text-white rounded-full p-1.5">
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="group bg-white relative flex flex-col justify-between border rounded-xl shadow-sm p-5  hover:shadow-md transition">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        
        <div>
          <FileText className="text-gray-700 mb-4" />
          <h2 className="text-lg mb-1">Use a template</h2>
          <p className="text-sm text-gray-500">Use a template you have already created.</p>
        </div>
        <button className="self-end mt-4 bg-black text-white rounded-full p-1.5">
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
