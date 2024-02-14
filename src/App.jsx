import { useState } from "react";
import "./App.css";
/* img */
import LogoImg from "./assets/images/logo.svg";
import SubmitIcon from "./assets/images/icon-arrow.svg";
import ErrorIcon from "./assets/images/icon-error.svg";

function App() {
  const [currEmail, setCurrEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmail(currEmail)) {
      setValidEmail(false);
      return;
    }

    setValidEmail(true);
  };

  return (
    <>
      <div className="main-container">
        <div className="content-container">
          <img className="logo-img" src={LogoImg} alt="logo img"></img>
          <div className="non-logo-container">
            <div className="coming-soon-title">
              We're <span className="coming-soon-title-black">coming soon</span>
            </div>
            <div className="coming-soon-text">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </div>
            {validEmail ? (
              <form className="email-container" action="#">
                <input
                  id="email"
                  className="email"
                  placeholder="Email Address"
                  onChange={(e) => setCurrEmail(e.target.value)}
                  required
                ></input>
                <button
                  id="submit-button"
                  className="submit-button"
                  type="submit"
                  onClick={handleSubmit}
                >
                  <img
                    className="submit-icon"
                    src={SubmitIcon}
                    alt="submit arrow icon"
                  ></img>
                </button>
              </form>
            ) : (
              <form className="email-container" action="#">
                <input
                  id="email"
                  className="email error-email"
                  placeholder="Email Address"
                  onChange={(e) => setCurrEmail(e.target.value)}
                  required
                ></input>
                <button
                  id="submit-button"
                  className="submit-button"
                  type="submit"
                  onClick={handleSubmit}
                >
                  <img
                    className="submit-icon"
                    src={SubmitIcon}
                    alt="submit arrow icon"
                  ></img>
                </button>
                <img
                  className="error-icon"
                  src={ErrorIcon}
                  alt="error icon"
                ></img>
                <div className="error-message">
                  Please provide a valid email
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="hero-img"></div>
      </div>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/exchyphen/" target="_blank">
            exc
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
