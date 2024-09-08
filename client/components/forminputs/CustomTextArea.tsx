import React from 'react';
import { Controller, FieldError } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea'; // Assuming this is from ShadCN

export interface CustomTextAreaProps {
  name: string;
  label: string;
  placeholder?: string;
  control: any; // Control prop from react-hook-form
  rules?: any; // Validation rules
  error?: FieldError; // Field error
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({ name, label, placeholder, control, rules, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            <Textarea {...field} placeholder={placeholder} className={`mt-1 block w-full ${error ? 'border-red-500' : ''}`} />
            {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default CustomTextArea;
