import React from "react";
import FileUploader from "../FileProcessor";

function PdfCompressor() {
  return (
    <div className="h-[560px] sm:h-[800px] flex flex-col items-center py-32  bg-gray-100">
      <h1 className="text-xl sm:text-5xl font-extrabold sm:font-bold mb-6 text-gray-800">Compress PDF file</h1>
      <p className="mb-6 text-xs px-4 sm:text-2xl  text-center">Reduce file size while optimizing for maximum PDF quality.</p>
      <FileUploader
        title="Select PDF To Compress"            
        inputAccept="application/pdf"               
        fileTypeLabel="pdf file"              
        downloadButtonText="Download Compressed PDF"  
      />
    </div>
  );
}

export default PdfCompressor;
