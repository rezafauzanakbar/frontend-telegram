import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post(`http://localhost:3002/login`, form)
      .then((res) => {
        swal({
          title: "Login",
          text: "Login Successfully",
          icon: "success",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
            document.cookie = JSON.stringify(res.data.token.data);
            localStorage.setItem("data", JSON.stringify(res.data.token.data));
            localStorage.setItem("token", res.data.token.token);
            return navigate("/chat");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <div className="container-custom-login">
        <div className="container">
          <div className="container-main-login">
            <div className="text-center">
              <h4 style={{ color: "#7E98DF" }}>Login</h4>
            </div>
            <div className="mt-2">
              <span>Hi, welcome back</span>
            </div>
            <div>
              <form>
                <div className="mb-3 mt-4 form-group">
                  <label className="form-label text-secondary">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="telegram@gmail.com"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3 mt-4 form-group">
                  <label className="form-label text-secondary">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="*******"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                </div>
              </form>
              <div
                className="mt-2"
                style={{ textAlign: "right", color: "#7E98DF" }}
              >
                <Link
                  to={`/ForgotPassword`}
                  style={{ textDecoration: "none", color: "#7E98DF" }}
                >
                  <span>Forgot Password?</span>
                </Link>
              </div>
              <div className="mt-3">
                <button onClick={onSubmit} className="btn btn-custom-login">
                  Login
                </button>
              </div>
              <div className="mt-4 mb-4 text-center">
                <span className="text-secondary">
                  --------------- Login with ---------------
                </span>
              </div>
              <div className="mt-3">
                <button className="btn btn-custom-google">
                  <i class="fa fa-google"> Google</i>
                </button>
              </div>
              <div className="mt-4 text-center">
                <span>Don't have account?</span>{" "}
                <Link to={`/register`} style={{ textDecoration: "none" }}>
                  <span style={{ color: "#7E98DF" }}>Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
