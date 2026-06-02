import "./css/Button.css";

function Button({
  children,
  variant = "primary",
  size = "medium",
  shape = "rectangle",
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant} ${size} ${shape}`}
    >
      <div className="button-top">{children}</div>
      <div className="button-bottom"></div>
      <div className="button-base"></div>
    </button>
  );
}

export default Button;