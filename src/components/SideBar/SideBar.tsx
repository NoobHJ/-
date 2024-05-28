import { memo, useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import resets from "../_resets.module.css";
import classes from "./SideBar.module.css";

interface Props {
  className?: string;
}

export const SideBar: FC<Props> = memo(function SideBar(props = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={classes.container}>
      <div className={classes.logo} onClick={handleLogoClick}></div>
      {isMenuOpen && (
        <div className={`${classes.menu} ${classes.gap}`}>
          <Link to="/localization">
            <button className={classes.gps}></button>
          </Link>
          <button className={classes.imu}></button>
          <button className={classes.lidar}></button>
          <button className={classes.satlelite}></button>
          <Link to="/">
            <div className={classes.ulsanlogo}></div>
          </Link>
        </div>
      )}
    </div>
  );
});
