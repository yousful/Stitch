'use client'
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingOption {
  label: string;
  count: number;
  value: number;
}

interface RatingItemProps {
  value: number;
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}

const RatingItem: React.FC<RatingItemProps> = ({ value, label, count, checked, onChange }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="radio"
        id={label}
        name="rating"
        checked={checked}
        onChange={onChange}
        className="form-radio text-green-600 h-4 w-4"
      />
      <label htmlFor={label} className="ml-2 flex items-center text-gray-700">
        <div className="flex items-center">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${i < value ? 'text-yellow-500' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="ml-2">{label}</span>
      </label>
      <span className="text-gray-500 ml-auto">({count})</span>
    </div>
  );
};

interface RatingFilterSectionProps {
  title: string;
  options: RatingOption[];
}

const RatingFilterSection: React.FC<RatingFilterSectionProps> = ({ title, options }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRadioChange = (value: number) => {
    setSelectedRating(value);
  };

  return (
    <div className="bg-white border-b-2 border-b-gray-300  p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-green-800">{title}</h3>
        {/* Add any expand/collapse functionality here if needed */}
      </div>
      <div className="flex flex-col">
        {options.map((option) => (
          <RatingItem
            key={option.value}
            value={option.value}
            label={option.label}
            count={option.count}
            checked={selectedRating === option.value}
            onChange={() => handleRadioChange(option.value)}
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

export default RatingFilterSection;
