import React from "react";
import "./messenger.css";

const Messanger = () => {
  return (
    <section>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper"></div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper"></div>
        </div>
      </div>
    </section>
  );
};

export default Messanger;
