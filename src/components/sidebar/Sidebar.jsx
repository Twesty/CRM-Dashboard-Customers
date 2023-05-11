import React from 'react';
import Navigation from './navigation/Navigation';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__logo">
          <img src="assets/icons/logo.svg" alt="Logo" className="sidebar__logo-image" />
          <div className="sidebar__logo-content">
            <div className="sidebar__logo-text">Dashboard</div>
            <div className="sidebar__logo-version">v.01</div>
          </div>
        </div>
        <div className="sidebar__nav">
          <Navigation />
        </div>
      </div>
      <div className="sidebar__footer">
        <div className="user">
          <div className="user__avatar">
            <img src="assets/images/user.png" alt="Evano" />
          </div>
          <div className="user__info">
            <div className="user__name">Evano</div>
            <div className="user__position">Project Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
