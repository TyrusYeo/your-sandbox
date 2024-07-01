"use client";

import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { BookCover } from './BookCover';
import { BookPage } from './BookPage';

export const BookComponent = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const flipBookRef = useRef(null);

  // const getPageFlip = () => {
  //   return flipBookRef.current?.pageFlip;
  // };

  // const nextButtonClick = () => {
  //   getPageFlip()?.flipNext();
  // };

  // const prevButtonClick = () => {
  //   getPageFlip()?.flipPrev();
  // };

  const onPage = (e) => {
    setPage(e.data);
  };

  // useEffect(() => {
  //   if (flipBookRef.current) {
  //     setTotalPage(getPageFlip()?.getPageCount());
  //   }
  // }, []);

  return (
    <div className="w-full max-w-4xl">
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPage}
        className="demo-book"
        ref={flipBookRef}
      >
        <BookCover>Serendipitous Connections</BookCover>
        <BookPage number={1}>
          Welcome to a journey of unexpected encounters...
        </BookPage>
        <BookPage number={2}>
          Take a photo and become part of the story...
        </BookPage>
        <BookPage number={3}>
          Discover where you are in the grand tapestry of connections...
        </BookPage>
        <BookCover>The Beginning of Your Adventure</BookCover>
      </HTMLFlipBook>
      {/* <div className="container mt-4 flex justify-between items-center">
        <button 
          type="button" 
          onClick={prevButtonClick}
          className="bg-primary text-background px-4 py-2 rounded"
        >
          Previous page
        </button>
        <span className="text-text">
          [{page + 1} of {totalPage}]
        </span>
        <button 
          type="button" 
          onClick={nextButtonClick}
          className="bg-primary text-background px-4 py-2 rounded"
        >
          Next page
        </button>
      </div> */}
    </div>
  );
}