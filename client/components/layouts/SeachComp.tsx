'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { File, ListFilter, PlusCircle, Search } from 'lucide-react'

// Define the types for the props
interface SearchCompProps {
  searchPlaceholder?: string
  showFilter?: boolean
  filterOptions?: string[]
  showExportButton?: boolean
  showAddButton?: boolean
  buttonText?: string
  onSearch?: (value: string) => void
  onFilterChange?: (selectedFilters: string[]) => void
  onExport?: () => void
  onAdd?: () => void
}

export const SearchComp: React.FC<SearchCompProps> = ({
  searchPlaceholder = "Search...",
  showFilter = true,
  filterOptions = ["Completed", "Pending", "In Progress"],
  showExportButton = true,
  showAddButton = true,
  buttonText,
  onSearch,
  onFilterChange,
  onExport,
  onAdd,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full pr-10 space-y-4 lg:space-y-0 lg:space-x-4">
      
      {/* Search Input */}
      <div className="relative flex-grow max-w-md lg:max-w-xl">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder={searchPlaceholder}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#245949]"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        
        {/* Filter Dropdown */}
        {showFilter && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 gap-1 flex items-center">
                <ListFilter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {filterOptions.map((option) => (
                <DropdownMenuCheckboxItem
                  key={option}
                  onCheckedChange={(checked) =>
                    onFilterChange?.(checked ? [...filterOptions, option] : filterOptions.filter((f) => f !== option))
                  }
                >
                  {option}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        
        {/* Export Button */}
        {showExportButton && (
          <Button size="sm" variant="outline" className="h-9 gap-1 flex items-center" onClick={onExport}>
            <File className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        )}
        
        {/* Add Button */}
        {showAddButton && (
          <Button size="sm" className="h-9 gap-1 flex items-center" onClick={onAdd}>
            <PlusCircle className="h-4 w-4" />
            <span className="hidden sm:inline">{buttonText}</span>
          </Button>
        )}
        
      </div>
    </div>
  )
}
