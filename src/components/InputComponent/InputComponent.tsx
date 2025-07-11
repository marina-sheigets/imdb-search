import "./InputComponent.css";

type InputComponentProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder: string;
  disabled?: boolean;
};

function InputComponent({
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false,
}: Readonly<InputComponentProps>) {
  return (
    <input
      className="input-component"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default InputComponent;
