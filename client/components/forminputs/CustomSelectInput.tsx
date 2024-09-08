import React from 'react';
import { Controller, FieldError } from 'react-hook-form';
import { Select } from '@/components/ui/select'; // Assuming this is from ShadCN

export interface CustomSelectInputProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  control: any; // Control prop from react-hook-form
  rules?: any; // Validation rules
  error?: FieldError; // Field error
}

const CustomSelectInput: React.FC<CustomSelectInputProps> = ({ name, label, options, control, rules, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
          {/* @ts-ignore */}
            <Select {...field} className={`mt-1 block w-full ${error ? 'border-red-500' : ''}`}>
              <option value="">Select an option</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default CustomSelectInput;
