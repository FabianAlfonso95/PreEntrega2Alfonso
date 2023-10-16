import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="navBarHeader">
        <NavLink to={`/`}>
          <img src="/logo.jpg" alt="" title="" />
        </NavLink>

        <nav>
          <ul>
            <li>
              <NavLink
                to={`/category/Pizza`}
                className={({ activa }) => (activa ? "ActCategoria" : "Option")}
              >
                Pizzas
              </NavLink>
            </li>

            <li>
              <NavLink
                to={`/category/Focaccia`}
                className={({ activa }) => (activa ? "ActCategoria" : "Option")}
              >
                Focaccias
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/category/Panes`}
                className={({ activa }) => (activa ? "ActCategoria" : "Option")}
              >
                Panes de campo
              </NavLink>
            </li>
          </ul>
        </nav>

        <span>
          <CartWidget></CartWidget>
        </span>
      </div>
    </>
  );
};
