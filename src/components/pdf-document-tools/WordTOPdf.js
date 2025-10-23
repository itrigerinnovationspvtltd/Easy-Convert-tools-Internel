import React from 'react'
import FileUploader from "../FileProcessor";

function WordTOPdf() {
  return (
    <div className="h-[560px] sm:h-[800px] flex flex-col items-center py-32  bg-gray-100">
      <h1 className="text-xl sm:text-5xl font-extrabold sm:font-bold mb-6 text-gray-800">Convert WORD to PDF</h1>
      <p className="mb-6 text-xs px-4 sm:text-2xl  text-center">Make DOC and DOCX files easy to read by converting them to PDF.</p>
      <FileUploader
        title="Select Word File To Convert"            
        inputAccept=".doc,.docx,application/msword,application"               
        fileTypeLabel="Word file"              
        downloadButtonText="Download PDF file"  
      />
    </div>
  );
}




export default WordTOPdf
