import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <div className="menuSuperior">
        <img className="ironhackLogo" src="./assets/images/ironhack-logo.svg" />
        <img className="menuTop" src="./assets/images/menu-top.svg" />
        <div class="menuTexto">
          <h1>Say hello to ReactJS</h1>
          <h3>
            You will learn a Frontend framework from scratch, to become a Ninka
            Developer.
          </h3>
          <a href="#">Awesome!</a>
        </div>
      </div>

      <div>
          <img src="./assets/images/icon1.png" />
          <h3>Declarative</h3>
          <h5>React makes it painless to create interactive UIs.</h5>
        </div>
        <div>
        <img src="./assets/images/icon2.png" />
          <h3>Components</h3>
          <h5>Build encapsulated components that manage their state.</h5>
        </div>
        <div>
        <img src="./assets/images/icon3.png" />
          <h3>Single-Way</h3>
          <h5>A set of immutable values are passed to the components</h5>
        </div>
        <div>
        <img src="./assets/images/icon4.png" />
          <h3>JSX</h3>
          <h5>Statically-typed designed to run on modern browsers.</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
