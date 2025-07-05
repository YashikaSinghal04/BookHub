import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => {
    console.log(data);
    // Handle successful form submission here
  }
  
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    // Close the modal
    document.getElementById("my_modal_3").close();
    // Redirect to home page
    navigate('/');
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button 
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handleClose}
          >
            ✕
          </button>

          {!showSignup ? (
            // Login Form
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-lg">Login</h3>

              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br/>
                {errors.email && <span className="text-sm text-red-500">Email is required</span>}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br/>
                {errors.password && <span className="text-sm text-red-500">Password is required</span>}
              </div>

              <div className="flex justify-around mt-4">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">Login</button>
                <p>
                  Not registered?{' '}
                  <button 
                    type="button"
                    onClick={() => setShowSignup(true)}
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Signup
                  </button>
                </p>
              </div>
            </form>
          ) : (
            // Signup Form
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-lg">SignUp</h3>

              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br/>
                {errors.name && <span className="text-sm text-red-500">Name is required</span>}
              </div>

              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br/>
                {errors.email && <span className="text-sm text-red-500">Email is required</span>}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br/>
                {errors.password && <span className="text-sm text-red-500">Password is required</span>}
              </div>

              <div className="flex justify-around mt-4">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">SignUp</button>
                <p>
                  Have account?{' '}
                  <button 
                    type="button"
                    onClick={() => setShowSignup(false)}
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
}

export default Login;
