import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import classes from "./DashBoard.module.css";

interface Props {
  className?: string;
}

export const DashBoard: FC<Props> = memo(function DashBoard(props = {}) {
  return (
    <div>
      {" "}
      <div className={classes.background}></div>
    </div>
  );
});
