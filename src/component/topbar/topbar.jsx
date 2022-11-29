import React from "react";

const TopBar = () => {
  return (
    <div className="topbar-chat">
      <div className="row">
        <div className="col-auto">
          <img className="image-user-chat" src="" alt="" />
        </div>
        <div className="col-auto">
          <div>
            <h6>username</h6>
          </div>
          <div>
            <span style={{ color: "#7E98DF" }}>Online</span>
          </div>
        </div>
        <div
          className="col button-dropdown-chat-custom"
          style={{ textAlign: "right", marginTop: "10px" }}
        >
          <button
            classname="button-dropdown-chat-custom"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            id="dropdownmenu"
          >
            <img src={require("../../assets/images/Profile menu.png")} alt="" />
          </button>
          <div
            className="dropdown-menu dropdown-menu-chat-custom"
            aria-labelledby="dropdownmenu"
          >
            <div>
              <div className="row">
                <div className="col-auto">
                  <img
                    src={require("../../assets/images/Vector (2).png")}
                    alt=""
                  />
                </div>
                <div className="col-auto">
                  <Link
                    to={`/callhistory`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span>Call</span>
                  </Link>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-auto">
                  <img
                    src={require("../../assets/images/Union (2).png")}
                    alt=""
                  />
                </div>
                <div className="col-auto">
                  <span>Delete chat history</span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-auto">
                  <img
                    src={require("../../assets/images/Union (1).png")}
                    alt=""
                  />
                </div>
                <div className="col-auto">
                  <span>Mute notification</span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-auto">
                  <img
                    src={require("../../assets/images/Search (1).png")}
                    alt=""
                  />
                </div>
                <div className="col-auto" style={{ color: "white" }}>
                  <input
                    style={{ color: "white" }}
                    className="input-search-chat"
                    type="text"
                    placeholder="Type your message..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
