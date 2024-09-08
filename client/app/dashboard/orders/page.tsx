'use client'

import { CustomPagination } from '@/components/CustomPagination'
import { DataTable } from '@/components/layouts/DataTable'
import { SearchComp } from '@/components/layouts/SeachComp'
import { MetricCard } from '@/components/MetricCard'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { BookX, CheckCircle, Clock, Loader, MoreHorizontal, MoreVertical, Package, Rocket } from 'lucide-react'
import React from 'react'


type Order = {
    id: string
    customerName: string
    status: string
    totalAmount: string
    orderDate: string
    customizationDetails: string
    dueDate: string
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
        cell: info => {
          const status = info.getValue() as string;
          let textColor = "";
          switch (status) {
            case "Completed":
              textColor = "text-green-500"; 
              break;
            case "Pending":
              textColor = "text-yellow-500"; 
              break;
            case "In Progress":
              textColor = "text-blue-500";
              break;
            case "Cancelled":
              textColor = "text-red-500"; 
              break;
            default:
              textColor = "text-gray-500"; 
              break;
          }
    
          return <span className={textColor}>{status}</span>;
        },
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
    {
        accessorKey: "dueDate",
        header: "Due Date",
        cell: info => info.getValue(),
      },
    {
        accessorKey: "customizationDetails",
        header: "Customization",
        cell: info => info.getValue(),
      },
    
    //   {
    //     id: "actions",
    //     header: "Actions",
    //     cell: ({ row }) => (
    //       <div className="flex items-center space-x-2">
    //         <button className="text-blue-500" onClick={() => handleViewDetails(row.original)}>View Details</button>
    //         <button className="text-green-500" onClick={() => handleEdit(row.original)}>Edit</button>
    //       </div>
    //     ),
    //   },
      {
        accessorKey: "actions",
        header: "Actions",
        cell: () => (
        //   <MoreVertical className="cursor-pointer hover:text-gray-700" />
<>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-haspopup="true"
              size="icon"
              variant="ghost"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
</>

        ),
      },

  ]
  const data: Order[] = [
    {
      id: "ORD001",
      customerName: "Jane Doe",
      status: "Pending",
      totalAmount: "15,000",
      orderDate: "2023-08-01",
      customizationDetails: "Red Silk, Size M",
      dueDate: "2023-08-10",
    },
    {
      id: "ORD002",
      customerName: "John Smith",
      status: "Completed",
      totalAmount: "25,000",
      orderDate: "2023-08-02",
      customizationDetails: "Blue Denim, Size L",
      dueDate: "2023-08-15",
    },
    {
      id: "ORD003",
      customerName: "Alice Brown",
      status: "In Progress",
      totalAmount: "10,000",
      orderDate: "2023-08-03",
      customizationDetails: "Green Cotton, Size S",
      dueDate: "2023-08-20",
    },
    {
        id: "ORD002",
        customerName: "Jennifer Jacobs",
        status: "Cancelled",
        totalAmount: "25,000",
        orderDate: "2023-08-02",
        customizationDetails: "Pleated Jumpsuit, Size L",
        dueDate: "2023-08-15",
      },
  ]

  function handleViewDetails(order: Order) {
    // Logic to view order details
    console.log('View details for order', order)
  }
  
  function handleEdit(order: Order) {
    // Logic to edit order customization details, due dates, or status
    console.log('Edit order', order)
  }


function page() {
    const totalOrders = 125
  const pendingOrders = 10
  const completedOrders = 90
  const cancelledOrders = 5
  const inProgressOrders = 20

  const handleSearch = (value: string) => {
    console.log("Searching for:", value) 
  }

  const handleFilterChange = (selectedFilters: string[]) => {
    console.log("Selected filters:", selectedFilters)
  }
  
  const handleExport = () => {
    console.log("Exporting data")
  }

  return (
    <div className="space-y-8 pr-10">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
      <div>
      <SearchComp
        searchPlaceholder="Search orders..."
        showFilter={true}
        filterOptions={["Pending", "Completed", "In Progress", "Cancelled"]}
        showExportButton={true}
        showAddButton={false}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onExport={handleExport}
      />
        </div>
     <DataTable columns={columns} data={data} />
     </div>
  )
}

export default page