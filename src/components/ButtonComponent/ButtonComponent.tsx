import "./ButtonComponent.css";

type ButtonComponentProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "text" | "contained";
  size?: "small" | "medium" | "large";
};

function ButtonComponent({
  label,
  onClick,
  disabled = false,
  variant = "text",
  size = "medium",
}: Readonly<ButtonComponentProps>) {
  return (
    <button
      className={`button-component ${variant} ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default ButtonComponent;
