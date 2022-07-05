import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { INavbarItem } from "../../../../models/NavbarItem";
import "./NavbarItem.scss";

export default function NavbarItem({ href, title }: INavbarItem): ReactElement {
  return (
    <Link className="menu-item" to={href}>
      {title}
    </Link>
  );
}
