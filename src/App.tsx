/*
 * imports of react packages
 */
import React from "react"

/*
 * imports of implemented components and functions
 */
import NavigationBar from "./components/NavigationBar"
import BottomBar from "./components/BottomBar"

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
      >
        We are a team of scientists and engineers fascinated by the physics of sound
        and the psychology of music.
      </div>
      <p></p>
      <div
        className="landingPageText"
      >
        Our right and left brains are fully connected.
      </div>
      <p></p>
      <div
        className="landingPageText"
      >
        We build non-linear models and non-physical solutions for audio synthesis and transformation.
      </div>
      <BottomBar />
    </div>
  )
}

export default App
