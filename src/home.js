import React from "react";
import "./home.css";
import Arror from "./components/arror";
import ContactBox from "./components/contactBox";
import Card from "./components/card"
import logo from "./img/gjq01.png";
import face from "./img/face.jpg";
import name from "./img/name.png";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWeibo } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="LeftElements">
          <div className="left"></div>
          <img src={logo} className="personalLogo" alt="ing"></img>
          <br />
          <Arror color={"rgb(0,0,128)"} text={"Home"} />
          <br />
            <Arror color={"blue"} text={"Page Intro"} />
          <br />
          <Arror color={"rgb(0,0,128)"} text={"to be finished"} />
          <br />
          <Arror color={"blue"} text={"Page4 waiting"} />
        </div>

        <div className="RightElements">
          <div className="RightElementsUp">
            <div className="RightElementsUpLeft">
              <img src={name} className="nameLogo" alt="ing"></img>
              <div className="besideNameLogo">
                <div className="coverPic"></div>
                <img src={face} className="personalImg" alt="ing"></img>
              </div>
            </div>
            <div className="RightElementsUpRight">
              <Card/>
            </div>
          </div>
          <div className="RightElementsMiddle">
            <div className="personalInfoTitle">
              <div className="personalInfoTitle01">Personal</div>
              <div className="personalInfoTitle011">Personal</div>
              <div className="personalInfoTitle02">Info</div>
              <div className="personalInfoTitle022">Info</div>
            </div>
            <table className="personalInfoTable">
              <tr>
                <td>Occupation</td>
                <td>Student</td>
                <td>School</td>
                <td>PolyU</td>
                <td>Hobby</td>
                <td>Design?</td>
                <td>Programming Ability</td>
                <td>low</td>
              </tr>
              <tr>
                <td>Major</td>
                <td>Computing</td>
                <td>Programme</td>
                <td>Information Technology</td>
                <td>Other...</td>
              </tr>
            </table>
          </div>
          <div className="RightElementsDown">
            <div className="contactMe2">Contact Me</div>
            <div className="RightElementsDownInside">
              <ContactBox iconName={faTwitter} link={"https://twitter.com/"} />
              <ContactBox iconName={faGithub} link={"https://github.com/"} />
              <ContactBox
                iconName={faFacebook}
                link={"https://www.facebook.com/"}
              />
              <ContactBox iconName={faWeibo} link={"https://weibo.com/hk/"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
