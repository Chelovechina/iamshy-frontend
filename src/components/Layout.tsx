import { FC } from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "./leftBar/LeftBar";
import NavBar from "./navBar/NavBar";
import RightBar from "./rightBar/RightBar";

const Layout: FC = () => {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
