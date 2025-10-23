import React from "react";
import FileUploader from "../FileProcessor";

function PdfMerge() {
  return (
    <div className="h-[560px] sm:h-[800px] flex flex-col items-center py-32  bg-gray-100">
      <h1 className="text-xl sm:text-5xl font-extrabold sm:font-bold mb-6 text-gray-800">Merge PDF Files</h1>
      <p className="mb-6 text-xs px-4 sm:text-2xl  text-center">Combine PDFs in the order you want with the easiest PDF merger available.</p>
      <FileUploader
        title="Select PDF To Merge"            
        inputAccept="application/pdf"               
        fileTypeLabel="pdf file"              
        downloadButtonText="Download Merged PDF file"  
      />
    </div>
  );
}

export default PdfMerge;
