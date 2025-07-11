import React from "react";
import "./CheckboxComponent.css";
import Paragraph from "../Paragraph/Paragraph";

type CheckboxComponentProps = {
  label?: string;
  disabled?: boolean;
  value: boolean;
  text?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function CheckboxComponent({
  value,
  onChange,
  label,
  text = "",
  disabled = false,
}: Readonly<CheckboxComponentProps>) {
  return (
    <div className="checkbox-component-wrapper">
      <label className="checkbox-component-label" htmlFor="checkbox">
        {label}
      </label>
      <div className="checkbox-component-container">
        <input
          className="checkbox-component-input"
          type="checkbox"
          id="checkbox"
          checked={value}
          onChange={onChange}
          disabled={disabled}
        />
        <Paragraph text={text} color="secondary" />
      </div>
    </div>
  );
}

export default CheckboxComponent;
