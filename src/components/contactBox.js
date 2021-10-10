import React, { useState } from "react";
import "./contactBox.css";
import QRCode from "qrcode.react";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactBox = ({ iconName, link }) => {
  const [show, setShow] = useState(false);

  const [linkChange, setLinkChange] = useState(false);
  return (
    <>
      <CSSTransition in={linkChange} timeout={300} classNames="linkChange">
        <div className="contactBox">
            <a href={link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={iconName}
            className="icons"
            size="4x"
            onMouseOver={() => setLinkChange(true)}
            onMouseLeave={() => setLinkChange(false)}
          ></FontAwesomeIcon>
          </a>
          <button
            className="followBtn"
            onClick={() => setShow((state) => !state)}
            style={
              show
                ? { backgroundColor: "white", color: "darkblue" }
                : { backgroundColor: "darkblue", color: "white" }
            }
          >
            {show ? "Back" : "QR Code"}
          </button>
        </div>
      </CSSTransition>
      <CSSTransition
        in={show}
        timeout={300}
        classNames="scrollDown"
        unmountOnExit
      >
        <div
          className="background"
          variant="primary"
          dismissibleonClose={() => setShow(false)}
        >
          <QRCode
            value={link}
            size={80}
            className="QRcode"
            fgColor="white"
            bgColor="darkblue"
          />
        </div>
      </CSSTransition>
    </>
  );
};

export default ContactBox;
