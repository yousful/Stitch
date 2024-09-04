"use client";

import React, { ReactNode } from "react";
import { BarChart, LineChart, PieChart, Bar, Line, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { Package, Star, ShoppingCart, Calendar, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import TableComponent from '@/components/layouts/Table';
import Image from "next/image";

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  description: string;
}

interface ProductListItemProps {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  stockStatus: string;
}

const Dashboard: React.FC = () => {
  const lineChartData = [
    { month: "Jan", sales: 800 },
    { month: "Feb", sales: 1200 },
    { month: "Mar", sales: 1400 },
    { month: "Apr", sales: 1700 },
    { month: "May", sales: 2000 },
    { month: "Jun", sales: 2200 },
  ];

  const pieChartData = [
    { name: 'Dresses', value: 1500 },
    { name: 'Suits', value: 1200 },
    { name: 'Skirt', value: 800 },
    { name: 'Jumpsuit', value: 600 },
    { name: 'Other', value: 300 },
  ];

  // Colors for the pie chart segments
  const pieChartColors = ['#235c4b', '#2a7a67', '#36a68a', '#5dc0a8', '#a5d8a7'];

  return (
    <div className="pr-10 space-y-8 py-6">
      {/* Welcome Message */}
      <section className="bg-accent p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-primary">Welcome back, Grace!</h2>
        <p className="text-xs text-primary">Here’s what’s happening with your store today.</p>
      </section>

      {/* Metric Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={<ShoppingCart className="w-6 h-6" />}
          label="Total Sales"
          value="$5,400"
          description="+25% from last week"
        />
        <MetricCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="New Orders"
          value="23"
          description="+25% from last week"
        />
        <MetricCard
          icon={<Star className="w-6 h-6" />}
          label="Customer Reviews"
          value="4.8"
          description="+25% from last week"
        />
        <MetricCard
          icon={<BarChart className="w-6 h-6" />}
          label="Visitors"
          value="1,234"
          description="+25% from last week"
        />
      </section>

      {/* Chart Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader className="">
            <CardTitle className="text-md font-medium">Sales Trend</CardTitle>
          </CardHeader>
          <CardContent className="">
            <LineChart width={400} height={300} data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#235c4b" />
            </LineChart>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
        <Card className="col-span-1">
          <CardHeader className="">
            <CardTitle className="text-md font-medium">Sales by Category</CardTitle>
          </CardHeader>
          <CardContent className="">
            <PieChart width={300} height={300}>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={60}
                label
                isAnimationActive={false}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieChartColors[index % pieChartColors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing sales distribution by category
            </div>
          </CardFooter>
        </Card>
      </section>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Top-Selling Products */}
        <div className="space-y-4 max-w-[600px]">
          <h2 className="text-md font-medium">Top-Selling Products</h2>
          <TableComponent />
        </div>

        {/* Trending Products */}
        <section className="flex-1 space-y-4 max-w-[600px]">
          <h2 className="text-md font-medium">Trending Products</h2>
          <TrendingProductsCard />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

function MetricCard({ icon, label, value, description }: MetricCardProps) {
  return (
    <Card className="flex items-center p-4 space-x-4">
      <div className="p-3 bg-accent rounded-md text-primary">
        {icon}
      </div>
      <div className="flex-1">
        <CardHeader className="p-0">
          <CardDescription className="text-sm">{label}</CardDescription>
          <CardTitle className="text-xl">{value}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pt-1">
          <div className="text-xs text-muted-foreground">
            {description}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

function TrendingProductsCard() {
  return (
    <Card className="bg-white shadow-md rounded-lg p-4">
      <CardHeader className="p-0">
      </CardHeader>
      <CardContent className="p-0 space-y-4">
        <ProductListItem
          imageSrc="/assets/images/product-img.svg"
          title="Elegant Silk Dress"
          description="Short description of product 1."
          price="₦12,000"
          stockStatus="In Stock"
        />
        <ProductListItem
          imageSrc="/assets/images/product-img.svg"
          title="Classic Leather Jacket"
          description="Short description of product 2."
          price="₦2,500"
          stockStatus="Out of Stock"
        />
      </CardContent>
    </Card>
  );
}

function ProductListItem({ imageSrc, title, description, price, stockStatus }: ProductListItemProps) {
  return (
    <div className="flex justify-between items-center space-x-4 border-b py-2">
      <Image
        priority
        width={60}
        height={60}
        alt={title}
        src={imageSrc}
        className="object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">{price}</p>
      <p className={`text-xs font-semibold ${stockStatus === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
        {stockStatus}
      </p>
    </div>
  );
}
