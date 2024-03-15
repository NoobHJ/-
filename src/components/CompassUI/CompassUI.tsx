import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import classes from "./CompassUI.module.css";

interface Props {
  className?: string;
}

const real_deg = 0;
const disire_deg = 200;

const CompassUI: FC<Props> = memo(function CompassUI(props = {}) {
  // 회전 각도를 설정할 변수

  return (
    <div className={classes.container}>
      <div className={classes.compass2}></div>
      {/* 회전 각도를 변수로 설정 */}
      <div
        className={classes.compass1}
        style={{ "--rotation": `${real_deg}deg` } as React.CSSProperties}
      ></div>

      <div className={classes.disire_shpae}></div>
      <h1 className={classes.real}>{real_deg}도</h1>
      <h1 className={classes.disire}>{disire_deg}도</h1>
    </div>
  );
});

export default CompassUI;
