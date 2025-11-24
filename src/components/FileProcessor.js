import React, { useState, useRef } from "react";

function FileUploader({
  title = "Select File",
  fileTypeLabel = "file",
}) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [convertedFileURL, setConvertedFileURL] = useState(null);
  const [message, setMessage] = useState("");
  const [conversionType, setConversionType] = useState("image-to-png");
  const dropRef = useRef(null);

  const handleFileChange = (input) => {
    const selectedFile = input?.target?.files?.[0] || input;
    if (!selectedFile) return;
    setFile(selectedFile);
    setReady(false);
    setConvertedFileURL(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFileChange(e.dataTransfer.files[0]);
  };

  const handleConvert = async () => {
    if (!file) return alert("Please select a file first!");

    setLoading(true);
    setMessage("");
    setReady(false);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("conversionType", conversionType);

    try {
      const res = await fetch("http://localhost:5000/process-file", {
        method: "POST",
        body: formData,
      });

      const contentType = res.headers.get("Content-Type") || "";
      if (contentType.includes("application/json")) {
        const data = await res.json();
        setMessage(data.result || "No message from server");
      } else {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setConvertedFileURL(url);
        setReady(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("Error occurred while processing.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!convertedFileURL || !file) return;
    const extMap = {
      "pdf-to-word": ".docx",
      "word-to-pdf": ".pdf",
      "image-to-png": ".png",
      "image-to-jpg": ".jpg",
    };
    const ext = extMap[conversionType] || ".out";
    const a = document.createElement("a");
    a.href = convertedFileURL;
    a.download = `converted_${file.name.replace(/\.[^/.]+$/, "")}${ext}`;
    a.click();
  };

  return (
    <div className="py-8 text-center">
      {!file && (
        <>
          <input
            type="file"
            id="fileInput"
            accept=".png,.jpg,.jpeg,.pdf,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="fileInput"
            className="bg-red-600 hover:bg-red-700 text-white py-4 px-14 rounded-2xl cursor-pointer"
          >
            {title}
          </label>

          <div
            ref={dropRef}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="mt-6 border-4 border-dashed border-gray-300 hover:border-red-500 rounded-xl py-16 bg-gray-50 text-gray-500 font-medium text-lg cursor-pointer transition-all duration-300 hover:shadow-lg"
          >
            Drag & Drop your {fileTypeLabel} here
          </div>
        </>
      )}

      {file && (
        <div className="mt-6">
          <p className="text-gray-700 font-medium mb-4">Selected file: {file.name}</p>

          <select
            value={conversionType}
            onChange={(e) => setConversionType(e.target.value)}
            className="border rounded px-3 py-2 mb-4"
          >
            <option value="image-to-png">Convert to PNG</option>
            <option value="image-to-jpg">Convert to JPG</option>
            <option value="pdf-to-word">PDF → Word</option>
            <option value="word-to-pdf">Word → PDF</option>
          </select>

          <div>
            <button onClick={handleConvert} className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-10 rounded-lg">
              Convert Now
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center mt-4">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
          <p className="text-gray-700 mt-3">Processing your {fileTypeLabel}...</p>
        </div>
      )}

      {ready && (
        <div className="mt-6">
          <button onClick={handleDownload} className="bg-green-600 hover:bg-green-700 text-white py-3 px-10 rounded-lg">
            Download Converted File
          </button>
        </div>
      )}

      {message && <p className="mt-6 text-gray-700">{message}</p>}
    </div>
  );
}

export default FileUploader;
