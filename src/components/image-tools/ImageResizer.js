import React from 'react'

import FileUploader from "../FileProcessor";

function ImageResizer() {
  return (
    <div className="h-[560px] sm:h-[800px] flex flex-col items-center py-32  bg-gray-100">
      <h1 className="text-xl sm:text-5xl font-extrabold sm:font-bold mb-6 text-gray-800">Resize IMAGE</h1>
      <p className="mb-6 text-xs px-4 sm:text-2xl  text-center">Resize JPG, PNG, SVG or GIF by defining new height and width pixels.Change image dimensions in bulk.</p>
      <FileUploader
        title="Select Image"            
        inputAccept="image"                   
        fileTypeLabel="image"              
        downloadButtonText="Download Resized Image"  
      />
      
    </div>
  );
}


export default ImageResizer
