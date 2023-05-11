import React from 'react';
import './Pagination.scss';

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__item pagination__arrow">&#10094;</div>
      <div className="pagination__item pagination__page active">1</div>
      <div className="pagination__item pagination__page">2</div>
      <div className="pagination__item pagination__page">3</div>
      <div className="pagination__item pagination__page">4</div>
      <div className="pagination__divider">...</div>
      <div className="pagination__item pagination__page">40</div>
      <div className="pagination__item pagination__arrow">&#10095;</div>
    </div>
  );
};

export default Pagination;
