import { ReactElement } from "react";
import Navbar from "./Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./Header.scss";

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
