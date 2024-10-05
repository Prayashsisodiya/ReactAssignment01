import React from 'react'
import '../App.css'
export default function Four({images}) {
  return (
    <>
    <h1>Task 4  </h1>
    <div className="gallery">
        
    <div className="gallery-grid">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  </div>
  </>

  )
}
