import React from "react";
import { useState, useEffect, useRef } from "react";
import "../App.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState(""); // 'success' or 'error'
  const navigate=useNavigate();
  const showAlert = (message, type) => {
    setAlertMsg(message);
    setAlertType(type);
    setTimeout(() => {
      setAlertMsg("");
      setAlertType("");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      username: user,
      password: pwd,
    };

    if (formData.username && formData.password) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_PROXY_URL}/auth`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials:true
          }
        );
        localStorage.setItem("accessToken",response.data.accessToken)
        toast.success(`Welcome Back ${user}`);
        navigate("/dashboard")
      } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error(err);
        }
      }
    } else {
      toast.error("username and password are required!");
    }
  };
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />

      <form
        onSubmit={handleSubmit}
        className="h-[30rem] rounded-2xl bg-amber-400 border-2 border-solid border-gray-600/60 flex flex-col justify-center  items-center space-y-4 w-full max-w-sm"
      >
        <h4 className="font-mono text-4xl">Login</h4>
        <div className="flex items-center space-x-2 font-mono">
          <label htmlFor="username" className="text-xl">
            Username:
          </label>
          <input
            id="username"
            className="border-gray-500 bg-amber-50 p-3 rounded-2xl"
            onChange={(event) => setUser(event.target.value)}
            placeholder="type your Username..."
            value={user}
            type="text"
            name="user"
          />
        </div>
        <div className="flex items-center space-x-2 font-mono">
          <label htmlFor="pwd" className="text-xl">
            Password:
          </label>
          <input
            id="pwd"
            onChange={(event) => setPwd(event.target.value)}
            value={pwd}
            placeholder="type your Password..."
            type="password"
            name="pwd"
            className=" bg-amber-50 p-3 rounded-2xl"
          />
        </div>
        <button
          className=" cursor-pointer rounded-xl mt-3  w-[10rem] p-4 bg-black text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
