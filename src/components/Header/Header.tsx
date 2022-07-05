import { ReactElement } from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.scss";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header(): ReactElement {
  return (
    <header>
      <nav className="desktop">
        <Navbar />
      </nav>
      <nav className="mobile">
        <MobileMenu />
      </nav>
    </header>
  );
}
