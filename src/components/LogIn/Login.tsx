import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  emptyString,
  isWrongPasswordMessage,
  notFoundEmailMessage,
} from "../../constants/ValidationMessages";
import { ICurrentUser } from "../../models/CurrentUser";
import { localStorageSetItem } from "../../helpers/localStorage";


export default function Login(): ReactElement {
  const [email, setEmail] = useState<string>(emptyString);
  const [password, setPassword] = useState<string>(emptyString);
  const [existEmailMessage, setExistEmailMessage] =
    useState<string>(emptyString);
  const [wrongPasswordMessage, setWrongPasswordMessage] =
    useState<string>(emptyString);
  const navigate = useNavigate();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setExistEmailMessage(emptyString);
  };

  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
    setWrongPasswordMessage(emptyString);
  };

  const onRegister = (): void => {
    const users: ICurrentUser[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    let getEmail = false;
    let id = -1;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        getEmail = true;
        id = i;
      }
    }
    if (!getEmail) {
      setExistEmailMessage(notFoundEmailMessage);
      return;
    }

    if (users[id].password !== password) {
      setWrongPasswordMessage(isWrongPasswordMessage);
      return;
    }
    localStorageSetItem("currentUser", [users[id]]);
    navigate("/");
  };

  return (
    <div className="sign-in-form">
      <Input type="email" placeholder="email" onChange={handleChangeEmail} />
      <p>{existEmailMessage}</p>
      <Input
        type="password"
        placeholder="password"
        onChange={handleChangePassword}
      />
      <p>{wrongPasswordMessage}</p>

      <Button className="auth" onClick={onRegister} title="Log in" />
    </div>
  );
}
