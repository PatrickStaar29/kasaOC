import React, { useState } from 'react';

const CollapseItem = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className='collapse'>
      <div className='collapse__titre' onClick={toggleCollapse}>
        <h2 >{title}</h2>
        <span>v</span>
      </div>
      {!isCollapsed && <h3 className='collapse__contenu'>{content}</h3>}
    </div>
  );
};

export default CollapseItem;
