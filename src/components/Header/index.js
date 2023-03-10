import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import unsplashicon from "../../assets/icons/unsplash.svg";
import searcicon from "../../assets/icons/search.png";
import "./index.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddButton from "./AddButton";
import { authContext } from "../../store/AuthContext";
import avatar from "../../assets/images/user.jpeg";

function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };
  let menuRef = useRef();
  const [open, setOpen] = useState(false);
  const { loginStatus, currentUser, setloginStatus, setCurrentUser } =
    useContext(authContext);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  const onClickLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setloginStatus(false);
    setCurrentUser(null);
  };

  return (
    <div className="headerWrapper">
      <div className="headerLeft">
        <NavLink to="/">
          <div className="unsplash_info_box">
            <img className="unsplash_icon" src={unsplashicon} />
            <div className="unsplash_title_box">
              <h3>My Unsplash</h3>
              <p>
                <span>devchallenges.io</span>
              </p>
            </div>
          </div>
        </NavLink>
        <div className="formBox">
          <form className="headerForm">
            <img className="srcIcon" src={searcicon} />
            <input className="srcInput" placeholder="Search by name" />
          </form>
        </div>
      </div>
      <div className="headerRight">
        <div className="header_btn_box">
          <AddButton className="addPhotoModal" />
        </div>
        <div className="user_info">
          {loginStatus ? (
            <img
              src={currentUser.avatar ? currentUser.avatar : avatar}
              alt=""
              className="user_infoTitle"
            ></img>
          ) : (
            <p>
              <NavLink to="/login">Login</NavLink>
            </p>
          )}
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
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Detail
                  </NavLink>
                </li>
                <li className="navLi">
                  <NavLink to="/profil">
                    {({ isActive }) => (
                      <span style={isActive ? activeStyle : undefined}>
                        Profil
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className="navLi">
                  <NavLink to="/admin">
                    {({ isActive }) => (
                      <span style={isActive ? activeStyle : undefined}>
                        Admin
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className="navLi">
                  <button onClick={onClickLogOut}>Logout</button>
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
