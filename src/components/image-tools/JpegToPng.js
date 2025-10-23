import React from 'react'


import FileUploader from "../FileProcessor";

function JpegToPng() {
  return (
    <div className="h-[560px] sm:h-[800px] flex flex-col items-center py-32 bg-gray-100">
      <h1 className="text-xl sm:text-5xl font-extrabold sm:font-bold mb-6 text-gray-800">Convert your JPEG to PNG in a snap.</h1>
      <p className="mb-6 text-xs px-4 sm:text-2xl  text-center">Convert to PNG in seconds with the Easy Convert Tools, free online JPG to PNG converter..</p>
      <FileUploader
              title="Select Jpeg Image"            
              inputAccept="image/jpeg"              
              fileTypeLabel="image"              
              downloadButtonText="Download PNG"  
            />
    </div>
  );
}

export default JpegToPng
