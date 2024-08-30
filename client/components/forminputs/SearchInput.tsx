import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { Input } from '../ui/input';

const SearchInput = ({ placeholder = "Search by store name", ...props }) => {
  return (
    <div className="flex relative  px-4  w-full">
        <div className='absolute top-2 left-6'>

      <AiOutlineSearch className="text-gray-400 mr-2" size={24} />
        </div>
      <Input 
        placeholder={placeholder} 
        className="pl-8 border-2 border-gray-300 rounded-full w-full  focus:ring-none focus:outline-none "
        {...props} 
      />
    </div>
  );
};

export default SearchInput;
