import React, { useState } from "react";
import "./Apps.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  const [visible, setvisible] = useState(false);

  const setToggle = () => {
    setvisible(!visible)
  };
  return (
    <div>
      <div className="App">
        <div className={!visible ? "sidebar show-navbar" : "sidebar"}>
          <NavBar />
        </div>
        <div className="nav-button" onClick={setToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className={`main-content ${visible ? "full-width" : ''}`}>
          <div className="content">
            <Switch>
              <Route component={HomePage} exact path="/" />
              <Route component={AboutPage} exact path="/about" />
              <Route component={PortfolioPage} exact path="/portfolios" />
              <Route component={BlogPage} exact path="/blogs" />
              <Route component={ContactPage} exact path="/contact" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
