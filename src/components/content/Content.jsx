import React from 'react';
import Table from '../table/Table';
import Pagination from '../pagination/Pagination';
import './Content.scss';

const Content = () => {
  return (
    <div className="content">
      <div className="content__header">
        <div className="content__header-info">
          <div className="content__title">All Customers</div>
          <div className="content__subtitle">Active Members</div>
        </div>
        <div className="content__search">
          <div className="content__search-icon">
            <img src="assets/icons/search.svg" alt="Search Icon" />
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <Table />
      <div className="content__footer">
        <div className="content__visible-count">Showing data 1 to 8 of 256K entries</div>
        <div className="content__pagination">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Content;
