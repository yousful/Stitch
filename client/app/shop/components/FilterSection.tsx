'use client'
import React, { useState } from 'react';

interface FilterOption {
  label: string;
  count: number;
}

interface FilterItemProps {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}

const FilterItem: React.FC<FilterItemProps> = ({ label, count, checked, onChange }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id={label}
        checked={checked}
        onChange={onChange}
        className="form-checkbox text-green-600 h-4 w-4"
      />
      <label htmlFor={label} className="ml-2 flex-grow text-gray-700">
        {label}
      </label>
      <span className="text-gray-500">({count})</span>
    </div>
  );
};

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (label: string) => {
    setSelectedOptions((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="bg-white border-b-2 border-b-gray-300 p-2 ">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-green-800">{title}</h3>
        {/* Add any expand/collapse functionality here if needed */}
      </div>
      <div className="flex flex-col">
        {options.map((option) => (
          <FilterItem
            key={option.label}
            label={option.label}
            count={option.count}
            checked={selectedOptions.includes(option.label)}
            onChange={() => handleCheckboxChange(option.label)}
          />
        ))}
      </div>
      <div className="text-green-600 flex items-center cursor-pointer mt-4">
        {/* You can add logic here to show more options */}
        <span className="ml-2">More Options</span>
      </div>
    </div>
  );
};

export default FilterSection;
