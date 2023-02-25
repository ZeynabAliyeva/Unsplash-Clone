import * as React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/detail"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Detail
          </NavLink>
        </li>
        <li>
          <NavLink to="/profil">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                Profil
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                Admin
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                Login
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Header