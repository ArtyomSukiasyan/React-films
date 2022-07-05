import { ReactElement } from "react";
import { IButton } from "../../models/Button";
import "./Button.scss";

export default function Button({
  className,
  onClick,
  title,
  disabled,
}: IButton): ReactElement {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
}
