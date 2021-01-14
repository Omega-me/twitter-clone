import React from 'react';
import './SidebarElement.css';

const SidebarElement = ({ active, Icon, text }) => {
  return (
    <div className={`sidebarElement ${active && 'sidebarElement--active'}`}>
      <Icon fontSize='large' />
      <h3>{text}</h3>
    </div>
  );
};

export default SidebarElement;
