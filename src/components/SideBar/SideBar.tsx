import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import classes from "./SideBar.module.css";

interface Props {
  className?: string;
}

export const SideBar: FC<Props> = memo(function SideBar(props = {}) {
  return (
    <div className={classes.container}>
      {" "}
      <div className={classes.logo}></div>
      <button className={classes.remote}></button>
      <button className={classes.terminal}></button>
      <button className={classes.location}></button>
      <div className={classes.ulsanlogo}></div>
    </div>
  );
});
