import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "./leftBar/LeftBar";
import NavBar from "./navBar/NavBar";
import RightBar from "./rightBar/RightBar";

const Layout: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(
    localStorage.getItem("darkMode") === "true" ? true : false
  );

  const handleClick = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", String(isDark));
  }, [isDark]);

  return (
    <div className={`theme-${isDark ? "dark" : "light"}`}>
      <NavBar isDark={isDark} handleClick={handleClick} />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
