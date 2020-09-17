import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function FooterBlock({}) {
  return (
    <Breadcrumb sticky="bottom" className="breadcrumb-footer">
      <Breadcrumb.Item href="/" className="breadcrumb-nav">
        Home
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
