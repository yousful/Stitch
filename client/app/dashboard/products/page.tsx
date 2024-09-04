'use client';

import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { CustomPagination } from '@/components/CustomPagination';
import { DataTable } from '@/components/layouts/DataTable';
import { SearchComp } from '@/components/layouts/SeachComp';
import { MetricCard } from '@/components/MetricCard';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { Book, CheckCircle, Clock, Loader, MoreHorizontal, MoreVertical, Package, Rocket } from 'lucide-react';
import React from 'react';

type Product = {
    id: string;
    name: string;
    category: string;
    price: string;
    stock: number;
    status: string;
    addedDate: string;
    totalSales: number;
}

const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: "Product ID",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "name",
        header: "Product Name",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: info => `₦${info.getValue()}`,
    },
    {
        accessorKey: "stock",
        header: "Stock",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "totalSales",
        header: "Total Sales",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: info => {
            const status = info.getValue() as string;
            let textColor = "";
            switch (status) {
                case "Available":
                    textColor = "text-green-500";
                    break;
                case "Out of Stock":
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
        accessorKey: "addedDate",
        header: "Created",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: () => (
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
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    {/* <DropdownMenuItem onClick={()=> {router.push('/dashboard/products/edit');
}}>Edit</DropdownMenuItem> */}
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
];

const data: Product[] = [
    {
        id: "PROD001",
        name: "Product 1",
        category: "Category A",
        price: "1000",
        stock: 50,
        totalSales: 30,
        status: "Available",
        addedDate: "2023-08-01",
    },
    {
        id: "PROD002",
        name: "Product 2",
        category: "Category B",
        price: "2000",
        stock: 0,
        totalSales: 70,
        status: "Out of Stock",
        addedDate: "2023-08-02",
    },
    
];

export default function Page() {
    const router = useRouter(); 

    const totalProducts = 150;
    const availableProducts = 120;
    const outOfStockProducts = 30;

    const handleSearch = (value: string) => {
        console.log("Searching for:", value);
    };

    const handleFilterChange = (selectedFilters: string[]) => {
        console.log("Selected filters:", selectedFilters);
    };

    const handleExport = () => {
        console.log("Exporting data");
    };

    const handleAddProduct = () => {
        router.push('/dashboard/products/add');
    };

    return (
        <div className="space-y-8 pr-10">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <MetricCard
                    icon={<Package className="w-6 h-6 text-[#7B89CC]" />}
                    label="Total Products"
                    value={totalProducts}
                    description="All products in the inventory"
                    backgroundColor="#EAECFB"
                />
                <MetricCard
                    icon={<Clock className="w-6 h-6 text-[#D2B413]" />}
                    label="Available Products"
                    value={availableProducts}
                    description="Products currently in stock"
                    backgroundColor="#FDF6D2"
                />
                <MetricCard
                    icon={<Book className="w-6 h-6 text-[#E68A63]" />}
                    label="Out of Stock"
                    value={outOfStockProducts}
                    description="Products that are out of stock"
                    backgroundColor="#FFF3EB"
                />
            </div>
            <div>
                <SearchComp
                    searchPlaceholder="Search products..."
                    showFilter={true}
                    filterOptions={["Available", "Out of Stock"]}
                    showExportButton={true}
                    showAddButton={true} 
                    onSearch={handleSearch}
                    onFilterChange={handleFilterChange}
                    onExport={handleExport}
                    onAdd={handleAddProduct} 
                    buttonText='Add Product'
                />
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}


