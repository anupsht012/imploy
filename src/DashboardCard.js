import React from "react";
import { FileSignature, FilePlus } from "lucide-react";

export default function DashboardCards() {
  const cards = [
    { title: "Pending signature", value: 12, dotColor: "bg-yellow-400" },
    { title: "Pending your signature", value: 11, dotColor: "bg-yellow-400" },
    { title: "Draft", value: 24, dotColor: "bg-purple-500" },
    { title: "Signed", value: 126, dotColor: "bg-green-500" },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Signature status cards */}
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-lg border shadow-sm flex flex-col"
        >
          <p className="text-2xl font-semibold mb-1">{card.value}</p>
          <div className="flex items-center text-sm text-gray-600">
            <span className={`w-2 h-2 mr-2 rounded-full ${card.dotColor}`}></span>
            {card.title}
          </div>
        </div>
      ))}

      {/* Upload box */}
      <div className="col-span-full md:col-span-2 bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
        <div className="text-gray-400 mb-2">📄</div>
        <p className="text-sm text-gray-600 mb-4">Drop documents to get signed here</p>
        <button className="bg-black text-white px-4 py-2 rounded text-sm">Upload</button>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-4 rounded-lg border shadow-sm flex flex-col justify-between">
        <div>
          <FileSignature className="text-gray-600 mb-2" />
          <p className="font-medium">Sign an agreement</p>
          <p className="text-sm text-gray-500">Upload a file you need to sign.</p>
        </div>
        <div className="flex justify-end">
          <button className="w-6 h-6 rounded-full border text-black hover:bg-gray-100">&rarr;</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border shadow-sm flex flex-col justify-between">
        <div>
          <FilePlus className="text-gray-600 mb-2" />
          <p className="font-medium">Use a template</p>
          <p className="text-sm text-gray-500">Use a template you have already created.</p>
        </div>
        <div className="flex justify-end">
          <button className="w-6 h-6 rounded-full border text-black hover:bg-gray-100">&rarr;</button>
        </div>
      </div>
    </div>
  );
}
