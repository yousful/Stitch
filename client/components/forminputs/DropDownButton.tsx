'use client'
import React, { useState } from 'react';

import { AiOutlineDown } from 'react-icons/ai';
import { Button } from '../ui/button';

interface DropdownProps {
  options: string[];
  defaultOption?: string;
  onOptionSelect?: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption = "Popularity", onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onOptionSelect) {
      onOptionSelect(option);
    }
  };

  return (
    <div className="relative">
      <Button 
        className="flex items-center border border-gray-300 rounded-full px-4 py-1 bg-accent hover:accent-inherit text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <AiOutlineDown className="ml-2 text-gray-400" size={16} />
      </Button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div 
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
