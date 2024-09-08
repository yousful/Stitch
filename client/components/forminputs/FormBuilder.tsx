import React from 'react';
import CustomInput from './CustomInput';
import CustomSelectInput from './CustomSelectInput';
import CustomTextArea from './CustomTextArea';

export interface FormBuilderProps {
  fields: {
    type: 'input' | 'select' | 'textarea';
    name: string;
    label: string;
    placeholder?: string;
    options?: { value: string; label: string }[]; // Only for select type
    control: any; // Control prop from react-hook-form
    rules?: any; // Validation rules
    error?: any; // Field error
  }[];
}

const FormBuilder: React.FC<FormBuilderProps> = ({ fields }) => {
  return (
    <div>
      {fields.map((field, idx) => {
        switch (field.type) {
          case 'input':
            return (
              <CustomInput
                key={idx}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                control={field.control}
                rules={field.rules}
                error={field.error}
              />
            );
          case 'select':
            return (
              <CustomSelectInput
                key={idx}
                name={field.name}
                label={field.label}
                options={field.options || []} // Provide options for select
                control={field.control}
                rules={field.rules}
                error={field.error}
              />
            );
          case 'textarea':
            return (
              <CustomTextArea
                key={idx}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                control={field.control}
                rules={field.rules}
                error={field.error}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default FormBuilder;
