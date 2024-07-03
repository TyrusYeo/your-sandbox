import React from 'react';

export const BookPage = React.forwardRef((props, ref) => {
    return (
      <div className="page bg-book-page-bg" ref={ref}>
        <div className="page-content p-8">
          <h2 className="page-header text-2xl font-arizona text-primary mb-4">Page header - {props.number}</h2>
          <div className="page-image h-64 bg-secondary mb-4"></div>
          <div className="page-text text-text mb-4">{props.children}</div>
          <div className="page-footer text-accent">{props.number + 1}</div>
        </div>
      </div>
    );
  });