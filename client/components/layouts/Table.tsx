import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function TableComponen() {
    return (
        <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead className="hidden sm:table-cell">Category</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date Sold</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">Elegant Silk Dress</div>
                {/* <div className="hidden text-sm text-muted-foreground md:inline">
                  SKU: DRS12345
                </div> */}
              </TableCell>
              <TableCell className="hidden sm:table-cell">Dresses</TableCell>
              <TableCell className="hidden sm:table-cell">
                
                <Badge className="text-xs" variant="secondary"  style={{ backgroundColor: 'red', color: 'white' }}>
                Out of Stock
              </Badge>

              </TableCell>
              
              <TableCell className="hidden md:table-cell">2024-08-12</TableCell>
              <TableCell className="text-right">₦5,000.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Elegant Silk Dress</div>
                {/* <div className="hidden text-sm text-muted-foreground md:inline">
                  SKU: BAG12345
                </div> */}
              </TableCell>
              <TableCell className="hidden sm:table-cell">Shirt</TableCell>
              <TableCell className="hidden sm:table-cell">
                {/* <Badge className="text-xs" variant="outline">
                  Trending
                </Badge> */}
                <Badge className="text-xs" variant="secondary" style={{ backgroundColor: 'green', color: 'white' }}>
                In Stock
              </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-08-10</TableCell>
              <TableCell className="text-right">₦2,500.00</TableCell>
            </TableRow>
          
          </TableBody>
        </Table>
      </div>
    )
}
