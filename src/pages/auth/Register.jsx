import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import Loader from "../../components/loader/Loader";
import { useLoading } from "../../context/loading";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const { isLoading, setLoadingState } = useLoading();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/register`;
      setLoadingState(true);
      const res = await axios.post(url, {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
        setLoadingState(false);
      } else {
        toast.error(res.data.message);
        setLoadingState(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
      setLoadingState(false);
    }
  };
  return (
    <Layout>
      <div
        className="wrapper"
        style={{
          backgroundImage: 'url("/register/bg-registration-form-1.jpg")',
        }}
      >
        <div className="inner mt-40 max-sm:mt-16">
          <div className="image-holder">
            <img src="/banner/banner12.jpg" alt="reg-girl-img" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Registration Form</h3>
            <div className="form-group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First Name"
                className="form-control"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
              />
            </div>

            <div className="form-wrapper">
              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                required
              />
              <i className="zmdi zmdi-email" />
            </div>

            <div className="form-wrapper">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
              <i className="zmdi zmdi-email" />
            </div>

            <div className="form-wrapper">
              <i className="zmdi zmdi-caret-down" style={{ fontSize: 17 }} />
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />
              <i className="zmdi zmdi-lock" />
            </div>

            <div className="form-wrapper">
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                required
              />
              <i className="zmdi zmdi-email" />
            </div>

            <div className="form-wrapper">
              <input
                type="text"
                placeholder="What is your favorite sports"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                required
              />
              <i className="zmdi zmdi-email" />
            </div>

            <button className="reg-btn w-full">
              {isLoading ? (
                <Loader
                  text={"Registering..."}
                  color={"#ffffff"}
                  loading={isLoading}
                />
              ) : (
                "Register"
              )}

              <i className="zmdi zmdi-arrow-right" />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
