import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as BuregMenu } from "../../assets/burger-menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import "./MobileMenu.scss";

export default function MobileMenu() {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const navigate = useNavigate();

  const Logout = (): void => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const toggleMobileMenu = (): void => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <BuregMenu className="burger-menu" onClick={toggleMobileMenu} />
      <div className={`sidebar ${isOpen && "active"}`}>
        <CloseIcon className="close-icon" onClick={toggleMobileMenu} />
        <NavLink className="mobile-link" to="/">
          Home
        </NavLink>
        <NavLink className="mobile-link" to="/create-post">
          Create Post
        </NavLink>

        {localStorage.getItem("currentUser") ? (
          <span className="mobile-link" onClick={Logout}>
            Log Out
          </span>
        ) : (
          <>
            <NavLink className="mobile-link" to="/sign-in">
              Sign in
            </NavLink>
            <NavLink className="mobile-link" to="/login">
              Log In
            </NavLink>
          </>
        )}
      </div>
      <div className={`${isOpen && "active"}`} onClick={toggleMobileMenu}></div>
    </>
  );
}
