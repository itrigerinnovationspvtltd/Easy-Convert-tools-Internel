import React from 'react'
import FileUploader from "../FileProcessor";

function PngToJpg() {

  return (
    <div className="h-[560px] sm:h-[800px] flex flex-col items-center py-32  bg-gray-100">
      <h1 className="text-xl sm:text-6xl font-extrabold sm:font-bold mb-6 text-gray-800">
Convert PNG to JPG</h1>
      <p className="mb-6 text-xs px-4 sm:text-2xl  text-center">Transform PNG images to JPG format.
Convert multiple PNG to JPG online at once.</p>
      
      {/* Reusable FileUploader with props for PNG → JPG */}
      <FileUploader
        title="Select PNG Images"            
        inputAccept="image/png"           
        fileTypeLabel="image"              
        downloadButtonText="Download JPG"  
      />
    </div>
  );
}

export default PngToJpg