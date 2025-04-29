import React from "react";
import "../../App.css";

function Error({ message }) {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center animate-fade-in">
        {/* Error Icon */}
        <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <svg
            className="h-10 w-10 text-red-500 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Gagal Memuat Data
        </h2>
        <p className="text-gray-600 mb-6">{message}</p>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 text-base bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
