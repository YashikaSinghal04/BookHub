import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 to-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-md text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Welcome to Bookstore!</h1>
        <p className="text-lg text-gray-700 mb-6">
          To login, please return to the homepage.<br />
          Click the button below to go back and access your account.
        </p>
        <button
          className="bg-pink-500 text-white px-6 py-2 rounded-md text-lg font-semibold shadow hover:bg-pink-700 transition"
          onClick={() => navigate("/")}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}

export default SignUp;