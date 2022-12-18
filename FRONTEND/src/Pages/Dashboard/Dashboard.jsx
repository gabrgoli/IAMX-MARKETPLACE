import React from "react";
import style from "./Dashboard.module.css";
import { TbPlaylistAdd } from "react-icons/tb";
import { useState } from "react";
import Graphics from "../../Components/Graphics/Graphics";
import LayoutPrincipal from '../../Layouts/LayoutPrincipal'
function Dashboard() {
  const [active, setActive] = useState("earnings");
  return (
    <LayoutPrincipal>
      <div className={style.container}>
        <div className={style.flexContainer}>
          <div className={style.topBar}>
            <div className={style.titleLine}>
              <h1>DASHBOARD</h1>
              <TbPlaylistAdd />
            </div>
            <div className={style.categories}>
              <h2
                onClick={() => setActive("earnings")}
                className={active === "earnings" ? style.active : null}
              >
                EARNINGS
              </h2>
              <h2
                onClick={() => setActive("e-commerce")}
                className={active === "e-commerce" ? style.active : null}
              >
                E-Commerce
              </h2>
            </div>
          </div>
          <div className={style.graphic}>
            <Graphics data/>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}

export default Dashboard;
