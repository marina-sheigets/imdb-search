import React from 'react'
import "./DropdownComponent.css";

type DropdownComponentProps = {
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    label: string;
};


function DropdownComponent({ options, onChange, label }: Readonly<DropdownComponentProps>) {
  return (
    <div className="dropdown-component-wrapper">
      <label className='dropdown-component-label'>{label}</label>
      <select className='dropdown-component-select' onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropdownComponent;