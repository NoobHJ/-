import { memo } from "react";
import type { FC } from "react";

import classes from "./App.module.css";
import resets from "./components/_resets.module.css";
import { CompassUI } from "./components/CompassUI/CompassUI";
import { SideBar } from "./components/SideBar/SideBar";
import { DashBoard } from "./components/Dashboard/Dashboard";
import { Cam } from "./components/CamUI/Cam";

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.SideBarContainer}>
        <SideBar />
      </div>
      <div className={classes.CamContainer}>
        <Cam />
      </div>
      <div className={classes.compassContainer}>
        <CompassUI />
      </div>
      <div className={classes.DashBoardContainer}>
        <DashBoard />
      </div>
      <div className={classes.ButtonContainer}></div>
    </div>
  );
});
