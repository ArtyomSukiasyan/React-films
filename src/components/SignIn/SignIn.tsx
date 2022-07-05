import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {
  alreadyRegistredMessage,
  emptyString,
  isInvalidEmailMessage,
  isInvalidNameMessage,
  isInvalidPasswordMessage,
  isInvalidSurnameMessage,
} from "../../constants/ValidationMessages";
import {
  emailCheckRegex,
  nameCheckRegex,
  passwordCheckRegex,
  surnameCheckRegex,
} from "../../constants/Regex";
import IDgenerator from "../../helpers/IDgenerator";
import { ICurrentUser } from "../../models/CurrentUser";
import "./SignIn.scss";
import { localStorageSetItem } from "../../helpers/localStorage";

export default function SignIn(): ReactElement {
  const [name, setName] = useState<string>(emptyString);
  const [surname, setSurname] = useState<string>(emptyString);
  const [email, setEmail] = useState<string>(emptyString);
  const [password, setPassword] = useState<string>(emptyString);
  const [isValidName, setIsValidName] = useState<boolean>(false);
  const [isValidSurname, setIsValidSurname] = useState<boolean>(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [existEmailMessage, setExistEmailMessage] =
    useState<string>(emptyString);
  const [isValidNameMessage, setIsValidNameMessage] =
    useState<string>(emptyString);
  const [isValidSurnameMessage, setIsValidSurnameMessage] =
    useState<string>(emptyString);
  const [isValidEmailMessage, setIsValidEmailMessage] =
    useState<string>(emptyString);
  const [isValidPasswordMessage, setIsValidPasswordMessage] =
    useState<string>(emptyString);

  const navigate = useNavigate();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsValidNameMessage(emptyString);
    const isValid = nameCheckRegex.test(e.target.value);

    if (isValid) {
      setName(e.target.value);
      setIsValidName(true);
    } else {
      setIsValidName(false);
      setIsValidNameMessage(isInvalidNameMessage);
    }
  };

  const handleChangeSurname = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsValidSurnameMessage(emptyString);
    const isValid = surnameCheckRegex.test(e.target.value);

    if (isValid) {
      setSurname(e.target.value);
      setIsValidSurname(true);
    } else {
      setIsValidSurname(false);
      setIsValidSurnameMessage(isInvalidSurnameMessage);
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsValidEmailMessage(emptyString);

    const isValid = emailCheckRegex.test(e.target.value);

    if (!isValid) {
      setIsValidEmailMessage(isInvalidEmailMessage);
      setIsValidEmail(false);
    } else {
      setEmail(e.target.value);
      setIsValidEmail(true);

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      setExistEmailMessage(emptyString);

      for (let i = 0; i < users.length; i++) {
        if (users[i]?.email === e.target.value) {
          setExistEmailMessage(alreadyRegistredMessage);
          break;
        }
      }
    }
  };

  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsValidPasswordMessage(emptyString);

    const isValid = passwordCheckRegex.test(e.target.value);

    if (isValid) {
      setPassword(e.target.value);
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
      setIsValidPasswordMessage(isInvalidPasswordMessage);
    }
  };

  const onRegister = (): void => {
    const isValidData =
      isValidName && isValidSurname && isValidEmail && isValidPassword;

    if (!isValidData) {
      return;
    }

    const users: ICurrentUser[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    const currentUser: ICurrentUser = {
      id: IDgenerator(users),
      name: name,
      surname: surname,
      email: email,
      password: password,
    };

    localStorageSetItem("users", [...users, currentUser]);
    localStorageSetItem("currentUser", [currentUser]);

    navigate("/");
  };

  return (
    <div className="sign-in-form">
      <Input type="text" placeholder="name" onChange={handleChangeName} />
      <p>{isValidNameMessage}</p>
      <Input type="text" placeholder="surname" onChange={handleChangeSurname} />
      <p>{isValidSurnameMessage}</p>
      <Input type="email" placeholder="email" onChange={handleChangeEmail} />
      <p>{existEmailMessage}</p>
      <p>{isValidEmailMessage}</p>
      <Input
        type="password"
        placeholder="password"
        onChange={handleChangePassword}
      />
      <p>{isValidPasswordMessage}</p>
      <Button className="auth" onClick={onRegister} title="Sign in" />
    </div>
  );
}
