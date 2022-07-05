import { ReactElement } from "react";
import NavbarItem from "./NavbarItem/NavbarItem";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import { useNavigate } from "react-router-dom";

export default function Navbar(): ReactElement {
  const navigate = useNavigate();

  const Logout = (): void => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };
  
  return (
    <>
      <NavbarItem href="/" title="Home" />
      <NavbarItem href="/favourites" title="Favourites" />
      <Input type="text" placeholder="search" onChange={() => {}} />
      {localStorage.getItem("currentUser") ? (
        <Button className="log-out" onClick={Logout} title="Log out" />
      ) : (
        <>
          <NavbarItem href="/sign-in" title="Sign in" />
          <NavbarItem href="/login" title="Log In" />
        </>
      )}
    </>
  );
}
