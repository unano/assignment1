import React, { useState } from "react";
import pic01 from "./img/intro01.png";
import pic02 from "./img/intro02.png";
import logo from "./img/gjq01.png";
import sample01 from "./img/sample01.png";
import sample02 from "./img/sample02.png";
import sample03 from "./img/sample03.jpeg";
import sample04 from "./img/sample04.png";
import sample05 from "./img/sample05.png";
import sample06 from "./img/sample06.png";
import sample07 from "./img/sample07.png";
import sample08 from "./img/sample08.png";
import name2 from "./img/name2.png";
import "./introduce.css";
import Card from "./components/card";
import { useHistory } from "react-router-dom";

const Introduce = () => {
    const history = useHistory();
    const back = () =>{
        history.push("/");
    }
  return (
    <>
      <div className="jumbotron">
        <div className="introBody">
        <button className="introBackBtn" onClick={back}>Back</button>
          <h1 className="introHead">Introduction</h1>
          <p>My home page interface is shown below:</p>
          <img className="introImg01" src={pic01} alt="img01"></img>
          <p>
            Let me split it into different part and explain them respectively.
          </p>
          <img className="introImg01" src={pic02} alt="img02"></img>
          <strong>
            <h2>Part 1</h2>
          </strong>
          <p>
            The icon in part 1 is like the logo of the website (just like google
            logo):
          </p>
          <img className="introImg02" src={logo} alt="logo"></img>
          <img className="introImg02" src={sample01} alt="sample01"></img>
          <p>
            This logo represents the abbreviation "GJQ" of my name "Gu Jiaqi".
            After taking the logo apart, you can see the three letters "GJQ":
          </p>
          <img className="introImg02" src={sample02} alt="sample02"></img>
          <strong>
            <h2>Part 2</h2>
          </strong>
          <p>
            This logo represents the abbreviation "GJQ" of my name "Gu Jiaqi".
            After taking the logo apart, you can see the three letters "GJQ":
          </p>
          <img className="introImg03" src={sample03} alt="sample03"></img>
          <p>
            Here, The first button "home" leads to my home page, and the second
            button "page intro" leads to the current introduction page. The
            following two buttons do not lead to any interface. In the future,
            if I have the opportunity, I will continue to improve the interface
            that the following two buttons may lead to (because now I lack
            personal data that can be added).
          </p>
          <strong>
            <h2>Part 3</h2>
          </strong>
          <p>
            This is my full English name "Gu Jiaqi", which is also displayed in
            the form of logo, but it is placed vertically on the web page, which
            may not be easy to identify...
          </p>
          <img className="introImg02" src={name2} alt="name2"></img>
          <strong>
            <h2>Part 4</h2>
          </strong>
          <p>
            Part 4 is my picture. The photos are blurred, not because they
            haven't been loaded, but because the resolution of the photos is
            low.
          </p>
          <strong>
            <h2>Part 5</h2>
          </strong>
          <p>
            The card has two side, click "next" and "back" to see the content on
            each side.
          </p>
          <img className="introImg021" src={sample04} alt="sample04"></img>
          <img className="introImg021" src={sample05} alt="sample05"></img>
          <p>You can try by clicking "next" and "back" button below:</p>
          <div className="introContainer">
            <Card />
          </div>
          <strong>
            <h2>Part 6</h2>
          </strong>
          <p>Personal info</p>
          <img className="introImg02" src={sample06} alt="sample06"></img>
          <strong>
            <h2>Part 7</h2>
          </strong>
          <p>
            Here are several ways to contact me. When the mouse hovers over the
            logo, there will be animation effect. Clicking the logo will jump to
            the external link. For privacy reasons, the links I put are not to
            my personal account page, but just the official websites of these
            websites, mainly to show that there is no problem in the realization
            of functions. Click the "QR code" button below to display the QR
            code of these links.
          </p>
          <img className="introImg02" src={sample07} alt="sample07"></img>
          <p>QR code is mainly used to facilitate users to
            open these links with their mobile phone through QR code. You can click
            "back" to hide QR code.</p>
            <img className="introImg02" src={sample08} alt="sample08"></img>
        </div>
      </div>
    </>
  );
};

export default Introduce;
