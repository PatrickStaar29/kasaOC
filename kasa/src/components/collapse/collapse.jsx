import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ titre, contenu }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse ${isCollapsed ? "" : "open"}`}>
      <div className="collapse__titre" onClick={toggleCollapse}>
        <h2>{titre}</h2>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`icon ${isCollapsed ? "" : "rotate"}`}
        />
      </div>
      <div
        className="collapse__contenu"
        style={{
          animation: isCollapsed ? "" : "loadContent 0.5s ease-in-out",
          maxHeight: isCollapsed ? "0" : "100%"
        }}
      >
        {contenu.map((contenu, index) => (
          <h3 key={index}>{contenu}</h3>
        ))}
      </div>
    </div>
  );
}

export default Collapse
