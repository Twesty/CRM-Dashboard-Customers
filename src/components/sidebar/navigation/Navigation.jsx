import React, { useState } from 'react';
import Icons from './NavigationIcons';

import './Navigation.scss';

const Navigation = () => {
  const [navigation] = useState([
    { id: 1, active: false, title: 'Dashboard', hasChildren: false, icon: <Icons.DashboardSvg /> },
    { id: 2, active: false, title: 'Product', hasChildren: true, icon: <Icons.ProductSvg /> },
    { id: 3, active: true, title: 'Customers', hasChildren: true, icon: <Icons.CustomersSvg /> },
    { id: 4, active: false, title: 'Income', hasChildren: true, icon: <Icons.IncomeSvg /> },
    { id: 5, active: false, title: 'Promote', hasChildren: true, icon: <Icons.PromoteSvg /> },
    { id: 6, active: false, title: 'Help', hasChildren: true, icon: <Icons.HelpSvg /> },
  ]);

  console.log(Icons);

  return (
    <nav className="navigation">
      <ul className="navigation__list list-style-none">
        {navigation.map((item) => (
          <li className={`navigation__item ${item.active ? 'active' : ''}`} key={item.id}>
            <div className="navigation__item-inner">
              <div className="navigation__item-icon">{item.icon}</div>
              <div className="navigation__item-title">{item.title}</div>
            </div>
            {item.hasChildren && (
              <div className="navigation__item-arrow">
                <Icons.ArrowSvg />
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
