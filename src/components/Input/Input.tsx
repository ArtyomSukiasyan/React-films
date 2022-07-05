import { ReactElement } from "react";
import { IInput } from "../../models/Input";
import "./Input.scss";

export default function Input({
  type,
  placeholder,
  onChange,
}: IInput): ReactElement {
  return <input type={type} placeholder={placeholder} onChange={onChange} />;
}
