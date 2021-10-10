import React, { useState } from "react";
import "./home.css";
import Arror from "./components/arror";
import ContactBox from "./components/contactBox";
import logo from "./img/gjq01.png";
import face from "./img/face.jpg";
import name from "./img/name.png";
import { CSSTransition } from "react-transition-group";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWeibo } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [rotate, setRotate] = useState(true);
  const [rotate2, setRotate2] = useState(false);
  return (
    <>
      <div className="homepage">
        <div className="LeftElements">
          <div className="left"></div>
          <img src={logo} className="personalLogo" alt="ing"></img>
          <br />
          <Arror color={"rgb(0,0,128)"} text={"Home"} />
          <br />
          <Arror color={"blue"} text={"Page2"} />
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
              <CSSTransition
                in={rotate}
                timeout={400}
                classNames="introCards"
                unmountOnExit
                onExited={() => {
                  setRotate2(true);
                }}
              >
                <div className="introCard">
                  <h1 className="introTitle">About Me</h1>
                  <p className="introContent">
                  My name is <strong>Gu Jiaqi</strong>. I am studying at the Hong Kong Polytechnic University. 
                  I have finished my undergraduate study and am now a graduate student majoring 
                  in information technology. I don't have any special hobbies.Although I'm full of 
                  interest in many things. My personality tends to be introverted, but sometimes 
                  I'm too enthusiastic with familiar people, which is really a big problem and distresses me.
                  I'm cautious and often weigh things over and over again, but this also makes it difficult 
                  for me to make decisions sometimes.
                  </p>
                  <button
                    className="rotateBtn"
                    onClick={() => {
                      setRotate(false);
                    }}
                  >
                    <div className="rotateBtnWord">next</div>
                  </button>
                </div>
              </CSSTransition>

              <CSSTransition
                in={rotate2}
                timeout={400}
                classNames="introCards"
                mountOnEnter={true}
                unmountOnExit
                onExited={() => {
                  setRotate(true);
                }}
              >
                <div className="introCard2">
                  <h1 className="introTitle">My Experience</h1>
                  <p className="introContent">
                  My undergraduate major is software engineering. 
                  I am now a graduate student, majoring in information technology. 
                  Since I went to graduate school after finishing undergraduate 
                  course, I have no work experience. 
                  I hope I can find a good job afterwards...
                  </p>
                  <button
                    className="rotateBtn2"
                    onClick={() => {
                      setRotate2(false);
                    }}
                  >
                    <div className="rotateBtnWord">back</div>
                  </button>
                  {/* <div className="light"></div> */}
                </div>
              </CSSTransition>
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
            <div className = "RightElementsDownInside">
            <ContactBox iconName={faTwitter} link={"https://twitter.com/"}/>
            <ContactBox iconName={faGithub} link={"https://github.com/"}/>
            <ContactBox iconName={faFacebook} link={"https://www.facebook.com/"}/>
            <ContactBox iconName={faWeibo} link={"https://weibo.com/hk/"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
