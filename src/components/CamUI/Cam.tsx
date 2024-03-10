import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import classes from "./Cam.module.css";

interface Props {
  className?: string;
}

export const Cam: FC<Props> = memo(function Cam(props = {}) {
  return (
    <div>
      {" "}
      <div className={classes.Cam}></div>
    </div>
  );
});
