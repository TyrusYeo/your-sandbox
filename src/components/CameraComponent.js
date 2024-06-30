"use client";

import { useRef, useState, useCallback } from 'react'
import Webcam from 'react-webcam'

export default function CameraComponent() {
  const webcamRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(null)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
  }, [webcamRef])

  return (
    <div className="flex flex-col items-center">
      {imgSrc ? (
        <img src={imgSrc} alt="captured" className="rounded-lg shadow-lg mb-4" />
      ) : (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded-lg shadow-lg mb-4"
        />
      )}
    </div>
  )
}