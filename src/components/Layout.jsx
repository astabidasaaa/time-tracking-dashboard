import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Reset from "../styles/Reset";
import Typography from "../styles/Typography";
const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <Typography />
      <main className="main-body">{children}</main>
    </>
  );
};

export default Layout;
