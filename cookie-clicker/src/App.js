import cookie from "./IMAGES/cookie.png";
import "./App.css";
import { useState } from "react";
import rain from "./IMAGES/raining.gif";

export default function Cookies() {
  const [theCookieCounter, setCookies] = useState(0);

  function cookieClicked() {
    console.log("clicked");
    setCookies(theCookieCounter + 1);
  }

  function CookieProductionPurchase() {}

  return (
    <div className="App container">
      <header className="header" src={rain}></header>
      <body className="body">
        <h1>Cookies Baked : {theCookieCounter}</h1>
        <img
          className="cookie"
          src={cookie}
          button
          onClick={cookieClicked}
          alt="a cookie icon"
        ></img>
      </body>
    </div>
  );
}
