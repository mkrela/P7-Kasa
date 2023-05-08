import React from "react";
import "./Main.css"

function Main({ children }) {
  return <div className="main">{React.Children.map(children, (child) => child)}</div>;
}

export default Main;
