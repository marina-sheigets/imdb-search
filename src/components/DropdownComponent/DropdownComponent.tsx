import React from "react";
import "./DropdownComponent.css";
import type { Option } from "../../types/Option";

type DropdownComponentProps = {
  value: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
};

function DropdownComponent({
  value,
  options,
  onChange,
  label,
}: Readonly<DropdownComponentProps>) {
  return (
    <div className="dropdown-component-wrapper">
      <label className="dropdown-component-label">{label}</label>
      <select
        value={value}
        className="dropdown-component-select"
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownComponent;
