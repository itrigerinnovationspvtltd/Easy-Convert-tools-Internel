
import React from 'react'
import FileUploader from "../FileProcessor";

function PdfTOWord() {
  return (
    <div className="h-[560px] sm:h-[800px] flex flex-col items-center py-32  bg-gray-100">
      <h1 className="text-xl sm:text-5xl font-extrabold sm:font-bold mb-6 text-gray-800">PDF to WORD Converter</h1>
      <p className="mb-6  text-xs px-4 sm:text-2xl text-center">Convert your PDF to WORD documents with incredible accuracy.</p>
      <FileUploader
        title="Select PDF To Convert"            
        inputAccept="application/pdf"               
        fileTypeLabel="pdf file"              
        downloadButtonText="Download word file"  
      />
    </div>
  );
}





export default PdfTOWord
