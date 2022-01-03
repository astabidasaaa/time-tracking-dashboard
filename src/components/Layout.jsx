import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Reset from "../styles/Reset";

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <main className="main-body">{children}</main>
    </>
  );
};

export default Layout;
