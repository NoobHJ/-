import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import classes from "./CompassUI.module.css";

interface Props {
  className?: string;
}

export const CompassUI: FC<Props> = memo(function CompassUI(props = {}) {
  return (
    <div className={classes.container}>
      {" "}
      <div className={classes.compass2}></div>
      <div className={classes.compass1}></div>
      <div className={classes.disire_shpae}></div>
      <h1 className={classes.real}>0 deg</h1>
      <h1 className={classes.disire}>0 deg</h1>
    </div>
  );
});
