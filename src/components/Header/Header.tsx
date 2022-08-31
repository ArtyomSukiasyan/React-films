import { ReactElement } from "react";
import Navbar from "./Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./Header.scss";

export default function Header({ search }: any): ReactElement {
  return (
    <header>
      <nav className="desktop">
        <Navbar search={search} />
      </nav>
      <nav className="mobile">
        <MobileMenu />
      </nav>
    </header>
  );
}
