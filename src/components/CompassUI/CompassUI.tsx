import { memo, useEffect, useState } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import classes from "./CompassUI.module.css";

interface Props {
  className?: string;
}

const disire_deg = 100;

const CompassUI: FC<Props> = memo(function CompassUI(props = {}) {
  const [realDeg, setRealDeg] = useState(0);

  useEffect(() => {
    const fetchHeading = async () => {
      try {
        const response = await fetch("/utm_XYH");
        const data = await response.json();
        if (data && data.heading !== undefined) {
          setRealDeg(data.heading);
        }
      } catch (error) {
        console.error("Error fetching UTM data:", error);
      }
    };

    // Fetch the heading initially and then every 5 seconds
    fetchHeading();
    const intervalId = setInterval(fetchHeading, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.compass2}></div>
      {/* 회전 각도를 변수로 설정 */}
      <div
        className={classes.compass1}
        style={{ "--rotation": `${realDeg}deg` } as React.CSSProperties}
      ></div>

      <div className={classes.disire_shpae}></div>
      <h1 className={classes.real}>{realDeg}도</h1>
      <h1 className={classes.disire}>{disire_deg}도</h1>
    </div>
  );
});

export default CompassUI;
