/*
 * imports of react packages
 */
import React from "react"
// import { FaUserLock } from "react-icons/fa"

/*
 * imports of implemented components and functions
 */
import NavigationBar from "./components/NavigationBar"
import BottomBar from "./components/BottomBar"
// import ContentArea from "./components/ContentArea"

/*
 * imports of styles
 * order is important! custom styles must be imported last
 */
import "./App.scss"

const App = () => {
  
  return (
    <div className="flexColumn" style={{backgroundColor: "black"}}
      // prevent the default browser right-click behaviour
      onContextMenu={(e) => {e.preventDefault()}}
    >
      <NavigationBar />
      <div
        className="landingPageTitle"
      >
        Nonphysical Audio
      </div>
      <p></p>
      <div
        className="landingPageText"
        // style={{display: "block", margin: "auto"}}
      >
        We are a team of scientists and engineers fascinated by the physics of sound
        and the psychology of music.
      </div>
      <p></p>
      <div
        className="landingPageText"
        // style={{display: "block", margin: "auto"}}
      >
        Our right and left brains are fully connected.
      </div>
      <p></p>
      <div
        className="landingPageText"
        // style={{display: "block", margin: "auto"}}
      >
        As hardware and software gurus, we write code to generate and transform audio.
      </div>
      <BottomBar />
    </div>
  )
}

export default App
