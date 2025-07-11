import "./InputComponent.css";

type InputComponentProps = {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder: string;
  disabled?: boolean;
  min?: number;
  max?: number;
};

function InputComponent({
  label = "",
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false,
  min,
  max,
}: Readonly<InputComponentProps>) {
  return (
    <div className="input-component-container">
      {label && (
        <label htmlFor={label} className="input-label">
          {label}
        </label>
      )}
      <input
        id={label}
        name={label}
        className="input-component"
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        min={min}
        max={max}
      />
    </div>
  );
}

export default InputComponent;
