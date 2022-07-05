import { IButton } from "../../models/Button";
import "./Button.scss";

export default function Button({
  className,
  onClick,
  title,
  disabled,
}: IButton) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
}
