import React from "react";
import FooterBlock from "./Footer";
import HeaderBlock from "./Header";

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <HeaderBlock />

      <div className="content-container">{children}</div>

      <FooterBlock />
    </div>
  );
}
