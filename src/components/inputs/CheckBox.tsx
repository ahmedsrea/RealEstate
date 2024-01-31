import * as React from "react";

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        ref={ref}
        {...props}
      />
    );
  }
);

CheckBox.displayName = "Checkbox";

export { CheckBox };
