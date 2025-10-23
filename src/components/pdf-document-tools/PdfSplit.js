import React from 'react'
import FileUploader from "../FileProcessor";

function PdfSplit() {
  return (
    <div className="h-[560px] sm:h-[800px] flex flex-col items-center py-32 bg-gray-100">
      <h1 className="text-5xl font-bold mb-6 text-gray-800">Split PDF file</h1>
      <p className="mb-6 text-2xl w-1/2 text-center">Separate one page or a whole set for easy conversion into independent PDF files.</p>
      <FileUploader
        title="Select PDF To Split"            
        inputAccept="application/pdf"               
        fileTypeLabel="pdf file"              
        downloadButtonText="Download Split PDF file"  
      />
    </div>
  );
}

export default PdfSplit
