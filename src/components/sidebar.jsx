import React, { useState } from "react";
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
  CircleUser,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const navStructure = [
  { title: "Dashboard", icon: LayoutDashboard },
  { title: "Inbox", icon: Mail, notification: true },
  {
    section: "Client Management",
    items: [
      { title: "Clients", icon: Users },
      { title: "Scheduler", icon: Calendar },
    ],
  },
  {
    section: "Human Resources",
    items: [
      { title: "Staff Management", icon: UserCog },
      { title: "Job Board", icon: Briefcase },
      { title: "Payroll", icon: Wallet },
    ],
  },
  {
    section: "Compliance",
    items: [
      { title: "Documents", icon: FileText },
      { title: "eSign", icon: PenLine },
      { title: "Incidents", icon: AlertCircle },
      { title: "Reports", icon: BarChart2 },
    ],
  },
  {
    section: "Operations",
    items: [
      { title: "Finances", icon: DollarSign },
      { title: "CRM", icon: Handshake },
      { title: "Suppliers", icon: Users },
    ],
  },
  { title: "Settings", icon: Settings },
];

// items that should be collapsible
const collapsibletitles = [
  "Clients",
  "Scheduler",
  "Staff Management",
  "Finances",
  "CRM",
  "Suppliers",
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (title) => {
    setOpenDropdowns((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const isCollapsible = (title) => collapsibletitles.includes(title);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white border shadow rounded"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 z-40 bg-white border-r shadow-sm h-screen w-[260px] flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Top: Logo */}
        <div className="p-4">
          <img src="/logo.png" alt="Logo" className="w-10 h-auto " />
        </div>

        {/* Middle: Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          {navStructure.map((section, idx) =>
            section.items ? (
              <div key={idx}>
                <p className="text-xs text-gray-500 uppercase font-semibold px-2 py-1">
                  {section.section}
                </p>
                <ul className="space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <button
                        onClick={() =>
                          isCollapsible(item.title) && toggleDropdown(item.title)
                        }
                        className="flex items-center w-full px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
                      >
                        <item.icon className="w-4 h-4 mr-3 text-gray-600" />
                        <span className="flex-1 text-left">{item.title}</span>
                        {isCollapsible(item.title) && (
                          <ChevronRight
                            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                              openDropdowns[item.title] ? "rotate-90" : ""
                            }`}
                          />
                        )}
                      </button>

                      {/* Dropdown Content */}
                      {openDropdowns[item.title] && (
                        <ul className="ml-9 mt-1 space-y-1 text-sm text-gray-600">
                          <li className="hover:text-black cursor-pointer">Dropdown item 1</li>
                          <li className="hover:text-black cursor-pointer">Dropdown item 2</li>
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul key={idx} className="space-y-1">
                <li>
                  <button className="flex items-center w-full px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                    <section.icon className="w-4 h-4 mr-3 text-gray-600" />
                    <span className="flex-1 text-left">{section.title}</span>
                    {section.notification && (
                      <span className="text-xs text-red-500">•</span>
                    )}
                  </button>
                </li>
              </ul>
            )
          )}
        </nav>

        {/* Bottom: Footer */}
        <div className="border-t p-4 flex items-center gap-3">
          <CircleUser className="w-6 h-6 text-gray-600" />
          <div>
            <p className="text-sm font-medium text-gray-800">Daniel Moss</p>
            <p className="text-xs text-gray-500">Essence Home Care</p>
          </div>
        </div>
      </aside>
    </>
  );
}
