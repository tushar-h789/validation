import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Alert from "@mui/material/Alert";

const Login = () => {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let [error, setError] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    setError({ ...error, [name]: "" });
  };

  let handleClick = () => {
    if (formData.email === "") {
      setError({ ...error, email: "Email Requerd" });
    } else if (formData.password === "") {
      setError({ ...error, password: "Password Requerd" });
    }
  };

  return (
    <div className="container text-center">
      <Header>
        <Heading
          as="h2"
          className="font-non font-bold text-4xl"
          title="Login to your account!"
        />
      </Header>
      <div className="flex flex-col items-center gap-6 mt-9">
        <InputBox
          className="w-[368px]"
          label="Enter Your Email"
          variant="filled"
          textChange={handleChange}
          name="email"
        />

        {error.email && (
          <Alert className="w-[370px]" variant="filled" severity="error">
            {error.email}
          </Alert>
        )}

        <InputBox
          className="w-[368px]"
          label="Enter Your Password"
          variant="filled"
          textChange={handleChange}
          name="password"
        />

        {error.password && (
          <Alert className="w-[370px]" variant="filled" severity="error">
            {error.password}
          </Alert>
        )}

        <button
          className="bg-primary py-3 px-[120px] rounded-full text-white cursor-pointer"
          onClick={handleClick}
        >
          Login to Continue
        </button>
      </div>
      <div>
        <h3 className="font-non font-normal text-sm mt-6">
          Don’t have an account ?{" "}
          <Link className="text-[#EA6C00] font-bold" to="/">
            {" "}
            Sign up
          </Link>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Login;
