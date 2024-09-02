'use client'

import { DataTable } from '@/components/layouts/DataTable'
import { MetricCard } from '@/components/MetricCard'
import { ColumnDef } from '@tanstack/react-table'
import { BookX, CheckCircle, Clock, Loader, Package, Rocket } from 'lucide-react'
import React from 'react'


type Order = {
    id: string
    customerName: string
    status: string
    totalAmount: string
    orderDate: string
  }
  
  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: "id",
      header: "Order ID",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "customerName",
      header: "Customer Name",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: info => (
        <span
          className={`${
            info.getValue() === "Completed" ? "text-green-500" : "text-yellow-500"
          }`}
        >
          {info.getValue()}
        </span>
      ),
    },
    {
      accessorKey: "totalAmount",
      header: "Total Amount",
      cell: info => `₦${info.getValue()}`,
    },
    {
      accessorKey: "orderDate",
      header: "Order Date",
      cell: info => info.getValue(),
    },
  ]
  
  const data: Order[] = [
    {
      id: "ORD001",
      customerName: "Jane Doe",
      status: "Pending",
      totalAmount: "15,000",
      orderDate: "2023-08-01",
    },
    {
      id: "ORD002",
      customerName: "John Smith",
      status: "Completed",
      totalAmount: "25,000",
      orderDate: "2023-08-02",
    },
    {
      id: "ORD003",
      customerName: "Alice Brown",
      status: "In Progress",
      totalAmount: "10,000",
      orderDate: "2023-08-03",
    },
  ]

function page() {
    const totalOrders = 125
  const pendingOrders = 10
  const completedOrders = 90
  const cancelledOrders = 5
  const inProgressOrders = 20

  return (
    <div className="space-y-8 pr-7">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
      <MetricCard
          icon={<Package className="w-6 h-6 text-[#7B89CC]" />}
        
          label="Total Orders"
          value={totalOrders}
          description="All orders placed to date"
          backgroundColor="#EAECFB" 
        />
        <MetricCard
          icon={<Clock className="w-6 h-6 text-[#D2B413]" />}
          label="Pending Orders"
          value={pendingOrders}
          description="Orders awaiting processing"
          backgroundColor="#FDF6D2" 
        />
        <MetricCard
          icon={<Rocket className="w-6 h-6 text-[#4A90E2]" />}
          label="Orders in Progress"
          value={inProgressOrders}
          description="Orders currently being processed"
          backgroundColor="#EAF6FE" // Background color for in-progress orders
        />
        <MetricCard
          icon={<CheckCircle className="w-6 h-6 text-[#6BBF74]" />}
          label="Completed Orders"
          value={completedOrders}
          description="Orders successfully delivered"
          backgroundColor="#EAF7E9"
        />
        <MetricCard
            icon={<BookX className="w-6 h-6 text-[#E68A63]" />}
          label="Cancelled Orders"
          value={cancelledOrders}
          description="Orders that were cancelled"
          backgroundColor="#FFF3EB" 
        />
      </div>
     <DataTable columns={columns} data={data} />
     </div>
  )
}

export default page