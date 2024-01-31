import React from "react";
import { Input } from "./inputs/Input";

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  register: any;
  errors: any;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  register,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input
        type={type}
        {...register(name, { required: "This is required" })}
        id={name}
      />
      <p>{errors.title?.message}</p>
    </div>
  );
};

export default FormInput;
