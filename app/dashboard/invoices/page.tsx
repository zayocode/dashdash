"use client";

import Image from "next/image";

export default function InvoicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Invoices Page</h1>
      <p className="text-gray-700 mb-6">Overview of invoices and sales statistics.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sales Over Time */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Sales Over Time</h2>
          <Image
            src="/sales_over_time.png"
            alt="Sales Over Time"
            width={400}
            height={300}
            className="rounded"
          />
        </div>
        
        {/* Revenue Breakdown */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Revenue Breakdown</h2>
          <Image
            src="/revenue_breakdown.png"
            alt="Revenue Breakdown"
            width={400}
            height={300}
            className="rounded"
          />
        </div>
        
        {/* Outstanding Invoices */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Outstanding Invoices</h2>
          <Image
            src="/outstanding_invoices.png"
            alt="Outstanding Invoices"
            width={400}
            height={300}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}
