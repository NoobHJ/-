import { memo } from "react";
import type { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import classes from "./App.module.css";
import resets from "./components/_resets.module.css";
import CompassUI from "./components/CompassUI/CompassUI";
import { SideBar } from "./components/SideBar/SideBar";
import { Cam } from "./components/CamUI/Cam";
import GoogleMap from "./pages/localization/localization";

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <div className={classes.SideBarContainer}>
          <SideBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/localization" element={<GoogleMap />} />
        </Routes>
      </div>
    </Router>
  );
});

const HomePage: FC = () => (
  <div>
    <div className={classes.CamContainer}>
      <Cam />
    </div>
    <div className={classes.compassContainer}>
      <CompassUI />
    </div>
  </div>
);
