import React from "react";
import style from "./NavBarMobile.module.css";
//import './NavBarMobile.css'
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBarMobile() {
  const [active, setActive] = useState("home");
  const [width, setWidth] = useState(window.innerWidth);

  const sizeScreen=()=>{
    setWidth(window.innerWidth)
  }

useEffect(()=>{
  window.addEventListener("resize", sizeScreen);
  return()=>{
    window.removeEventListener("resize", sizeScreen);
  }
})

  return (
    <>
      {width<500?
        <div className={style.container}>
      <div className={style.flexContainer}>
        <div className={style.icon} onClick={() => setActive("home")}>
          <NavLink to={"/home"}>
            <IoHomeOutline
              className={active === "home" ? style.active : null}
            />
            <p>Home</p>
          </NavLink>
        </div>
        <div className={style.icon} onClick={() => setActive("dashboard")}>
          <NavLink to={"/dashboard"}>
            <MdOutlineDashboard
              className={active === "dashboard" ? style.active : null}
            />
            <p>Dashboard</p>
          </NavLink>
        </div>
        <div className={style.icon} onClick={() => setActive("search")}>
          <IoSearchOutline
            className={active === "search" ? style.active : null}
          />
          <p>Search</p>
        </div>
        <div className={style.icon} onClick={() => setActive("profile")}>
          <IoPersonOutline
            className={active === "profile" ? style.active : null}
          />
          <p>Profile</p>
        </div>
      </div>
    </div>
          :
          <></>
    }
    </>
  );
}

export default NavBarMobile;
