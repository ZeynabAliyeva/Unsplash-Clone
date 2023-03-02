import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import unsplashicon from "../../assets/icons/unsplash.svg";
import searcicon from "../../assets/icons/search.png";
import "./index.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };
  let activeClassName = "underline";
  let menuRef = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  return (
    <div className="headerWrapper">
      <div className="headerLeft">
        <div className="unsplash_info_box">
          <img className="unsplash_icon" src={unsplashicon} />
          <div className="unsplash_title_box">
            <h3>My Unsplash</h3>
            <p>
              <a href="#">devchallenges.io</a>
            </p>
          </div>
        </div>
        <div className="formBox">
          <form className="headerForm">
            <img className="srcIcon" src={searcicon} />
            <input className="srcInput" placeholder="Search by name" />
          </form>
        </div>
      </div>
      <div className="headerRight">
        <div className="header_btn_box">
          <button className="header_btn">Add a photo</button>
        </div>
        <div className="user_info">
          <p>
            <a href="#">Sing up</a>
          </p>
        </div>
        <Box ref={menuRef} className="hamburgerMenu">
          <IconButton
            onClick={(e) => setOpen(!open)}
            size="sm"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon sx={{ fontSize: "2.2rem" }} />
          </IconButton>
          {open && (
            <nav className="navBar">
              <ul>
                <li className="navLi">
                  <NavLink
                    to="/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="navLi">
                  <NavLink
                    to="/detail"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                  >
                    Detail
                  </NavLink>
                </li>
                <li className="navLi">
                  <NavLink to="/profil">
                    {({ isActive }) => (
                      <span className={isActive ? activeClassName : undefined}>
                        Profil
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className="navLi">
                  <NavLink to="/admin">
                    {({ isActive }) => (
                      <span className={isActive ? activeClassName : undefined}>
                        Admin
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className="navLi">
                  <NavLink to="/login">
                    {({ isActive }) => (
                      <span className={isActive ? activeClassName : undefined}>
                        Login
                      </span>
                    )}
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </Box>
      </div>
    </div>
  );
}
export default Header;
