"use client";

import { useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import CameraComponent from './CameraComponent'
import MapComponent from './MapComponent'

export default function BookComponent() {
  const [pageNumber, setPageNumber] = useState(0)

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
        onFlip={(e) => setPageNumber(e.data)}
        className="book-template"
      >
        <div className="page bg-primary p-8">
          <h1 className="text-6xl font-arizona text-text">Welcome</h1>
          <p className="text-text text-xl">Flip the page to start your journey...</p>
        </div>
        <div className="page bg-secondary p-8">
          {/* <h2 className="text-4xl font-semibold text-background mb-4">Take a Photo</h2> */}
          <CameraComponent />
        </div>
        <div className="page bg-accent p-8">
          <h2 className="text-4xl font-semibold text-text mb-4">Your Location</h2>
          <MapComponent />
        </div>
      </HTMLFlipBook>
      <p className="mt-4 text-center text-text">Page {pageNumber + 1} / 3</p>
    </div>
  )
}