import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const PageLayout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="page-content-wrapper" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <header>HEADER</header>
      <main>TOGGLING THEME USING USECONTEXT</main>
      <footer>FOOTER</footer>
    </div>
  );
};

export default PageLayout;
