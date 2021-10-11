import React, { useState } from "react";
import "./card.css";
import { CSSTransition } from "react-transition-group";

const Card = () => {
    const [rotate, setRotate] = useState(true);
  const [rotate2, setRotate2] = useState(false);
  return (
    <>
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
            My name is <strong>Gu Jiaqi</strong>. I am studying at the Hong Kong
            Polytechnic University. I have finished my undergraduate study and
            am now a graduate student majoring in information technology. I
            don't have any special hobbies.Although I'm full of interest in many
            things. My personality tends to be introverted, but sometimes I'm
            too enthusiastic with familiar people, which is really a big problem
            and distresses me. I'm cautious and often weigh things over and over
            again, but this also makes it difficult for me to make decisions
            sometimes.
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
            My undergraduate major is software engineering. I am now a graduate
            student, majoring in information technology. Since I went to
            graduate school after finishing undergraduate course, I have no work
            experience. I hope I can find a good job afterwards...
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
    </>
  );
};

export default Card;
