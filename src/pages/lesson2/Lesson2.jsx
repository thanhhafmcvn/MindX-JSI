import React, { state, useState } from 'react'
import ImageCard from './components/ImageCard'
const Lesson2 = () => {
    const [showImage, setShowImage] = useState(false)
  return (
    <div className="flex flex-1 items-center justify-center">
      <ImageCard imageUrl="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/671B/production/_128859362_639f0e6ef239607844f40817e5a3829730f89f01.jpg" />
    </div>
  );
}

export default Lesson2
