import React from "react";

export default function RecentOrders() {
  const orders = [
    { id: "ORD-20250318-250", 
      total: 3780, 
      method: "Cash On Delivery" },
    { id: "ORD-20250317-249", 
      total: 1930, 
      method: "Cash On Delivery" },
    { id: "ORD-20250317-248", 
      total: 1930, 
      method: "Cash On Delivery" },
  ];

  return (
    <div className="p-3 md:p-6 bg-white shadow-md rounded-2xl">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-white text-left">
              <th className="px-6  md:py-3 font-medium">Customer</th>
              <th className="px-6  md:py-3 font-medium">Order ID</th>
              <th className="px-6  md:py-3 font-medium">Payment Method</th>
              <th className="px-6  md:py-3 font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
              >
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-blue-600 font-open hover:underline cursor-pointer">
                  {order.id}
                </td>
                <td className="px-6 py-2 md:py-4">{order.method}</td>
                <td className="px-6 py-2 md:py-4">৳{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}