import React, { useState, useEffect } from "react";
import "./edit-profile.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [image, setImage] = useState();
  const [form, setForm] = useState({
    full_name: profile.full_name,
    username: profile.username,
    phone: profile.phone,
    bio: profile.bio,
  });

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("addImage").innerHTML = fileUploaded.name;
    setImage(fileUploaded);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_user;
    axios
      .get(`http://localhost:3002/user/detail/${id}`)
      .then((res) => {
        setProfile(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_user;
    let inputForm = new FormData();
    inputForm.append("photo", image);
    axios
      .put(`http://localhost:3002/user/photo/${id}`, inputForm)
      .then((res) => {
        console.log(res.data);
        return navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_user;
    const body = {
      full_name: form.full_name,
      username: form.username,
      phone: form.phone,
      bio: form.bio,
    };
    axios
      .put(`http://localhost:3002/user/${id}`, body)
      .then((res) => {
        console.log(res.data);
        return navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <div className="container-fluid container-custom-profile">
        <div className="row">
          {profile.map((data, index) => (
            <div key={index} className="col-md-3 side-left-profile">
              <div className="row">
                <div className="col">
                  <Link to={`/profile`}>
                    <i
                      style={{ color: "#7E98DF" }}
                      className="fa fa-chevron-left"
                    ></i>
                  </Link>
                </div>
                <div className="text-center">
                  <h5 style={{ color: "#7E98DF" }}>{data.username}</h5>
                </div>
              </div>
              <div className="text-center mt-3">
                <label htmlFor="addImage" style={{ cursor: "pointer" }}>
                  <img
                    src={`http://localhost:3002/foto user/${data.photo}`}
                    alt=""
                  />
                </label>
                <input
                  className="input"
                  type="file"
                  id="addImage"
                  onChange={handleChange}
                />
                <div className="mt-3">
                  <h5>{data.full_name}</h5>
                  <span className="text-secondary">{data.username}</span>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <h5>Account</h5>
                </div>
                <div>
                  {data.phone == null ? (
                    <span>+375(29)9638433</span>
                  ) : (
                    <span>{data.phone}</span>
                  )}
                </div>

                <hr />
              </div>
              <div className="mt-4">
                <div>
                  <h6>{data.username}</h6>
                </div>
                <div>
                  <span className="text-secondary">Username</span>
                </div>
                <hr />
              </div>
              <div className="mt-4">
                <div>
                  {data.bio == null ? (
                    <h6>I'm Senior Frontend Develover from Microsoft</h6>
                  ) : (
                    <h6>{data.bio}</h6>
                  )}
                </div>
                <div>
                  <span className="text-secondary">Bio</span>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <h5>Setting</h5>
                </div>
                <div className="row mt-3">
                  <div className="col-auto">
                    <img
                      className="icon-profile"
                      src={require("../../assets/images/Union.png")}
                      alt=""
                    />
                  </div>
                  <div className="col-auto">
                    <span>Notification and Sounds</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-auto">
                    <img
                      className="icon-profile"
                      src={require("../../assets/images/Group 5.png")}
                      alt=""
                    />
                  </div>
                  <div className="col-auto">
                    <span>Privaty and Security</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-auto">
                    <img
                      className="icon-profile"
                      src={require("../../assets/images/Group 6.png")}
                      alt=""
                    />
                  </div>
                  <div className="col-auto">
                    <span>Data and Storage</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-auto">
                    <img
                      className="icon-profile"
                      src={require("../../assets/images/Chat.png")}
                      alt=""
                    />
                  </div>
                  <div className="col-auto">
                    <span>Chat settings</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-auto">
                    <img
                      className="icon-profile"
                      src={require("../../assets/images/Device.png")}
                      alt=""
                    />
                  </div>
                  <div className="col-auto">
                    <span>Devices</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-md-9 side-right-edit-profile">
            <div>
              {profile.map((data, index) => (
                <form>
                  <div className="mb-3 mt-4 form-group">
                    <label className="form-label text-secondary">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={data.full_name}
                      onChange={(e) =>
                        setForm({ ...form, full_name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 mt-4 form-group">
                    <label className="form-label text-secondary">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={data.username}
                      onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 mt-4 form-group">
                    <label className="form-label text-secondary">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={data.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 mt-4 form-group">
                    <label className="form-label text-secondary">Bio</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={data.bio}
                      onChange={(e) =>
                        setForm({ ...form, bio: e.target.value })
                      }
                    />
                  </div>
                </form>
              ))}
              <div>
                <button onClick={onSubmit} className="button-save mt-3">
                  Simpan
                </button>
                <button onClick={handleSubmit} className="button-save mt-3">
                  Simpan Photo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
