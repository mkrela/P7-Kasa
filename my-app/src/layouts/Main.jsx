import React from "react";
import "./Main.scss"

function Main({ children }) {
  return <div className="main">{React.Children.map(children, (child) => child)}</div>;
}

export default Main;
