import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import Alert from '@mui/material/Alert';

const Registration = () => {

    let [formData, setFormData] =useState({
        fullname: "",
        email: "",
        password: ""
    })

    let [error, setError] = useState({
        fullname: "",
        emaile: "",
        passworde: ""
    })

  let handleForm = (e) => {

    let {name, value} = e.target

    setFormData({...formData, [name]: value})
    
    setError({...error, [name]: ""})
      
      // if(e.target.name ==="fullname"){
      //     setFormData({...formData, fullname:e.target.value})
      // }
      
      // if(e.target.name ==="email"){
      //     setFormData({...formData, email:e.target.value})
      // }
      // if(e.target.name ==="password"){
      //     setFormData({...formData, password:e.target.value})
      // }
  };


  let handleClick = () => {
    if(formData.fullname === ""){
        setError({...error, fullname: "Name Requerd"})
    }else if(formData.email === ""){
        setError({...error, email: "Email Requerd"})
    }else if(formData.password === ""){
        setError({...error, password: "Password Requerd"})
    }
  };

  return (
    <div className="container text-center">
      <Header>
        <Heading
          as="h2"
          className="font-non font-bold text-4xl"
          title="Get started with easily register"
        />
        <SubHeading as="p" title="Free register and you can enjoy it" />
      </Header>
      <div className="flex flex-col items-center gap-6">
        <InputBox
          className="w-[368px]"
          label="Full Name"
          variant="outlined"
          textChange={handleForm}
          type="text"
          name="fullname"
        />

        {error.fullname &&
        <Alert className="w-[370px]" variant="filled" severity="error">{error.fullname}</Alert>
        }
        <InputBox
          className="w-[368px]"
          label="Email"
          variant="outlined"
          textChange={handleForm}
          type="email"
          name="email"
        />
        {error.email &&
        <Alert className="w-[370px]" variant="filled" severity="error">{error.email}</Alert>
        }
        <InputBox
          className="w-[368px]"
          label="Password"
          variant="outlined"
          textChange={handleForm}
          type="password"
          name="password"
        />
        {error.password &&
        <Alert className="w-[370px]" variant="filled" severity="error">{error.password}</Alert>
        }
        <button
          onClick={handleClick}
          className="bg-primary py-3 px-[154px] rounded-full text-white cursor-pointer"
        >
          Sign Up
        </button>
      </div>
      <div>
        <h3 className="font-non font-normal text-sm mt-9">
          Already have an account ?{" "}
          <Link className="text-[#EA6C00] font-bold" to="/login">
            Sign In
          </Link>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Registration;
