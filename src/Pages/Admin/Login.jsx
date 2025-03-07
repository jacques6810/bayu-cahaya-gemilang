import React from "react";
import LogoBCG from "../../assets/Logo BCG.png";
import "../../App.css";

function Login() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md mx-5">
        <div className="flex justify-center mb-6">
          <img src={LogoBCG} alt="Logo" className="h-16" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Admin</h1>
        <p className="text-sm text-center mb-6 text-red-500">
          You must be an admin to access this section.
        </p>
        <form className="flex flex-col">
          <label htmlFor="username" className="mb-2 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <label htmlFor="password" className="mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="mb-6 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition duration-300"
          >
            <a href="/admin/dashboard">Login</a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
