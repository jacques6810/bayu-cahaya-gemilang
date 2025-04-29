import React from "react";
import Navbar from "../Navbar";
import "../../App.css";

function Loading() {
  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-screen bg-gray-200 animate-pulse">
        <Navbar />

        {/* Background Skeleton */}
        <div className="absolute w-full h-full bg-gray-300 object-cover blur-sm"></div>
        <div className="absolute w-full h-full bg-black opacity-50"></div>
      </div>
    </div>
  );
}

export default Loading;
