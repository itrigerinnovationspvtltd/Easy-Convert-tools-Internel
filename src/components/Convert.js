import React, { useState } from "react";

export default function Convert() {
  const [message, setMessange]= useState("");

    const handleClick = async ()=> {
        const res = await fetch('http://localhost:5000/run-python');
        const data = await res.json();
        setMessange(data.result);
    }


  return (
    <div className="pt-36 text-center">
      <h1 className="text-2xl font-bold mb-4">React + Node + Python</h1>
      <button
      onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Convert Now
      </button>
      <p className="mt-4">{message}</p>
    </div>
  );
}
