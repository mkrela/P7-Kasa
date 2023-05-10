import React, { useState } from "react";
import "./DescriptionPanel.scss";

function DescriptionPanel(props) {
  // State to determine if content is visible or not
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Function to toggle content visibility
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  // Class name for content element based on visibility state
  const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content";
  
  // Class name for chevron element based on visibility state
  const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";

  return (
    <div className="description__panel">
      {/* Clickable header element to toggle content visibility */}
      <p className="description__header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      {/* Content element that is shown/hidden based on visibility state */}
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}

export default DescriptionPanel;
