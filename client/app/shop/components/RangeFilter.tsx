'use client'

import React, { useState } from 'react';

interface RangeFilterSectionProps {
  title: string;
  min: number;
  max: number;
  unit?: string; // Optional unit (e.g., "$" for money)
}

const RangeFilterSection: React.FC<RangeFilterSectionProps> = ({ title, min, max, unit = '' }) => {
  const [range, setRange] = useState<number>(max);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number(event.target.value));
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-green-800">{title}</h3>
        {/* Add any expand/collapse functionality here if needed */}
      </div>
      <div className="flex items-center mb-4">
        <input
          type="range"
          min={min}
          max={max}
          value={range}
          onChange={handleRangeChange}
          className="flex-grow h-2 appearance-none cursor-pointer rounded-xl"
          style={{
            background: `linear-gradient(to right, #064e3b ${(range - min) / (max - min) * 100}%, #f0f0f0 0%)`,
          }}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="border border-gray-300 rounded-lg p-2 text-center w-16">
          {unit}{min}
        </div>
        <div className="border border-gray-300 rounded-lg p-2 text-center w-16">
          {unit}{range}
        </div>
      </div>
    </div>
  );
};

export default RangeFilterSection;
