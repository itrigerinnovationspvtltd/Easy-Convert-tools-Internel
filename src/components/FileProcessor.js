import React, { useState, useRef } from "react";

function FileUploader({
  // Props added to make component reusable
  title = "Select File",               
  inputAccept = "*/*",                 
  downloadButtonText = "Download File",
  fileTypeLabel = "file",              
}) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [convertedFile, setConvertedFile] = useState(null); 
  const dropRef = useRef(null); // Added for drag-and-drop events

  // Added for Convert Now button
  const [message, setMessange]= useState("");
  
      const handleClick = async ()=> {
          const res = await fetch('http://localhost:5000/run-python');
          const data = await res.json();
          setMessange(data.result);
      }

  const handleFileChange = (input) => {
    let selectedFile;

    // If input is an event (from input element)
    if (input && input.target && input.target.files) {
      selectedFile = input.target.files[0];
    } else {
      // Otherwise, assume it's a File object (from drag & drop)
      selectedFile = input;
    }

    if (!selectedFile) return;
    setFile(selectedFile);
    setLoading(true);
    setReady(false);

        setTimeout(() => {
        setConvertedFile(selectedFile);
        setLoading(false);
        setReady(true);
      }, 2000);
    
  };

  // Handle drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    handleFileChange(droppedFile);
  };

  const handleDownload = () => {
    if (!convertedFile) {
      alert("No file to download!");
      return;
    }
    const url = URL.createObjectURL(convertedFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = convertedFile.name || `converted.${fileTypeLabel}`;
    a.click();
  };

  return (
    <div className=" py-8 text-center">
      {/* Upload button */}
      {!file && (
        <div>
          <input
            type="file"
            id="fileInput"
            accept={inputAccept} // Uses prop for file type
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="fileInput"
            className="bg-red-600 hover:bg-red-700 text-base sm:text-3xl text-white  py-4 px-14 rounded-2xl cursor-pointer"
          >
           {title}
          </label>
          {/* Drag & Drop Zone */}
          <div
            ref={dropRef}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="mt-6 border-4 border-dashed border-gray-300 hover:border-red-500
                       rounded-xl py-16 bg-gradient-to-r from-white via-gray-100 to-white
                       text-gray-500 font-medium text-lg cursor-pointer transition-all duration-300
                       hover:shadow-lg"
          >
            Drag & Drop your {fileTypeLabel} here
          </div>

          <div className="pt-24 text-center">
     <button
      onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Convert Now
      </button>
      <p className="mt-4">{message}</p>
    </div>

        </div>
      )}

      {/* Loading spinner */}
      {loading && (
        <div className="flex flex-col items-center mt-4">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
          <p className="text-gray-700 mt-3">Processing your {fileTypeLabel}...</p>
        </div>
      )}

      {/* Download button */}
      {ready && (
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-800 font-medium mb-2">
            File ready: {file.name}
          </p>
          <button
            onClick={handleDownload}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-14 rounded-2xl"
          >
            {downloadButtonText}
          </button>
        </div>
      )}
    </div>
  );
}

export default FileUploader;
