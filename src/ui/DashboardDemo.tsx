/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Wqf2kAK
 */

import React from "react";

const Link: React.FC<any> = ({ children }) => {
  return <div>{children}</div>;
};

export default function DashboardDemo() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h1 className="text-2xl mb-4">Dashboard</h1>
        <nav>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            href="#"
          >
            Home
          </Link>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            href="#"
          >
            Profile
          </Link>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            href="#"
          >
            Analytics
          </Link>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            href="#"
          >
            Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-semibold">Welcome back!</h1>
        <p className="mt-2 text-gray-600">
          Here's what's been happening since your last visit.
        </p>
        <div className="grid gap-6 mt-6 grid-cols-2">
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">New Customers</h2>
            <p className="mt-2 text-gray-600">
              Looks like you have some new customers since your last visit.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">Revenue</h2>
            <p className="mt-2 text-gray-600">
              Your revenue has increased since your last visit, keep up the good
              work!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
