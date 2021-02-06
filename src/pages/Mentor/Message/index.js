import React, { useState } from "react";
import "./styles.scss";

const getMessageClass = (type, isSelf) => {
  let messageClass = "chat-message";
  if (type === "action") {
    messageClass += " chat-message-action";
  }

  // condition for self or not
  messageClass += isSelf ? " chat-message-self" : " chat-message-other";
  return messageClass;
};

export default ({ message, type, isSelf }) => {
  const [isMessageActionsMenuOpen, setMessageActionsMenu] = useState(false);
  const handleMouseOver = () => {
    if (type !== "action") {
      setMessageActionsMenu(true);
    }
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      className={getMessageClass(type, isSelf)}
      onMouseLeave={() => {
        setMessageActionsMenu(false);
      }}
    >
      {message}
      {isMessageActionsMenuOpen && (
        <label class="dropdown">
          <i className="fa fa-chevron-down actions-dropdown-trigger" />
          <input type="checkbox" className="dd-input" id="test" />

          <ul className="dd-menu">
            <li>
              <i class="fa fa-reply"></i> Reply{" "}
            </li>
            <li>
              {" "}
              <i class="fa fa-edit"></i> Edit
            </li>
            <li>
              {" "}
              <i class="fa fa-remove"></i> Remove....
            </li>
            <li>
              {" "}
              <i class="fa fa-copy"></i> Copy
            </li>
            <li>
              {" "}
              <i class="fa fa-smile-o"></i> Add Reaction
            </li>
            <li>
              {" "}
              <i class="fa fa-bars"></i> Quote
            </li>
          </ul>
        </label>
      )}
    </div>
  );
};
