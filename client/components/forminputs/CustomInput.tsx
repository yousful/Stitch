import React from 'react';
import { Controller, FieldError, Control } from 'react-hook-form';
import { Input } from '@/components/ui/input'; // Assuming this is from ShadCN

export interface CustomInputProps {
  name: string;
  label: string;
  placeholder?: string;
  control: Control; // Control prop from react-hook-form
  rules?: any; // Validation rules
  error?: FieldError; // Field error
}

const CustomInput: React.FC<CustomInputProps> = ({ name, label, placeholder, control, rules, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            <Input {...field} placeholder={placeholder} className={`mt-1 block w-full py-4 ${error ? 'border-red-500' : ''}`} />
            {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default CustomInput;
