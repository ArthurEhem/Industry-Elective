import React from "react";
import { Outlet } from "react-router-dom";
import MusicPlayer from "./MusicPlayer";

function Layout() {
  return (
    <div>
      <MusicPlayer />
      <Outlet />
    </div>
  );
}
/* So Background.mp3 plays throughout! */
export default Layout;
