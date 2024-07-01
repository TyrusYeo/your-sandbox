import React from 'react';

export const BookCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover bg-primary text-background" ref={ref} data-density="hard">
        <div className="page-content flex items-center justify-center h-full">
          <h2 className="text-4xl font-arizona">{props.children}</h2>
        </div>
      </div>
    );
  });