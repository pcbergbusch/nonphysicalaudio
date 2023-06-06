/*
 * imports of react packages
 */
import React from "react"
// import { FaUserLock } from "react-icons/fa"

/*
 * imports of implemented components and functions
 */
// import ControlArea from "./components/ControlArea"
// import ContentArea from "./components/ContentArea"

/*
 * imports of styles
 * order is important! custom styles must be imported last
 */
import LoginImage from "./assets/images/npa_dark.PNG"
import "./App.scss"

const App = () => {
  
  return (
    <div className="flexRow"
      // prevent the default browser right-click behaviour
      onContextMenu={(e) => {e.preventDefault()}}
    >
      <img alt="Triton" src={LoginImage} style={{height: "98vh"}} />
      <div style={{display: "block", margin: "auto"}}>
        <div className="flexRowCenter tridentLogoSignIn">Trident</div>
        <button
          className="button"
          style={{display: "block", margin: "auto", fontSize: 16}}
        >
          Sign in
        </button>
      </div>
    </div>
  )
}

export default App
