"use client";

import Link from "next/link";

export default function SideNav() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="py-4 px-6 text-2xl font-bold border-b border-gray-700">
        MyApp
      </div>
      <nav className="flex-grow">
        <ul className="space-y-4 mt-6">
          <li>
            <Link
              href="/dashboard/invoices"
              className="block py-2 px-6 hover:bg-gray-700 rounded transition"
            >
              Invoices
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/customers"
              className="block py-2 px-6 hover:bg-gray-700 rounded transition"
            >
              Customers
            </Link>
          </li>
          <li>
            <Link
              href="/logout"
              className="block py-2 px-6 hover:bg-red-700 rounded transition"
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      <div className="py-4 px-6 text-sm text-gray-400 border-t border-gray-700">
        © 2024 MyApp
      </div>
    </div>
  );
}
