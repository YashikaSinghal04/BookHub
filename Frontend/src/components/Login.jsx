import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

function Login({ open, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();

  const handleClose = () => {
    console.log("Close button clicked");
    if (onClose) onClose();
    const dialog = document.getElementById("my_modal_3");
    if (dialog && dialog.open) dialog.close();
    navigate('/');
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/login", {
        email: data.email,
        password: data.password
      });
      if (res.data) {
        toast.success('Loggedin Successfully!');
        setAuthUser(res.data.user); // Update authUser context
        handleClose();
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Error: Something went wrong");
      }
    }
  };

  useEffect(() => {
    const dialog = document.getElementById("my_modal_3");
    if (!dialog) return;
    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
    // Cleanup: close dialog if component unmounts
    return () => {
      if (dialog.open) dialog.close();
    };
  }, [open]);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-full max-w-md p-6 md:p-8 rounded-2xl shadow-2xl bg-white relative mx-2">
          {/* Close button outside the form */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-xl text-gray-400 hover:text-gray-700"
            onClick={handleClose}
          >
            ✕
          </button>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h3 className="font-bold text-2xl text-center text-pink-600 mb-2">Login</h3>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">Email is required</span>}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-sm text-red-500">Password is required</span>}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-4">
              <button type="submit" className="w-full md:w-auto bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 transition">Login</button>
              <p className="text-sm mt-2 md:mt-0">
                Not registered?{' '}
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </button>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;