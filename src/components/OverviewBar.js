import { LayoutDashboard, Layers, FileText, PenLine } from "lucide-react";

export default function VerticalMenu() {
  return (
    <div className="flex flex-col gap-3 px-6 pt-4 text-sm text-gray-600 min-w-[160px]">
      <button className="flex items-center gap-2 text-black font-medium">
         Overview
      </button>

      <button className="flex items-center gap-2 hover:text-black">
        Templates
      </button>

      <button className="flex items-center gap-2 hover:text-black">
      Documents
      </button>
<div>
<button className="mt-2 bg-black text-white px-3 py-1 rounded hover:bg-gray-800 flex items-center gap-1">
        <PenLine size={16} /> Sign
      </button>
</div>
    
    </div>
  );
}
