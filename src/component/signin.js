// LoginPage.jsx
import React from "react";
import Navbar from "./Navbar";

const LoginPage = () => {
  
  return (<>
  <Navbar />
    <div className="flex items-center justify-center h-[88vh] bg-gray-100 ">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Login
        </h2>
        <form >
          <div className="mb-4">
            <label htmlFor="UserName" className="block mb-2 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Username"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green rounded-lg hover:bg-green-2 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
