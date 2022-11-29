import React, { useState, useEffect } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import BottomBar from "../../component/bottombar/bottombar";

const Profile = () => {
  const [profile, setProfile] = useState([]);

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
  return (
    <section>
      <div className="container-fluid container-custom-profile">
        <div className="row">
          {profile.map((data, index) => (
            <div key={index} className="col-md-3 side-left-profile">
              <div className="row">
                <div className="col">
                  <Link to={`/chat`}>
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
                <div>
                  <img
                    src={`http://localhost:3002/foto user/${data.photo}`}
                    alt=""
                  />
                </div>
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
                <div>
                  <Link to={`/edit-profile`} style={{ textDecoration: "none" }}>
                    <span>Tap to change profile</span>
                  </Link>
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

          <div className="col-md-9 side-right-profile">
            <div className="main-chat">
              <div
                className="main-chat-chat text-center"
                style={{ paddingTop: "300px" }}
              >
                <span className="text-secondary">Please Select Chat</span>
              </div>
            </div>
            <BottomBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
