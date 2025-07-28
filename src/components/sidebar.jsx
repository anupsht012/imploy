import React from "react";
import {
  LayoutDashboard,
  Mail,
  Users,
  Calendar,
  UserCog,
  Briefcase,
  Wallet,
  FileText,
  PenLine,
  AlertCircle,
  BarChart2,
  DollarSign,
  Handshake,
  Settings,
  CircleUser
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "Inbox", icon: <Mail size={18} />, notification: true },
  {
    section: "Client Management",
    children: [
      { label: "Clients", icon: <Users size={18} /> },
      { label: "Scheduler", icon: <Calendar size={18} /> },
    ],
  },
  {
    section: "Human Resources",
    children: [
      { label: "Staff Management", icon: <UserCog size={18} /> },
      { label: "Job Board", icon: <Briefcase size={18} /> },
      { label: "Payroll", icon: <Wallet size={18} /> },
    ],
  },
  {
    section: "Compliance",
    children: [
      { label: "Documents", icon: <FileText size={18} /> },
      { label: "eSign", icon: <PenLine size={18} /> },
      { label: "Incidents", icon: <AlertCircle size={18} /> },
      { label: "Reports", icon: <BarChart2 size={18} /> },
    ],
  },
  {
    section: "Operations",
    children: [
      { label: "Finances", icon: <DollarSign size={18} />, notification: true },
      { label: "CRM", icon: <Handshake size={18} /> },
      { label: "Suppliers", icon: <Users size={18} /> },
    ],
  },
  { label: "Settings", icon: <Settings size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm border-r p-4 flex flex-col justify-between min-h-screen h-screen">
      <div>
        <div>
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12 h-auto mb-6"
          />
        </div>

        <nav className="space-y-2">
          {navItems.map((item, idx) =>
            item.section ? (
              <div key={idx}>
                <p className="text-xs text-gray-500 uppercase font-semibold px-2 mb-1">
                  {item.section}
                </p>
                <ul className="space-y-1">
                  {item.children.map((child, i) => (
                    <li key={i} className="flex items-center px-2 py-1 rounded hover:bg-gray-100 text-sm cursor-pointer">
                      <span className="mr-3 text-gray-600">{child.icon}</span>
                      <span className="text-gray-800">{child.label}</span>
                      {child.notification && <span className="ml-auto text-xs text-red-500">•</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <li key={idx} className="flex items-center px-2 py-1 rounded hover:bg-gray-100 text-sm cursor-pointer">
                <span className="mr-3 text-gray-600">{item.icon}</span>
                <span className="text-gray-800">{item.label}</span>
                {item.notification && <span className="ml-auto text-xs text-red-500">•</span>}
              </li>
            )
          )}
        </nav>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 px-2 py-2 border-t mt-4">
        <CircleUser className="text-gray-600" />
        <div>
          <p className="text-sm font-medium text-gray-800">Daniel Moss</p>
          <p className="text-xs text-gray-500">Essence Home Care</p>
        </div>
      </div>
    </aside>
  );
}
