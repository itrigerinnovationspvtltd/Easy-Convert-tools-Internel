import React from 'react'
import FileUploader from "../FileProcessor";

function ImageCompressor() {
  return (
    <div className="h-[560px] sm:h-[800px] flex flex-col items-center py-32 bg-gray-100">
      <h1 className="text-xl sm:text-5xl font-extrabold sm:font-bold mb-6 text-gray-800">Image Compressor</h1>
      <p className="mb-6 text-xs px-4 sm:text-2xl  text-center">Compress JPG, PNG, SVG or GIF with the best quality and compression. Reduce the filesize of your images at once.</p>
      <FileUploader
        title="Select Image to Compress"            
        inputAccept="image"               
        fileTypeLabel="image"              
        downloadButtonText="Download Compressed Image"  
      />
    </div>
  );
}


export default ImageCompressor
