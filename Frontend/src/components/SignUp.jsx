import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Login from "./Login";

function SignUp() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success("Signup Successfully");
        navigate("/");
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#ffe4e6] z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 relative mx-2">
        {/* Close button outside the form */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-xl text-gray-400 hover:text-gray-700"
          onClick={() => navigate("/")}
        >
          ✕
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="font-bold text-2xl text-center text-pink-600 mb-2">Create Account</h2>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && <span className="text-sm text-red-500">Name is required</span>}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500">Email is required</span>}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-sm text-red-500">Password is required</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200"
          >
            Sign Up
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                className="text-pink-500 hover:text-pink-600 underline"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;